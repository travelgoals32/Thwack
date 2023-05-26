import { NextPage } from "next"
import { signIn } from "next-auth/react"
import { useState } from "react"

const LoginPage: NextPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState(""); 

    const clickHandler = async () => {
        const result = await signIn("credentials", {
            username:userName,
            password:password,
            email:email,
            redirect:true,
            callbackUrl:"/"
        }

        )
        
    }
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" mb-12 text-2xl font-bold">Log into Thwack!</h1>
            <div className="flex justify-evenly items-center flex-col h-80 w-80 border rounded">
                <div className="flex flex-col">
                    <label htmlFor="user">Email</label>
                    <input type="email" id="user"className="border rounded" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user"className="border rounded" value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="border rounded" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="border rounded bg-rose-500 w-40 h-10" onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
}

export default LoginPage;