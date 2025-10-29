"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../public/logo.svg";
import { useSearchParams } from "next/navigation";

export default function OptOut() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unSubscribed, setUnsubscribed] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("id", id);

  useEffect(() => {
    const unSubscribe = async (id) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/clientdetail?id=${id}`, {
          method: "DELETE",
        });

        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        setUnsubscribed(true);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not update preferences — please try again.");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      unSubscribe(id);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        id !== null && (
          <main className="min-h-screen flex justify-center bg-gradient-to-b from-gray-50 to-white p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Red Car"
                    className="w-32 h-auto object-cover rounded-b-lg"
                    style={{ objectPosition: "center bottom" }}
                  />
                </Link>
              </div>

              <div className="flex-1">
                {unSubscribed === true && (
                  <>
                    <h1 className="text-2xl font-semibold">
                      You have opted out of reminders
                    </h1>
                    <p className="mt-2 text-gray-600">
                      We will not send reminder notifications for this account.
                    </p>
                  </>
                )}
                {error && (
                  <div className="mt-4 text-sm text-red-600">{error}</div>
                )}
              </div>
            </div>
          </main>
        )
      )}
    </>
  );
}
