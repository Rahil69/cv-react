import React from "react";

const GeneralInformation = ({
  general,
  setGeneral,
  typingSummary,
  setTypingSum,
  setUpdated,
  setSummary,
}) => {
  return (
    <div>
      <p className="mt-5 font-extrabold ">General Information</p>
      <div className="flex flex-col w-full  border border-[#d8d3cb] rounded-sm bg-[#f5f2ed]  px-5 py-5 mt-2 mb-2 gap-3">
        <input
          className="border  p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          name="name"
          placeholder="Full name"
          type="text"
          onChange={(e) => setGeneral({ ...general, name: e.target.value })}
          value={general.name}
        />
        <input
          className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => setGeneral({ ...general, email: e.target.value })}
          value={general.email}
        />
        <input
          className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          placeholder="Phone"
          type="text"
          onChange={(e) => setGeneral({ ...general, phone: e.target.value })}
          value={general.number}
        />
        <input
          className="border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
          placeholder="Address"
          type="text"
          onChange={(e) => setGeneral({ ...general, address: e.target.value })}
          value={general.address}
        />
        <div className="grid grid-cols-3 gap-2 ">
          <input
            className=" col-span-2 border p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light"
            placeholder="City"
            type="text"
            onChange={(e) => setGeneral({ ...general, city: e.target.value })}
            value={general.city}
          />
          <input
            type="number"
            className="border col-span-1 p-3 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light flex-1 min-w-1"
            placeholder="Zip-Code"
            onChange={(e) =>
              setGeneral({ ...general, zipcode: e.target.value })
            }
            value={general.zipcode}
          />
        </div>
        <textarea
          name="summary"
          id=""
          onChange={(e) => setTypingSum(e.target.value)}
          value={typingSummary}
          placeholder="Professional Summary"
          className="h-30 border p-2 bg-[#fffdf9] border-[#d6d0c8] rounded-sm text-sm font-light resize-none"
        ></textarea>
      </div>
      <button
        className="border py-2 rounded-sm mt-1  px-5  bg-[#b56b45] text-white border-[#b56b45] font-extrabold text-xs cursor-pointer hover:bg-amber-700 transition-all"
        type="submit"
        onClick={() => {
          setUpdated({ ...general });
          setSummary(typingSummary);
        }}
      >
        Save Information
      </button>
    </div>
  );
};

export default GeneralInformation;
