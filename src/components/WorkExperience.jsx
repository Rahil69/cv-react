import React from "react";

const WorkExperience = ({ index, workExperiences, setWorkExperiences }) => {
  return (
    <div>
      <p className="mt-5 font-extrabold">Work Experience</p>
      <div className="flex flex-col w-full  border border-[#d8d3cb] rounded-sm bg-[#f5f2ed]  px-5 py-5 mt-2 mb-2 gap-3">
        <p className="text-sm">Experience {index + 1}</p>
        <input
          className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          type="text "
          placeholder="Job title"
          value={workExperiences.jobTitle}
          onChange={(e) =>
            setWorkExperiences((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, jobTitle: e.target.value }
                  : experience,
              ),
            )
          }
        />
        <input
          className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          type="text "
          placeholder="Employer"
          value={workExperiences.employer}
          onChange={(e) =>
            setWorkExperiences((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, employer: e.target.value }
                  : experience,
              ),
            )
          }
        />
        <input
          className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          type="text "
          placeholder="Town"
          value={workExperiences.city}
          onChange={(e) =>
            setWorkExperiences((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, city: e.target.value }
                  : experience,
              ),
            )
          }
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            type="date"
            value={workExperiences.startDate}
            onChange={(e) =>
              setWorkExperiences((curr) =>
                curr.map((experience, i) =>
                  i === index
                    ? { ...experience, startDate: e.target.value }
                    : experience,
                ),
              )
            }
          />
          <input
            className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            type="date"
            value={workExperiences.endDate}
            onChange={(e) =>
              setWorkExperiences((curr) =>
                curr.map((experience, i) =>
                  i === index
                    ? { ...experience, endDate: e.target.value }
                    : experience,
                ),
              )
            }
          />
        </div>
        <textarea
          className="border resize-none  h-30 p-2 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          name=""
          id=""
          placeholder="Description (optional)"
          value={workExperiences.description}
          onChange={(e) => {
            setWorkExperiences((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, description: e.target.value }
                  : experience,
              ),
            );
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default WorkExperience;
