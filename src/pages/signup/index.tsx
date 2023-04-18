import { NextPage } from "next"

const SignUpPage: NextPage = () => {

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1>Sign Up</h1>
            <div className="flex justify-evenly items-center flex-col h-80 w-80 border rounded">
                <div className="flex flex-col">
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user"className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="border rounded"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Verify Password</label>
                    <input type="password" id="password" className="border rounded"/>
                </div>
                <button className="border rounded">Submit</button>
            </div>
        </div>
    )
}

export default SignUpPage;