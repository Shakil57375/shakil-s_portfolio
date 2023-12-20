import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Utils/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // template_4pbavrf
  // service_q09ufjn
  // ES7H0YVzk63tZ2zyI
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q09ufjn",
        "template_4pbavrf",
        {
          from_name: form.name,
          to_name: "Shakil Hossain",
          from_email: form.email,
          to_email: "shakil57375@gmail.com",
          message: form.message,
        },
        "ES7H0YVzk63tZ2zyI"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Swal.fire("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section className="h-[850px]">
      <div className="paddingX paddingY">
        <SectionTitle
          titleFirstWord={"Contact Me"}
          titleFirstClassName={"text-8xl text-white font-bold font-Montserrat"}
          divClassName={"left-28 flex justify-center "}
        ></SectionTitle>
        <div className="flex justify-between items-start">
          <div className="w-96 h-96 border-b-cyan-500 border-t-transparent  border-r-transparent border-l-transparent rounded-full rotate-45 border-[60px] flex items-center justify-center ">
          <div className="w-40 h-40 border-b-cyan-500 border-t-transparent  border-r-transparent border-l-transparent rounded-full rotate-[360deg] border-[40px]"></div>
          </div>
          <div
            className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
            <div className="flex-[0.75]  rounded-2xl">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col  gap-8  shadow-xl  lg:hover:-translate-y-2 lg:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:-translate-x-2 rounded-lg  relative lg:transform sm:transform-none lg:transition sm:transition-none sm:duration-0 lg:duration-300 p-0 lg:p-8 ease-in-out pb-5"
              >
                <label className="flex flex-col">
                  <span className="  font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className=" py-4 px-6 placeholder:text-cyan-500 border border-cyan-500 rounded-lg  font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="  font-medium mb-4">Your email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className=" py-4 px-6 placeholder:text-cyan-500 border border-cyan-500 rounded-lg  font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className=" font-medium mb-4">Your Message</span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className=" py-4 px-6 border border-cyan-500 placeholder:text-cyan-500  rounded-lg   font-medium"
                  />
                </label>
                <button
                  type="submit"
                  className=" py-3 px-8 rounded-xl bg-cyan-500 text-white  w-fit  font-bold shadow-lg mx-auto "
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
