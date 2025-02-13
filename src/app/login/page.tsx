/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success("Login successful");
        localStorage.setItem("accessToken", res?.data?.accessToken);
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-width h-screen flex justify-center items-center">
      <div className="w-full max-w-[550px] mx-auto bg-neutral-900 p-8 shadow-lg rounded-2xl">
        <h1 className="text-center text-3xl mb-5 font-bold">
          Login <span className="text-blue-400">Here</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none "
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none "
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-400 duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-200">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </p>

        <p className="text-center mt-3 text-sm text-gray-200">
          Or Sign Up Using
        </p>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://my-portfolio-shakiqurrahmans-projects.vercel.app/dashboard",
              })
            }
          >
            <Image
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={30}
              height={30}
              alt="Google logo"
            />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://my-portfolio-shakiqurrahmans-projects.vercel.app/dashboard",
              })
            }
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width={25}
              height={25}
              alt="GitHub logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
