import Link from "next/link";
import React from "react";

const link = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },


];

const Header = () => {
  return (
    <div className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl italic">My Portfolio</h2>
        </div>
        <div>
          <ul className="flex gap-5">
          {link.map((e)=>(
            <li><Link href={e.url}>{e.name}</Link></li>
            ))}
            </ul>
            </div>
            <div className="flex gap-5">
              <Link href={"/signin"} className="bg-slate-300 px-5 py-2 rounded-xl text-slate-900">SignIn</Link>
              <Link href={"/signup"} className="bg-transparent border-2 border-white px-5 py-2 rounded-xl">SignUp</Link>
            </div>
      </div>
    </div>
  );
};

export default Header;
