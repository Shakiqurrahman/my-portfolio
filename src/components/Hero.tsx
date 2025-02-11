import heroImg from "@/../public/assets/shakiqur.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-width flex flex-col md:flex-row items-center gap-10 mt-10 min-h-[calc(100vh-120px)]">
      <div className="w-full md:w-3/5">
        <h3 className="text-3xl font-bold mb-1 text-blue-400">
          Hello, It&apos;s Me
        </h3>
        <h1 className="text-5xl font-bold mb-4">Shakiqur Rahman</h1>
        <p className="text-neutral-300 md:max-w-[600px] mb-4">
          I&apos;m a professional Web Developer with several years of experience
          creating dynamic, responsive, and user-friendly websites. I have a
          diverse range of experience having worked across various fields and
          industries.
        </p>
        <p className="text-neutral-300 md:max-w-[600px]">
          If you&apos;re looking for a web developer who&apos;s passionate about
          creating high-quality websites that meet your unique needs, then
          let&apos;s connect!
        </p>
        <a href={"/Shakiqur rahman resume.pdf"} download>
          <Button
            variant={"gray"}
            className="mt-5 bg-white text-black hover:bg-white/90 text-base"
          >
            Download CV
          </Button>
        </a>
      </div>
      <div className="w-full md:w-2/5">
        <div className="p-4 sm:p-6 rounded-[15px] sm:rounded-[30px] bg-neutral-800">
          <Image
            src={heroImg}
            alt="Shakiqur Rahman"
            className="rounded-tl-[15px] sm:rounded-tl-[30px] rounded-br-[15px] sm:rounded-br-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
