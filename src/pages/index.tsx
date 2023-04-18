import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Slack</title>
      </Head>
      <div className="grid grid-rows-[3fr_5fr]">
        <div className="flex items-center justify-center">
          <GlobeAltIcon className="h-60 w-60 text-rose-500" />
          <div className="text-7xl font-bold text-rose-500">Thwack</div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex justify-center text-5xl ">
            Welcome to Thwack!
          </div>
          <div className="flex justify-center">
            <Link href="/login">
              <button className="mr-10 h-10 w-20 rounded border hover:bg-neutral-300">
                Log In
              </button>
            </Link>
            <Link href="/signup">
            <button className="ml-10 h-10 w-20 rounded border hover:bg-neutral-300">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



