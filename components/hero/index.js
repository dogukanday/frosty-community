import React from "react";
import Image from "next/image";
import Logo from "@/public/image/logo.png";


const index = () => {
  return (
    <div id="app">
      
      <div className="relative h-96 overflow-x-clip">
        <div className="z-10 bg-cover inset-0 absolute bck"></div>
        <div className="absolute z-20 inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="z-20 absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-500/60"></div>
        <div className="absolute bottom-40 left-0 w-full z-40 select-none text-center">
          <p className="text-white/10 text-6xl font-black tracking-widest">
            Frosty Community
          </p>
        </div>
        <div className="z-30 absolute bottom-0 left-0 w-full grid grid-cols-12 gap-4 bg-gradient-to-l via-black/[0.15] from-transparent">
          <div
            className="hidden lg:flex col-span-5 group justify-end items-center cursor-pointer relative gap-5 py-6"
            data-toggle="copyip"
            data-clipboard-action="copy"
            data-clipboard-text="play.hypixel.net"
          >
            <div className="flex flex-col items-end pr-4">
              <p className="font-semibold text-2xl text-white">
                Fivem
              </p>
              <div className="text-emerald-300 font-semibold text-sm relative overflow-hidden">
                <span
                  className="transition block group-hover:-translate-y-full transform duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
                <span
                  className="absolute left-0 bottom-0 translate-y-full transition group-hover:translate-y-0 duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end pr-4">
              <p className="font-semibold text-2xl text-white">
                Minecraft
              </p>
              <div className="text-emerald-300 font-semibold text-sm relative overflow-hidden">
                <span
                  className="transition block group-hover:-translate-y-full transform duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
                <span
                  className="absolute left-0 bottom-0 translate-y-full transition group-hover:translate-y-0 duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end pr-4">
              <p className="font-semibold text-2xl text-white">
                Rust
              </p>
              <div className="text-emerald-300 font-semibold text-sm relative overflow-hidden">
                <span
                  className="transition block group-hover:-translate-y-full transform duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
                <span
                  className="absolute left-0 bottom-0 translate-y-full transition group-hover:translate-y-0 duration-300"
                  data-toggle="onlinetext"
                  server-ip="play.hypixel.net"
                >
                  -/-players online{" "}
                </span>
              </div>
            </div>
            <div className="text-white text-4xl px-3">
              <i className="fas fa-chess-queen"></i>
              <div className="absolute h-full top-0 center text-7xl opacity-50 blur-sm -right-2">
                <i className="opacity-25 left-0 fas fa-chess-queen"></i>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 flex justify-center">
            <a
              href="index.html"
              className="h-full block top-10 lg:top-[unset] relative lg:absolute"
            >
              <Image
                className="shadow-image -mt-4 hover:scale-110 duration-500"
                width={200}
                height={200}
                src={Logo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="hidden lg:flex col-span-5 items-center cursor-pointer relative py-6 group">
            <div className="text-white text-4xl px-3">
              <i className="fab fa-discord"></i>
              <div className="absolute h-full top-0 center text-7xl opacity-50 -left-3 blur-sm">
                <i className="opacity-25 left-0 fab fa-discord"></i>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start pl-4">
              <p className="font-semibold text-2xl text-white">
                Discord sunucumuza Katil{" "}
              </p>
              <div className="text-emerald-300 font-semibold text-sm relative overflow-hidden">
                <a
                  href="#"
                  target="_blank"
                  className="transition block group-hover:-translate-y-full transform duration-300"
                  data-toggle="discordonline"
                  data-discord-id="0"
                >
                  -/-Users Online{" "}
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  className="absolute left-0 bottom-0 translate-y-full transition group-hover:translate-y-0 duration-300"
                  data-toggle="discordonline"
                  data-discord-id="0"
                >
                  -/-Users Online{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default index;
