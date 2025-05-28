"use server";

import { revalidatePath } from "next/cache";

type Appointment = {
  id: string;
  firstName: string;
  lastName: string;
  postCode: string;
  email: string;
  serviceType: string;
  comments: string;
};

type formState = { message: string };

export const bookAppointment = async (
  prevState: formState,
  formData: FormData
) => {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const postCode = formData.get("postCode") as string;
  const email = formData.get("email") as string;
  const serviceType = formData.get("serviceType") as string;
  const comments = formData.get("comments") as string;
  console.log({ firstName, lastName });

  const appointment: Appointment = {
    id: Date.now().toString(),
    firstName: firstName,
    lastName: lastName,
    postCode: postCode,
    email: email,
    serviceType: serviceType,
    comments: comments,
  };

  console.log("appointment", appointment);
  revalidatePath("/book-appointment");
  return { message: "Appointment booked successfully" };
};
