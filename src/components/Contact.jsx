import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
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
        <form
          target="_blank"
          onSubmit={onSubmit}
          method="POST"
          action="https://formsubmit.co/frewbefekadu32@gmail.com"
          className="flex flex-col p-10"
        >
          <label className="text-gray-500 text-sm font-bold mb-3 mt-2">
            Name
          </label>
          <input
            name="name"
            className="bg-[#FBEAEB] h-14 rounded pl-5 focus:outline-none text-gray-600"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500">
              {errors.name.type == "required" && "This field is required."}
              {errors.name.type == "maxLength" &&
                "Max length is 100 characters."}
            </p>
          )}
          <label className="text-gray-500 text-sm font-bold mb-3  mt-2">
            Email
          </label>
          <input
            name="email"
            className="bg-[#FBEAEB] h-14 rounded pl-5 focus:outline-none text-gray-600"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500">
              {errors.email.type == "required" && "This field is required."}
              {errors.email.type == "pattern" && "Invalid email address."}
            </p>
          )}
          <label className="text-gray-500 text-sm font-bold mb-3  mt-2">
            Messsage
          </label>
          <textarea
            name="message"
            className="bg-[#FBEAEB] rounded pl-5 pt-4 h-48 focus:outline-none text-gray-600"
            type="text"
            cols="30"
            rows="30"
            placeholder="Enter Your Message"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500">
              {errors.message.type == "required" && "This field is required."}
              {errors.message.type == "maxLength" &&
                "Max length is 2000 characters."}
            </p>
          )}
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
