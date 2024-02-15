import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 !text-black">
            Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4 ">
            Last updated:{" "}
            <span className="text-gray-700">January 15, 2024</span> by{" "}
            <span className="text-gray-700">developer.gerison</span>
          </p>
          <p className="text-gray-700 mb-4">
            As the developer of Cute Timetable, I am committed to protecting
            your privacy. Please read this policy carefully to understand how I
            collect, use, and safeguard your personal information.
          </p>
          <p className="text-gray-700 mb-4">
            Cute Timetable is an app designed to help you manage your schedule
            efficiently. It does not save any user-entered details, such as
            usernames or passwords, on any server. I value transparency and
            openness, which is why the entire codebase is open source.
          </p>
          <p className="text-gray-700 mb-4">
            When you use Cute Timetable, your credentials are used solely to
            scrape the iCampus website and retrieve your timetable. I do not
            store your passwords anywhere. You can view the implementation
            details of the API and website on the respective GitHub
            repositories:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              API Implementation:{" "}
              <Link
                target="_blank"
                href="https://github.com/gerkim62/ueab-icampus-timetable-scraper"
                className="text-blue-500 underline"
              >
                API GitHub Repository
              </Link>
            </li>
            <li>
              Website Implementation:{" "}
              <Link
                target="_blank"
                href="https://github.com/gerkim62/icampus-cute-timetable"
                className="text-blue-500 underline"
              >
                Website GitHub Repository
              </Link>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            The API is built using Express.js and Puppeteer web scraping
            library, while the website is developed using Next.js, Tailwind CSS,
            and TypeScript. I encourage collaboration and welcome contributions
            to the projects.
          </p>
          <p className="text-gray-700 mb-4">
            Your privacy and security are my top priorities. If you have any
            questions or concerns regarding my privacy practices, please do not
            hesitate to{" "}
            <Link href="/contact" className="text-blue-500 underline">
              contact me
            </Link>
            .
          </p>
          <p className="text-gray-700">Thank you for using Cute Timetable!</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
