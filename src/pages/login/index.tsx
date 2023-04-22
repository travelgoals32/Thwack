import { NextPage } from "next"

const LoginPage: NextPage = () => {

    const clickHandler = () => {
        console.log("I was clicked!")
    }


    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" mb-12 text-2xl font-bold">Log into Thwack!</h1>
            <div className="flex justify-evenly items-center flex-col h-80 w-80 border rounded">
                <div className="flex flex-col">
                    <label htmlFor="user">Email</label>
                    <input type="email" id="user"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="border rounded"/>
                </div>
                <button className="border rounded bg-rose-500 w-40 h-10" onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
}

export default LoginPage;