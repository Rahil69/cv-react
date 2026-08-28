import React from "react";

const Nav = () => {
  return (
    <>
      <section className="border border-[#d8d3cb] shadow-sm bg-[#f8f6f2]  px-50 py-10 flex justify-between">
        <h1 className="text-2xl text-[#171717] font-serif">
          MakeMy<span className="border-b text-[#b56b45]">CV</span>
        </h1>
        <button
          onClick={() => {
            alert("I didnt do all that yet");
          }}
          className="hover:cursor-pointer text-white px-6 bg-[#b56b45] border p-2 rounded-sm font-light hover:bg-amber-800 transition-all text-md"
        >
          Download CV
        </button>
      </section>
    </>
  );
};

export default Nav;
