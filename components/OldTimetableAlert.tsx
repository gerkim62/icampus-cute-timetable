"use client";
import React, { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaExclamationCircle,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Popup from "./Popup";

const OldTimetableAlert = () => {
  const [hasOldTimetable, setHasOldTimetable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const oldTimetable = localStorage.getItem("courses");
    if (oldTimetable) {
      setHasOldTimetable(true);
      setShowPopup(true);
    }
  }, []);

  if (!hasOldTimetable) return null;

  return (
    <>
      {showPopup && (
        <Popup
          viewOnce={true}
          message=" You have already downloaded the timetable. Click the
                    `View your existing timetable` button to view it instead
                    of redownloading it if  it has not been
                    changed in iCampus."
          id="oldTimetable"
        />
      )}

      <Link
        href={`/timetable?courses=${localStorage.getItem("courses")}`}
        className="inline-block  text-white font-bold rounded mt-8 animate-bounce focus:shadow-outline leading-wide bg-pink-600 px-4 py-2 hover:bg-pink-700"
      >
        View your existing timetable
      </Link>
    </>
  );
};

export default OldTimetableAlert;
