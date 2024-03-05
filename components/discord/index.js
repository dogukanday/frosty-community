import React from "react";
import { FaDiscord } from "react-icons/fa";

const index = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-6 mb-32">
      <section className="bg-blue-900 relative rounded-4xl p-6 overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative flex flex-col lg:flex-row lg:justify-between">
          <div className="text-white p-6 lg:py-12 lg:px-10 text-center lg:text-left">
            <div className="text-3xl font-bold">Frosty Communitye Katilin </div>
            <p className="mt-2 max-w-xl">
            Soğuk Diyarlara bizimle açılın{" "}
            </p>
          </div>
          <div className="flex-col gap-6 lg:pr-14">
            <a
              href="play.html"
              className="py-3 px-6 mt-11 justify-center rounded-2xl text-blue-100 text-xl font-bold bg-blue-400/20 flex gap-3 items-center hover:bg-blue-400/30"
            >
              Katil <FaDiscord />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
