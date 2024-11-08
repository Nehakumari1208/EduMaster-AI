"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <section className="bg-gray-50 h-[100vh]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
              AI Course Generator
            </h1>
            <span className="font-bold text-black text-4xl sm:block mt-5">
              Custom Learning Paths, Powered by AI
            </span>

            <p className="mt-4 text-slate-400 max-w-xl mx-auto sm:text-xl sm:leading-relaxed">
              Unlock personalized education with AI-driven course creation.
              Tailor your learning journey to fit your unique goals and pace.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                className="block w-full rounded bg-primary px-10 py-3 text-xl font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto mt-10"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
