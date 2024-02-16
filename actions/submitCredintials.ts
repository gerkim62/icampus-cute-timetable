"use server";

import { API_URL } from "@/constants/api";
import { ScraperResponse, SuccessfullScraperResponse } from "@/types";
import { redirect } from "next/navigation";

async function fetchTimetable(credentials: {
  username: string;
  password: string;
}) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      console.log(response);
      // throw new Error("Failed to fetch timetable");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function submitCredintials(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(username, password);

  if (typeof username !== "string" || typeof password !== "string")
    return redirect("/error?message=Invalid Username or Password");

  const data: ScraperResponse = await fetchTimetable({
    username,
    password,
  });

  if (data.error.exists) {
    return redirect(
      `/error?message=${data.error.message} &possible_cause=${username}: ${data.error.possible_cause}&code=${data.error.code}`
    );
  } else {
    const courses = (data as SuccessfullScraperResponse).timetable;

    return redirect(
      `/timetable?courses=${JSON.stringify(courses)}&full_name=${
        (data as SuccessfullScraperResponse).user.full_name
      }`
    );
  }
}
