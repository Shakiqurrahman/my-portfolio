import { AiOutlineLoading3Quarters } from "react-icons/ai";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] w-full">
      <AiOutlineLoading3Quarters className="text-5xl animate-spin" />
    </div>
  );
};

export default loading;
