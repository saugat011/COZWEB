import React from "react";
import Banner from "../../assets/blog2.jpg";
import { assets } from "../../assets/assets";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              We build apps that dominate Appworld, turning your ideas into trending success stories. Our expert team delivers user-centric, innovative solutions that capture attention and lead the market.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  React Native for cross-platform mobile app development
                  </li>
                  <li className="font-medium">
                  Swift for iOS app development
                  </li>
                  <li className="font-medium">
                  Flutter for fast, beautiful mobile apps
                  </li>

                  <li className="font-medium">Kotlin for Android app development</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
             <img
  src={assets.app_development2}
  alt="No image"
  className="max-auto w-3/4 hover:drop-shadow-md"
/>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;