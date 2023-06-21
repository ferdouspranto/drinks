import React from "react";
// import { useNavigate } from "react-router-dom";

function Contact() {
  // const navigate = useNavigate();
  // const navigateToContact = () => {
  //   navigate("/contact");
  // };
  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Please fill out the form below to get in touch with us.
      </p>

      <form className="mt-8">
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-lg font-medium">First Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-lg font-medium">Last Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-lg font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-lg font-medium">Phone</label>
            <input
              type="tel"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Message</label>
          <textarea
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
