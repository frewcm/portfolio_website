import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sent, setSent] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a07af2f",
        "template_h9g3pf9",
        form.current,
        "8mJrfa-ooegIQgQ2c"
      )
      .then(
        (result) => {
          setSent(result.text);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full h-[900px] bg-[#FBEAEB] flex flex-col items-center "
    >
      <div className="w-3/4 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">CONTACT</p>
        <hr className="border-4 w-10 border-[#2F3C7E] rounded mt-5 mb-5" />
        <p className="text-center text-gray-500 leading-7">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as <br /> possible
        </p>
      </div>
      <div className="md:w-[600px] lg:w-[700px] lg:h-[600px] bg-white mt-20 rounded shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col p-10">
          <label className="text-gray-500 text-sm font-bold mb-3 mt-2">
            Name
          </label>
          <input
            name="user_name"
            className="bg-[#FBEAEB] h-14 rounded pl-5 focus:outline-none text-gray-500"
            type="text"
            placeholder="Enter Your Name"
          />
          <label className="text-gray-500 text-sm font-bold mb-3  mt-2">
            Email
          </label>
          <input
            name="user_email"
            className="bg-[#FBEAEB] h-14 rounded pl-5 focus:outline-none text-gray-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <label className="text-gray-500 text-sm font-bold mb-3  mt-2">
            Messsage
          </label>
          <textarea
            name="message"
            className="bg-[#FBEAEB] rounded pl-5 pt-4 h-48 focus:outline-none text-gray-500"
            type="text"
            cols="30"
            rows="30"
            placeholder="Enter Your Message"
          ></textarea>
          <p className="text-white bg-green-500 rounded w-10 text-center font-bold">
            {sent}
          </p>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-44 p-4 mt-10 bg-[#2F3C7E] text-white rounded shadow-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
