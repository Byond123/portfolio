import Head from "next/head";
import Image from "next/image";
import React from "react";
import banner from "../assests/images/banner.jpg";

const portfolioList = [
  {
    id: 1,
    img: banner,
    name: "Project 1",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: banner,
    name: "Project 2",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: banner,
    name: "Project 3",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>My Portfolio - John Doe</title>
        <meta
          name="description"
          content="My portfolio page showcasing my work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-2 py-2 sm:px-4 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            My Portfolio
          </h1>

          <div className="flex flex-col md:flex-row items-center  justify-center w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-4 my-8">
            {portfolioList.map((e) => (
              <div className="md:w-1/3" key={e.id}>
                <Image
                  src={e.img}
                  alt={e.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <h2 className="text-2xl font-bold mt-4">{e.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{e.dec}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
