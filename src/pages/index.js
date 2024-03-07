import Header from "@/components/Header";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <div className="h-screen w-screen mx-30">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <section>
            <div className="flex">
              <div>
                <img className="h-8" src="/svg/tki.svg" alt="TKI" />
                <div className="SolusiGoDigital my-4 w-[658px] h-[49px] text-white text-[64px] font-bold leading-normal text-6xl">
                  Solusi GO Digital.
                </div>
                <div className="w-[564px] pt-10 text-white font-semibold leading-normal text-xl">
                  Ayoo! Bergabung bersama ratusan ribu pelanggan kita yang telah
                  menggunakan produk kami.
                </div>
                <div className="bg-white h-5 my-6 w-96 rounded-full"></div>
                <div className="bg-white h-5 my-6 w-96 rounded-full"></div>
                <div className="bg-white h-5 my-6 w-96 rounded-full"></div>
              </div>
              <img
                className="m-5 w-[569px] -translate-y-36"
                src="/svg/Rectangle 3850.svg"
                alt="Rectangle 3850"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
