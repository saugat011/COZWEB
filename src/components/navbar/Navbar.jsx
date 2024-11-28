import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { assets } from "../../assets/assets";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  }

  return (
    <>
    <header className=" relative z-[99] bg-navbar text-white border-b-[1px] border-primary/50">
      <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo section */}
        <div className="text-2xl md:text-3xl text-white">
          <a href="#">
            COZ <span className="inline-block font-bold text-primary">WEB</span>
          </a>
        </div>

        {/* Desktop menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] h-[72px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* Dropdown section */}
              <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Services</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                </ul>
              </div>
            </li>
            <li className="group cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] h-[72px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* Dropdown full-width section */}
              <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black shadow-md group-hover:block p-2">
                <div className="grid grid-cols-3 gap-5">
                  <div className="overflow-hidden">
                    <img
                      src={assets.tech_image}
                      alt="not found"
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="text-xl font-semibold pb-3">Best Selling</h1>
                    <p className="text-sm text-slate-600">
                      Discover top-tier solutions in web development, iOS and
                      mobile app development, and software creation. Our
                      expertise extends to cloud services, ensuring innovative,
                      efficient, and scalable digital products tailored to your
                      business needs.
                    </p>
                    <div className="grid grid-cols-3 mt-4">
                      <div>
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>
                        <ul className="space-y-2">
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Web Development
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            IOS App Development
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Software Development
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>
                        <ul className="space-y-2">
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Cloud Services
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Mobile App
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            App Development
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img src={assets.nav_table} alt="not found" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>Contact us</li>
            <li>
              <div className="flex items-center gap-4">
                <div>
                  <BiPhoneCall className="text-4xl w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                </div>
                <div>
                  <p>Call us on</p>
                  <p>
                    <a href="tel:+9779846966350">+977-9846966350</a>
                  </p>
                </div>
              </div>
            </li>

            {/* Light and dark mode switcher */}
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-2xl"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
              </button>
            </li>
          </ul>
        </div>
        {/* mobile menue section */}
        <div className="flex items-center gap-4 md:hidden">
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-2xl"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
            </button>
          </li>
          {showMenu ? (
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
          ) : (
            <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
          )}
        </div>
      </nav>
    </header>
    <ResponsiveMenu showMenu={showMenu}/>
    </>
    
  );
};

export default Navbar;
