import React from "react";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Page from "./components/Page";
import Nav from "./components/Nav";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
const App = () => {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
  });
  const [updatedGeneral, setUpdated] = useState({ ...general });
  const [typingSummary, setTypingSum] = useState("");
  const [summary, setSummary] = useState(typingSummary);
  const [workExperiences, setWorkExperiences] = useState([
    {
      jobTitle: "",
      employer: "",
      city: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [skill, setSkill] = useState([]);
  const [typeSkill, setTypeSkill] = useState("");
  return (
    // navbar
    <div className="min-h-screen bg-[#eeeae4]">
      <div>
        <Nav />
        <div className="min-h-screen flex">
          <section className="w-[20%] scrollbar-thin scrollbar-thumb-[#c4bcb2] overflow-y-auto h-screen min-h-280  ml-90  ">
            <div>
              <GeneralInformation
                general={general}
                setGeneral={setGeneral}
                typingSummary={typingSummary}
                setTypingSum={setTypingSum}
                setUpdated={setUpdated}
                setSummary={setSummary}
              />
            </div>
            {workExperiences.map((experience, index) => (
              <div key={index}>
                <WorkExperience
                  index={index}
                  workExperiences={experience}
                  setWorkExperiences={setWorkExperiences}
                />
              </div>
            ))}
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setWorkExperiences([
                    ...workExperiences,
                    {
                      jobTitle: "",
                      employer: "",
                      city: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    },
                  ]);
                }}
                className="border py-2 rounded-sm mt-1 px-5 bg-[#b56b45] text-white border-[#b56b45] font-extrabold text-xs cursor-pointer hover:bg-amber-700 transition-all"
              >
                + Add section
              </button>

              <button
                onClick={() => {
                  setWorkExperiences((curr) =>
                    curr.filter((_, i) => i !== curr.length - 1),
                  );
                }}
                className="border py-2 rounded-sm mt-1 px-5 bg-amber-50/50 text-black border-neutral-300 font-extrabold text-xs cursor-pointer hover:bg-amber-50 transition-all"
              >
                - Delete
              </button>
            </div>

            {/* education section */}
            {education.map((edu, index) => (
              <div key={index}>
                <Education
                  index={index}
                  education={edu}
                  setEducation={setEducation}
                />
              </div>
            ))}
            {/* education buttons  */}
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setEducation([
                    ...education,
                    {
                      degree: "",
                      school: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    },
                  ]);
                }}
                className="border py-2 rounded-sm mt-1 px-5 bg-[#b56b45] text-white border-[#b56b45] font-extrabold text-xs cursor-pointer hover:bg-amber-700 transition-all"
              >
                + Add section
              </button>

              <button
                onClick={() => {
                  setEducation((curr) =>
                    curr.filter((_, i) => i !== curr.length - 1),
                  );
                }}
                className="border py-2 rounded-sm mt-1 px-5 bg-amber-50/50 text-black border-neutral-300 font-extrabold text-xs cursor-pointer hover:bg-amber-50 transition-all"
              >
                - Delete
              </button>
            </div>

            <Skills
              skill={skill}
              setSkill={setSkill}
              setTypeSkill={setTypeSkill}
              typeSkill={typeSkill}
            />
          </section>

          <section className="w-1/2  p-10">
            <Page
              updatedGeneral={updatedGeneral}
              summary={summary}
              workExperiences={workExperiences}
              education={education}
              skill={skill}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
