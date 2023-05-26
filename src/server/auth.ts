import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import CredentialsProvider from "next-auth/providers/credentials"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
          session({ session, token }) {
            if (session.user && token.sub) {
              session.user.id = token.sub;
             }
             return session;
           }
      
          },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name:"Credentials",
      credentials: {
        //change this to email
        username: {label:"username",type:"text",placeholder:"jsmith"},
        password: {label:"password", type:"text"}
      },
      
      async authorize(credentials,req) {
        //add the prisma logic here later
        const user = {id:"1",name:"J Smith", email:"jsmith@gmail.com"}

  
        if (user) {
          return user;
        } else {
          return null;
        }
      }  
    })
  ],
  secret:process.env.SECRET,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn:"/login"
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
