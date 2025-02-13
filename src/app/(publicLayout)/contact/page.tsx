"use client";

import { submitContact } from "@/utils/actions/contactActions";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

export interface IContactInfo {
  name: string;
  email: string;
  message: string;
}
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await submitContact(formData);
      if (!response) {
        toast.error("Failed to send message");
        return;
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("failed to send message");
    }
  };

  return (
    <section className="max-width mt-24 flex md:flex-row flex-col gap-20 md:items-center">
      <div>
        <h3 className="mb-7 uppercase font-semibold">Contact Info</h3>
        <div className="flex items-center gap-6 mb-[55px]">
          <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-[#1c1c1c]">
            <MdEmail />
          </span>
          <span>
            <p className="text-[14px] text-[#BCBCBC] opacity-50 uppercase mb-1">
              Mail US
            </p>
            <a
              href="mailto:rahmanshakiqur@gmail.com"
              className="text-white opacity-80 font-semibold text-[14px]"
            >
              rahmanshakiqur@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6 mb-[55px]">
          <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-[#1c1c1c]">
            <MdCall />
          </span>
          <span>
            <p className="text-[14px] text-[#BCBCBC] opacity-50 uppercase mb-1">
              Contact US
            </p>
            <a
              href="tel:+8801761094636"
              className="text-white opacity-80 font-semibold text-[14px]"
            >
              +88 01761-094636
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6 mb-[55px]">
          <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-[#1c1c1c]">
            <MdLocationOn />
          </span>
          <span>
            <p className="text-[14px] text-[#BCBCBC] opacity-50 uppercase mb-1">
              Location
            </p>
            <a className="text-white opacity-80 font-semibold text-[14px]">
              Sylhet, Bangladesh
            </a>
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 flex-1 px-5 py-[40px] sm:px-[40px] rounded-2xl"
      >
        <h1 className="sm:text-[44px] text-[30px] mb-[30px]">
          Let&apos;s work <span className="text-[#5b78f6]">together.</span>
        </h1>
        <input
          className="w-full text-sm text-white bg-neutral-800 outline-none px-5 py-4 rounded-[10px] mb-3"
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="w-full text-sm text-white bg-neutral-800 outline-none px-5 py-4 rounded-[10px] mb-3"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="w-full text-sm text-white bg-neutral-800 outline-none px-5 py-4 rounded-[10px] mb-3 resize-none h-[150px]"
          name="message"
          autoComplete="off"
          placeholder="Your Message *"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className="w-full text-sm text-white bg-neutral-800 outline-none px-5 py-4 rounded-[10px] mb-2 hover:bg-white hover:text-black duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
