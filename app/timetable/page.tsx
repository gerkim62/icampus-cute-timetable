"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseDetails from "@/components/CourseDetails";
import Timetable from "@/components/Timetable";
import { Course } from "@/types";
import Loading from "@/components/Loading";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

function verifyCourseShape(course: Course) {
  // Define the expected shape
  const expectedShape = {
    "SR. No": "string",
    "Course Code": "string",
    "Course Title": "string",
    Credit: "string", // You can change this to "number" if Credit should be a number
    Lecturer: "string",
    Room: "string",
    Days: "object", //this should be an array of strings
    Start: "string", // You can change this to "number" if Start should be a number
    End: "string", // You can change this to "number" if End should be a number
  };

  // Check if all keys in expectedShape are present in obj
  for (let key in expectedShape) {
    if (!(key in course)) {
      return false;
    }
  }

  // Check if the types of values match the expected types
  for (let key in expectedShape) {
    // @ts-ignore
    if (typeof course[key] !== expectedShape[key]) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
}

const Page = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [noCourses, setNoCourses] = useState(false);

  function getCoursesFromSearchParams(searchParams: URLSearchParams) {
    const coursesParam = searchParams.get("courses");
    console.log(coursesParam);
    if (coursesParam) {
      try {
        const courses = JSON.parse(coursesParam);
        console.log(courses);
        if (Array.isArray(courses) && courses.every(verifyCourseShape)) {
          console.log(`is array and every course is valid`);
          return courses;
        }
      } catch (error) {
        console.error(error);
      }
    }
    return [];
  }

  function getCoursesFromLocalStorage() {
    const courses = localStorage.getItem("courses");
    if (courses) {
      try {
        const parsedCourses = JSON.parse(courses);
        if (
          Array.isArray(parsedCourses) &&
          parsedCourses.every(verifyCourseShape)
        ) {
          return parsedCourses;
        }
      } catch (error) {
        console.error(error);
      }
    }
    return [];
  }

  function saveCourses(courses: Course[]) {
    localStorage.setItem("courses", JSON.stringify(courses));

    //if no courses are present in the URL, redirect to the URL with the courses
    if (getCoursesFromSearchParams(searchParams).length === 0) {
      console.log("replace since no courses in URL");
      router.replace(`/timetable?courses=${JSON.stringify(courses)}`);

      setCourses(courses);
    }
  }

  //effect that runs on mount

  useEffect(() => {
    const courses = getCoursesFromSearchParams(searchParams);
    if (courses.length > 0) {
      console.log("courses found in URL, saving");
      saveCourses(courses);
    } else {
      const courses = getCoursesFromLocalStorage();
      if (courses.length > 0) {
        console.log("courses found in local storage, saving");
        router.replace(`/timetable?courses=${JSON.stringify(courses)}`);
      } else {
        setNoCourses(true);
        console.log("no courses found in URL or local storage");
      }
    }

    setCourses(courses);
    console.log(courses);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, searchParams]);

  //redirect to error page if no courses are found
  useEffect(() => {
    if (noCourses) {
      router.replace("/");
    }
  }, [noCourses]);

  return (
    <div className="p-4 w-[100vw] overflow-auto">
      {courses.length > 0 ? (
        <div className="flex">
          <Timetable courses={courses} setSelectedCourse={setSelectedCourse} />
          <div className="">...</div>
        </div>
      ) : (
        <Loading />
      )}

      {selectedCourse && (
        <div
          onClick={() => setSelectedCourse(null)}
          className="fixed inset-0 bg-black bg-opacity-80 z-10 flex justify-center items-center"
        >
          <CourseDetails course={selectedCourse} />
        </div>
      )}

      {/* button for discarding and creating another (link) */}

      <Link
        href="/"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center max-w-max mx-auto"
      >
        <FaArrowLeft className="mr-2" /> Create another timetable
      </Link>
    </div>
  );
};

export default Page;
