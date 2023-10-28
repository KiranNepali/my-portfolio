import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#201e2a] flex justify-center p-4 items-center text-white"
    >
      <form
        method="POST"
        action="https://getform.io/f/26f7f088-c349-41cd-b3ec-7f7aaaaf55e8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold  inline border-b-4 border-red-300">
            Contact
          </p>
          <p className="py-4 text-[#9DB2BF]">
            // Submit this form or send me message to my email -
            itsmekiran44@gmail.com
          </p>
        </div>
        <input
          className=" text-[#526D82] p-2 bg-[#DDE6ED]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2  text-[#526D82] bg-[#DDE6ED]  "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 text-[#526D82] bg-[#DDE6ED]"
          placeholder="Messsage"
          name="message"
          id=""
          rows="10"
        ></textarea>
        <button className="text-white mx-auto border-2 px-6 py-2 mt-4 hover:bg-[#FFC436] hover:border-[#FFC436]">
          Submit
        </button>
      </form>
    </div>
  );
}
