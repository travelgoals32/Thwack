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
      <div className="grid grid-rows-[3fr_5fr] bg-rose-600 h-4/5">
        <div className="flex items-center justify-between">
          <div className="flex flex-row ml-10 items-center">
          <GlobeAltIcon className=" h-16 w-16 text-rose-500" />
          <div className="text-4xl font-bold ml-1">Thwack</div>
          </div>
          <div className="flex justify-evenly">
          <Link href="/login">
              <button className="mr-10 h-10 w-20 rounded border hover:bg-neutral-300 bg-white">
                Log In
              </button>
            </Link>
            
            </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex text-5xl flex-col">
            <h2 className="font-bold m-2 ml-14">Made for people.</h2>
            <h2 className="font-bold text-rose-300 m-2 ml-14">Built for productivity.</h2>
          </div>
          <div className="flex m-5">
          <Link href="/signup">
            <button className="ml-10 h-10 w-20 rounded border hover:bg-neutral-300 bg-white w-40">
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



