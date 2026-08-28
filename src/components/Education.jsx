import React from "react";

const Education = ({ index, education, setEducation }) => {
  return (
    <div>
      <p className="mt-5 font-extrabold">Educational Experience</p>

      <div className="flex flex-col w-full border border-[#d8d3cb] rounded-sm bg-[#f5f2ed] px-5 py-5 mt-2 mb-2 gap-3">
        <p className="text-sm">Education {index + 1}</p>

        <input
          className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          type="text"
          placeholder="Degree / Qualification"
          value={education.degree}
          onChange={(e) =>
            setEducation((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, degree: e.target.value }
                  : experience,
              ),
            )
          }
        />

        <input
          className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          type="text"
          placeholder="School / University"
          value={education.school}
          onChange={(e) =>
            setEducation((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, school: e.target.value }
                  : experience,
              ),
            )
          }
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            type="date"
            value={education.startDate}
            onChange={(e) =>
              setEducation((curr) =>
                curr.map((experience, i) =>
                  i === index
                    ? { ...experience, startDate: e.target.value }
                    : experience,
                ),
              )
            }
          />

          <input
            className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            type="date"
            value={education.endDate}
            onChange={(e) =>
              setEducation((curr) =>
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
          className="border resize-none h-30 p-2 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          placeholder="Description (optional)"
          value={education.description}
          onChange={(e) => {
            setEducation((curr) =>
              curr.map((experience, i) =>
                i === index
                  ? { ...experience, description: e.target.value }
                  : experience,
              ),
            );
          }}
        />
      </div>
    </div>
  );
};

export default Education;
