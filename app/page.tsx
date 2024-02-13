import { submitCredintials } from "@/actions/submitCredintials";
import OldTimetableAlert from "@/components/OldTimetableAlert";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  // throw "example error message";
  return (
    <div className="max-w-lg w-[95vw] mx-auto p-4 m- overflow-hidden">
      <p className="mb-2 text-xl">Enter your username and password.</p>

      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 ">
        Note: Use the same username and password you use to log in to iCampus.
      </p>

      <form action={submitCredintials} className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <AiOutlineUser className="w-6 h-6 text-gray-600" />
          <input
            required
            name="username"
            type="text"
            className="ml-2 flex-1 focus:outline-none bg-transparent border-none text-gray-100 focus:border-blue-500"
            placeholder="Username"
          />{" "}
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <AiOutlineLock className="w-6 h-6 text-gray-600" />
          <input
            required
            name="password"
            type="password"
            className="ml-2 flex-1 bg-transparent border-none text-gray-100 focus:outline-none focus:border-blue-500"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <SubmitButton />

          <p className="text-sm text-gray-500 dark:text-gray-300">
            <a
              href="#"
              className="text-purple-500 dark:text-purple-300 hover:underline ml-4 whitespace-nowrap overflow-hidden"
            >
              Privacy Policy{" "}
            </a>
            <FaUpRightFromSquare className="inline-block" />
          </p>
        </div>
      </form>

      <OldTimetableAlert />
    </div>
  );
}
