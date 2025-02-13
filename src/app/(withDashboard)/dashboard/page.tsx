import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {session?.user && (
        <>
          <Image
            src={
              session?.user?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mb-2"
          />
          <h1 className="text-lg font-semibold text-center">
            Welcome <span className="text-blue-400">{session?.user?.name}</span>
          </h1>
          <h1 className="text-lg font-semibold text-center">
            Email: {session?.user?.email}
          </h1>
          <Link href={"/"}>
            <Button
              variant={"gray"}
              className="text-white bg-blue-400 font-semibold mt-4 text-base hover:bg-blue-400/90 hover:text-white"
            >
              Go Home
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
