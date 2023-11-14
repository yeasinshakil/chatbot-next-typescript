"use client";
import Lottie from "lottie-react";
import animationData from "../../app/assets/animation1.json";

const HomeAnimation = () => {
  return (
    <div className="py-12 sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className=" text-shadows text-red-900 font-extrabold text-2xl sm:text-2xl lg:text-6xl tracking-tight text-center dark:text-white">
            Welcome to ChatBot Support
          </h1>
          <p className="mt-4 font-extrabold text-2xl">
            Discover your next favorite book today!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            BookBuddy ChatBot is a Ai based ChatBot to support BookBuddy
            customers that specializes in fantasy and mystery books. Discover
            our ChatBot support.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore books
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Our mission <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="flex h-screen items-center justify-center mt-4">
              <div style={{ width: "500px", height: "550px" }}>
                <Lottie animationData={animationData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;
