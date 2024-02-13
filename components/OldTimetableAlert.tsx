"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const OldTimetableAlert = (props: Props) => {
  const [hasOldTimetable, setHasOldTimetable] = useState(false);

  useEffect(() => {
    const oldTimetable = localStorage.getItem("courses");
    if (oldTimetable) {
      setHasOldTimetable(true);
    }
  }, []);

  if (!hasOldTimetable) return null;
  return (
    <Link
      href={`/timetable?courses=${localStorage.getItem("courses")}`}
      className="inline-block underline  text-white font-bold  rounded mt-8 animate-bounce focus:outline-none focus:shadow-outline leading-wide"
    >
      View your existing timetable
    </Link>
  );
};

export default OldTimetableAlert;
