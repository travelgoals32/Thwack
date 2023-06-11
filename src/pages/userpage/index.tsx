import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {ClockIcon, QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import {UserIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {QueueListIcon,RectangleStackIcon, BookmarkIcon,ClipboardDocumentIcon} from "@heroicons/react/24/outline"



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Slack</title>
      </Head>
      <div className="grid grid-rows-[40px_1fr] h-full">
        <div className="grid grid-cols-[3fr_10fr] bg-indigo-600">
          <div className="flex justify-end items-center">
            <ClockIcon className="h-6 w-6 text-white mr-5"/>
          </div>
          <div className="grid grid-cols-[7fr_3fr]">
            <div className="flex items-center">
              <input type="text" className="rounded w-5/6 opacity-75"/>
            </div>
            <div className="flex justify-end items-center">
              <div className="mr-5">
                <QuestionMarkCircleIcon className="text-white h-6 w-6"/>
              </div>
              <div className="mr-3">
                <UserIcon className="text-white h-6 w-6"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[3fr_10fr] bg-rose-600">
          <div className="bg-stone-400">

            <div className=" flex items-center flex-row justify-around h-20 border-white border-b-2">
              <div className=" flex flex-row items-center font-bold text-white">
                <h1>My Slack</h1>
                <ChevronDownIcon className=" h-4 w-4 ml-2"/>
              </div>
              <div className=" flex items-center justify-center bg-white h-10 w-10 rounded-3xl ">
                <ClipboardDocumentIcon className=" h-6 w-6"/>
              </div>
            </div>
            <div className=" flex flex-col m-8">
              <div className=" h-40 w-40">
                <div className="flex">
                <QueueListIcon className=" h-6 w-6"/>
                <h3 className="">Threads</h3>
                </div>
                <div className="flex">
                <RectangleStackIcon className=" h-6 w-6"/>
                <h3 className="">Drafts</h3>
                </div>
                <div className="flex">
                  <BookmarkIcon className=" h-6 w-6"/>
                <h3 className="">Saved Items</h3>
                </div>
                </div>
          </div>
        </div>
        <div className=" flex justify-center items-end">
          <input type="text" className=" h-16 w-11/12 mb-5"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
