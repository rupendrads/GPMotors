import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(request);
  //`https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyCixNnRQ2x_zHJ8iI-mUN0lsBurTLh_gyk`
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,reviews&place_id=ChIJo796dWALdkgRmymnES30qoU&key=AIzaSyCixNnRQ2x_zHJ8iI-mUN0lsBurTLh_gyk`;
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    });
    const data = await res.json();

    if (data.status !== "OK") {
      const response = {
        error: data.status,
        returnedStatus: 500,
      };

      return NextResponse.json(response, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err) {
    console.log("ERROR: API - ", (err as Error).message);

    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    };

    return NextResponse.json(response, { status: 200 });
  }
}
