import { Button } from "@/components/ui/button";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="max-width min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <h1 className="text-7xl font-black mb-2 text-white">404</h1>
      <h4 className="text-2xl font-semibold mb-2 ">
        OOPS! THAT PAGE CAN&apos;T BE FOUND.
      </h4>
      <p className="max-w-[500px] text-center text-neutral-400 text-sm mb-6">
        It looks like nothing was found at this location. You can either go back
        to the last page or go to homepage
      </p>
      <Link href={"/"}>
        <Button variant={"gray"} className="text-sm sm:text-base">
          Back Home
        </Button>
      </Link>
    </section>
  );
};

export default notFound;
