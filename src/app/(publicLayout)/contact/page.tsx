import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
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
        <h3 className="mb-7 uppercase font-semibold">Social Info</h3>
        <div className="flex gap-6">
          <div className="w-16 h-16 rounded-full text-[32px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
            <a
              href="https://www.facebook.com/shakqur.rahmankayum"
              target="blank"
              area-label="Facebook Link"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full text-[32px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/shakiqurrahman/"
              target="blank"
              area-label="Linkedin Link"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="w-16 h-16 rounded-full text-[32px] bg-[#ffffff09] border border-[#ffffff12] duration-300 hover:bg-white hover:text-black flex justify-center items-center">
            <a
              href="https://www.instagram.com/retro_phile__/"
              target="blank"
              area-label="Instagram Link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <form className="bg-neutral-900 flex-1  px-5 py-[40px] sm:px-[40px] rounded-2xl">
        <h1 className="sm:text-[44px] text-[30px] mb-[30px]">
          Let&apos;s work <span className="text-[#5b78f6]">together.</span>
        </h1>
        <input
          className="w-full relative z-20  text-sm text-white bg-neutral-800 outline-none border-none px-5 py-4 rounded-[10px] mb-3"
          type="text"
          name="name"
          autoComplete="off"
          id="name"
          placeholder="Name *"
          required
        />
        <input
          className="w-full relative z-20  text-sm text-white bg-neutral-800 outline-none border-none px-5 py-4 rounded-[10px] mb-3"
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Email *"
          required
        />
        <textarea
          className="w-full relative z-20  text-sm text-white bg-neutral-800 outline-none border-none px-5 py-4 rounded-[10px] mb-3 resize-none h-[150px]"
          name="message"
          id="message"
          autoComplete="off"
          placeholder="Your Message *"
        ></textarea>
        <button
          className="w-full relative z-20  text-sm text-white bg-neutral-800 outline-none border-none px-5 py-4 rounded-[10px] mb-2 hover:bg-white hover:text-black duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
