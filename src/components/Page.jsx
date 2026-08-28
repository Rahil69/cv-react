import React from "react";

const Page = ({
  updatedGeneral,
  summary,
  workExperiences,
  education,
  skill,
}) => {
  return (
    <>
      <div className="bg-white w-[210mm] min-h-[297mm] p-10 shadow-xl">
        <div className="flex justify-between">
          <h1 className="text-4xl mt-3 font-serif font-extrabold tracking-tight">
            {updatedGeneral.name || "Your Name"}
          </h1>

          <div className="text-right text-xs flex flex-col gap-1.5 text-neutral-600">
            <p>{updatedGeneral.email || "youremail@example.com"}</p>
            <p>{`+960 ${updatedGeneral.phone}` || "+960-7752315"}</p>
            <p>{updatedGeneral.address || "Address"}</p>
            <p>{updatedGeneral.city || "City"}</p>
            <p>{updatedGeneral.zipcode || "ZipCode"}</p>
          </div>
        </div>

        <div className="w-full h-px bg-black mt-5"></div>

        <div>
          <div className="mt-10">
            <h1 className="tracking-[2.5px] text-[#b56b45] text-sm font-bold">
              Profile Summary
            </h1>

            <p className="text-xs mt-5 font-extralight">
              {summary ||
                "Motivated developer with an interest in building clean, practical web applications. Comfortable working with JavaScript, React, Node.js and modern web technologies."}
            </p>
          </div>

          {/* work exp */}
          <div>
            <h1 className="mt-10 tracking-[2.5px] text-[#b56b45] text-sm font-bold">
              Experience
            </h1>

            {workExperiences.map((_, index) => {
              return (
                <div className="mb-5 pb-10" key={index}>
                  <div className="mt-2 flex justify-between">
                    <p className="font-bold text-md">
                      {workExperiences[index].jobTitle ||
                        "Full-Stack Developer"}
                    </p>

                    <div className="text-right text-xs text-neutral-700 font-extralight">
                      {workExperiences[index].startDate &&
                      workExperiences[index].endDate
                        ? `${workExperiences[index].startDate} — ${workExperiences[index].startDate}`
                        : "2026-01-10 — 2026-08-20"}
                    </div>
                  </div>

                  <p className="text-sm mt-2 text-neutral-600 font-bold">
                    {workExperiences[index].employer || "Company name"}
                  </p>

                  <p className="text-xs mt-2 text-neutral-500 font-extralight">
                    {workExperiences[index].city || "Maldives, Addu"}
                  </p>

                  <p className="text-xs mt-2 text-black font-extralight">
                    {workExperiences[index].description ||
                      "Worked on web applications using React, Node.js and MongoDB. Built reusable components, REST APIs and responsive interfaces."}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full h-px bg-black m-auto"></div>

          {/* education */}
          <div>
            <h1 className="mb-1 mt-10 tracking-[2.5px] text-[#b56b45] text-sm font-bold">
              Education
            </h1>

            {education.map((_, index) => {
              return (
                <div key={index} className="mb-5 pb-10">
                  <div className="flex justify-between">
                    <p className="font-bold text-md">
                      {education[index].degree ||
                        "Master of Computer Applications"}
                    </p>

                    <div className="text-right text-xs text-neutral-700 font-extralight">
                      {education[index].startDate && education[index].endDate
                        ? `${education[index].startDate} — ${education[index].startDate}`
                        : "2026-01-10 — 2026-08-20"}
                    </div>
                  </div>

                  <p className="text-xs mt-2 text-neutral-600 font-extralight">
                    {education[index].school || "University / Institution"}
                  </p>

                  <p className="text-xs mt-2 text-black font-extralight">
                    {education[index].description ||
                      "Coursework focused on software development, databases, data structures and web technologies."}
                  </p>
                </div>
              );
            })}
          </div>

          {/* skills */}
          <h1 className="mb-1 mt-10 tracking-[2.5px] text-[#b56b45] text-sm font-bold">
            Skills
          </h1>

          <div className="flex gap-5">
            {skill.map((curr, index) => {
              return (
                <div key={index}>
                  <p className="border-[#ece9e6] py-2 px-5 rounded-sm text-sm bg-[#eeeae4]">
                    {curr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
