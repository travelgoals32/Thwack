import { NextPage } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { z } from "zod";



const SignUpPage: NextPage = () => {
    const router = useRouter();

    const [email,setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [verifyPassword,setVerifyPassword] = useState("");

   const clickHandler = () => {
    
    const emailSchema = z.string().email();
    const userNameSchema = z.string();
    const passwordSchema = z.string().min(6)
    
    const emailResult = emailSchema.safeParse(email);


    // router.push("/userpage")
    
   }


    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" mb-12 text-2xl font-bold">Sign Up with Thwack!</h1>
            <div className="flex justify-evenly items-center flex-col h-80 w-80 border rounded">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}value={email} id="email"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user">Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}value={username} id="user"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}value={password} id="password" className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Verify Password</label>
                    <input type="password" onChange={(e) => setVerifyPassword(e.target.value)}value={verifyPassword} id="password" className="border rounded"/>
                </div>
                <button className="border rounded bg-rose-500 w-40 h-10" onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
}

export default SignUpPage;