import { GiClothes } from "react-icons/gi";

import Link from "next/link";
import ClothCardList from "./ClothCardList";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export default async function Clothes() {
  return (
    <section className="flex flex-col gap-6 bg-lightRose1 px-6 pt-11 pb-9 ">
      <div className="flex gap-[1rem] md:gap-3 lg:gap-5 items-center mx-auto">
        <GiClothes className="text-3xl text-rose-900" />
        <h3 className="capitalize text-[1.125rem] md:text-xl lg:text-2xl font-semibold lg:font-bold leading-6  text-rose-800 font-nunito lg:pb-5">
          A glance at some of our clothes
        </h3>
        <Suspense
          fallback={
            <div className="grid items-center justify-center">
              <ClipLoader
                color="#D92D2C"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <ClothCardList />
        </Suspense>
      </div>

      <Link
        className=" w-max font-semibold text-darkRose2 mt-2 border-b-2 border-solid border-transparent hover:border-darkRose1 p-1 transition-all  duration-300 active:scale-90 focus:border-darkRose1 focus:border-2 md:text-base lg:text-lg"
        href="/clothes"
      >
        Browse our collection &rarr;
      </Link>
    </section>
  );
}
