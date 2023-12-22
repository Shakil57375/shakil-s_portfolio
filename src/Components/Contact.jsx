import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Utils/SectionTitle";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import "./Contact.css";
import GradientBackground from "./GradientBackground";
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
    <section className="h-fit  paddingY paddingX text-white relative">
      <SectionTitle
        titleFirstWord={"Contact Me"}
        titleFirstClassName={"text-8xl text-white font-bold font-Montserrat"}
        divClassName={"left-28 flex justify-center "}
      ></SectionTitle>
      <GradientBackground
        className={`absolute top-20 right-4 bg-blue-800 blur-[120px] w-96 h-80 opacity-40`}
      />
      <GradientBackground
        className={`absolute top-60 left-0 bg-rose-700 blur-[120px] w-96 h-80 opacity-40`}
      />
      <div className="flex lg:flex-row flex-col justify-between items-start mt-12 gap-10 lg:px-0 px-2">
        <div className="basis-full lg:basis-1/2 space-y-12">
          <p className="text-3xl font-Poppins font-semibold">
            Drop me a Message
          </p>
          <p className="my-6 text-sm font-Poppins leading-7">
            As a passionate front-end developer, I thrive on turning ideas into
            visually stunning and interactive web experiences. Whether you have
            a project in mind, need help solving a coding challenge, or just
            want to chat about the latest web technologies, I am here for you!
          </p>
          <div className="space-y-7">
            <div className="flex items-center gap-4">
              <FiPhone className="text-3xl" />
              <p className="text-2xl ">+880 1814265294</p>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineMailOpen className="text-3xl" />
              <p className="text-2xl ">shakil57375@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <IoLocationOutline className="text-3xl" />
              <p className="text-2xl ">Barura, Cumilla, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2">
          <div className="rounded-2xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <label className="flex flex-col">
                <span className="  text-xl text-white font-medium mb-4">
                  Your Name *
                </span>
                <input
                  type="text"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className=" py-4 px-6 placeholder:text-gray-400 border-none focus:border-none rounded-lg font-medium bg-[rgba(36,9,28,255)] outline-none focus:outline-none text-white lg:w-full w-96"
                />
              </label>
              <label className="flex flex-col">
                <span className="  text-xl text-white font-medium mb-4">
                  Your email *
                </span>
                <input
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="  py-4 px-6 placeholder:text-gray-400 border-none focus:border-none rounded-lg font-medium bg-[rgba(36,9,28,255)] outline-none focus:outline-none text-white lg:w-full w-96"
                />
              </label>
              <label className="flex flex-col">
                <span className=" text-xl text-white font-medium mb-4">
                  Your Message *
                </span>
                <textarea
                  rows={7}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className=" py-4 px-6 placeholder:text-gray-400 border-none focus:border-none rounded-lg font-medium bg-[rgba(36,9,28,255)] outline-none focus:outline-none text-white lg:w-full w-96"
                />
              </label>
              <button
                type="submit"
                className="py-4 px-12 rounded-xl bg-fuchsia-600 text-white w-fit  font-bold shadow-lg mx-auto"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
