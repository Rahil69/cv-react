import React from "react";

const Skills = ({ skill, setSkill, typeSkill, setTypeSkill }) => {
  return (
    <div>
      <p className="mt-5 font-extrabold ">Skills</p>
      <div className="flex flex-col w-full  border border-[#d8d3cb] rounded-sm bg-[#f5f2ed]  px-5 py-5 pb-10 mt-2 mb-2 gap-3">
        <div className=" gap-2 grid grid-cols-4">
          <input
            type="text"
            placeholder="e.g: React"
            name=""
            id=""
            className="border col-span-3 p-2 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            onChange={(e) => {
              setTypeSkill(e.target.value);
            }}
            value={typeSkill}
          />
          <button
            onClick={() => {
              typeSkill
                ? setSkill([...skill, typeSkill], setTypeSkill(""))
                : "";
            }}
            className="col-span-1 border rounded-sm  bg-[#b56b45] text-white border-[#b56b45] font-extrabold text-xs cursor-pointer hover:bg-amber-700 transition-all"
          >
            Add
          </button>
          <div className="flex flex-wrap  gap-5">
            {skill.map((item, index) => (
              <div key={index} className="flex gap-2  items-center">
                <p>{item}</p>
                <button
                  onClick={() => {
                    setSkill(skill.filter((_, i) => i !== index));
                  }}
                  className="border py-1 rounded-sm mt-1 px-5 bg-amber-50/50 text-black border-neutral-300 font-extrabold text-xs cursor-pointer hover:bg-amber-50 transition-all"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
