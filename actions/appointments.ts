"use server";

type Appointment = {
  id: string;
  firstName: string;
  lastName: string;
  postCode: string;
  email: string;
  comments: string;
};

export const bookAppointment = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const postCode = formData.get("postCode") as string;
  const email = formData.get("email") as string;
  const comments = formData.get("comments") as string;
  console.log({ firstName, lastName });

  const appointment: Appointment = {
    id: Date.now().toString(),
    firstName: firstName,
    lastName: lastName,
    postCode: postCode,
    email: email,
    comments: comments,
  };

  console.log("appointment", appointment);
};
