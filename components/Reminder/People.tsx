"use client";
import { useEffect, useRef, useState } from "react";
import { person } from "./types";
import Progress from "../Progressbar/Progress";
import Loading from "../Loading";
import { sendSmsTemplate } from "@/utils/webex";

interface Props {
  filtering: boolean;
  people: person[];
  processing: boolean;
  processingStart: () => void;
  processingCompleted: () => void;
}

function People({
  filtering,
  people,
  processing,
  processingStart,
  processingCompleted,
}: Props) {
  const [personList, setPersonList] = useState<person[]>([]);
  const progressRef = useRef<{
    incrementValue: () => void;
    resetValue: () => void;
  }>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setPersonList(people);
    setTitle("");
  }, [people]);

  const handleCheckboxChange = ({
    email,
    isChecked,
  }: {
    email: string;
    isChecked: boolean;
  }) => {
    const people = [...personList];
    const index = people.findIndex((person) => person.Email === email);
    if (index > -1) {
      people[index].IsChecked = !isChecked;
    }

    setPersonList([...people]);
  };

  const sendWhatsApp = () => {};

  const sendEmail = () => {
    processingStart();
    setTitle("Email");
    progressRef.current?.resetValue();

    let i = -1;
    const intervalId = setInterval(() => {
      i++;
      if (i < personList.length) {
        console.log("processing id", personList[i].Id);
        // call send sms function here...
        setPersonList((prevList) => {
          const newList = [...prevList];
          console.log("i value", i);
          newList[i].EmailStatus = "success";
          if (i % 2 === 0) {
            newList[i].EmailStatus = "success";
          } else {
            newList[i].EmailStatus = "failed";
          }
          return [...newList];
        });
        progressRef.current?.incrementValue();
      } else {
        progressRef.current?.incrementValue();
        clearInterval(intervalId);
      }
    }, 5000);
  };

  // const sendSMS = async () => {
  //   processingStart();
  //   setTitle("SMS");
  //   progressRef.current?.resetValue();

  //   let i = -1;
  //   const intervalId = setInterval(() => {
  //     i++;
  //     if (i < personList.length) {
  //       console.log("processing id", personList[i].Id);
  //       // call send sms function here...
  //       setPersonList((prevList) => {
  //         const newList = [...prevList];
  //         console.log("i value", i);
  //         newList[i].SmsStatus = "success";
  //         if (i % 2 === 0) {
  //           newList[i].SmsStatus = "success";
  //         } else {
  //           newList[i].SmsStatus = "failed";
  //         }
  //         return [...newList];
  //       });
  //       progressRef.current?.incrementValue();
  //     } else {
  //       progressRef.current?.incrementValue();
  //       clearInterval(intervalId);
  //     }
  //   }, 5000);
  // };

  const sendSMSToPerson = async (person: person): Promise<string> => {
    const sendSmsStatus = await sendSmsTemplate(
      person.PhoneNo,
      "stp_2wMCj3z1DOXf7cStPxEDMsJVWml"
    );
    return sendSmsStatus;
  };

  const sendSMS = async () => {
    processingStart();
    setTitle("SMS");
    progressRef.current?.resetValue();

    for (const person of personList) {
      const sendSmsStatus = await sendSMSToPerson(person);
      setPersonList((prevList) => {
        const newList = [...prevList];
        const i = newList.findIndex((p) => p.Id === person.Id);
        if (i > -1) {
          newList[i].SmsStatus = sendSmsStatus;
        }
        return [...newList];
      });
      progressRef.current?.incrementValue();
    }
    progressRef.current?.incrementValue();
  };

  return (
    <>
      {filtering === true ? (
        <div className="w-full h-[400px] flex flex-1 justify-center items-center">
          <Loading />
        </div>
      ) : (
        personList.length > 0 && (
          <>
            <div className="border border-gray-400 rounded">
              {personList.map((person, index) => {
                return (
                  <div key={person.Email}>
                    {index === 0 && (
                      <>
                        <div className="flex bg-gray-800 text-white">
                          <div className={checkCellHeaderStyle}></div>
                          <div className={nameCellHeaderStyle}>Name</div>
                          <div className={phoneNoCellHeaderStyle}>Phone No</div>
                          <div className={emailCellHeaderStyle}>Email</div>
                          <div className={smsCellHeaderStyle}>SMS Status</div>
                          <div className={smsCellHeaderStyle}>Email Status</div>
                          <div className={smsCellHeaderStyle}>
                            WhatsApp Status
                          </div>
                        </div>
                        <hr className="text-gray-400" />
                      </>
                    )}
                    <div className="flex">
                      <div className={checkCellStyle}>
                        <input
                          type="checkbox"
                          id="myCheckbox"
                          className={`w-5 h-5 accent-blue-500 ${
                            processing === true &&
                            "pointer-events-none opacity-25"
                          }`}
                          checked={person.IsChecked}
                          onChange={() =>
                            handleCheckboxChange({
                              email: person.Email,
                              isChecked: person.IsChecked,
                            })
                          }
                        />
                      </div>
                      <div className={nameCellStyle}>
                        {person.FirstName.concat(" ").concat(person.LastName)}
                      </div>
                      <div className={phoneNoCellStyle}>{person.PhoneNo}</div>
                      <div className={emailCellStyle}>{person.Email}</div>
                      <div
                        className={smsCellStyle}
                        style={{
                          color: `${
                            person.SmsStatus === "success"
                              ? "green"
                              : person.SmsStatus === "failed"
                              ? "red"
                              : "black"
                          }`,
                        }}
                      >
                        {person.SmsStatus}
                      </div>
                      <div
                        className={emailCellStyle}
                        style={{
                          color: `${
                            person.EmailStatus === "success"
                              ? "green"
                              : person.EmailStatus === "failed"
                              ? "red"
                              : "black"
                          }`,
                        }}
                      >
                        {person.EmailStatus}
                      </div>
                      <div className={phoneNoCellStyle}>
                        {person.WhatsAppStatus}
                      </div>
                    </div>
                    <hr className="text-gray-400" />
                  </div>
                );
              })}
            </div>
            {personList.length > 0 && (
              <div className="flex justify-end">
                <Progress
                  title={title}
                  maxValue={personList.length}
                  progressCompleted={processingCompleted}
                  ref={progressRef}
                />
              </div>
            )}
            <div className="flex justify-end">
              <div
                className={`flex gap-4 ${
                  processing === true && "pointer-events-none opacity-25"
                } `}
              >
                <div>
                  <button
                    type="button"
                    className={smsButtonStyle}
                    onClick={sendSMS}
                  >
                    SMS
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={emailButtonStyle}
                    onClick={sendEmail}
                  >
                    Email
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={whatsAppButtonStyle}
                    onClick={sendWhatsApp}
                  >
                    Whats app
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}

const checkCellHeaderStyle = "p-2 w-[50px] font-[400px]";
const checkCellStyle =
  "p-2 w-[50px] text-center flex justify-center items-center";

const nameCellHeaderStyle = "p-2 w-[150px]";
const nameCellStyle = "p-2 w-[150px]";

const phoneNoCellHeaderStyle = "p-2 w-[120px]";
const phoneNoCellStyle = "p-2 w-[120px] text-right";

const emailCellHeaderStyle = "p-2 w-[200px]";
const emailCellStyle = "p-2 w-[200px]";

const smsCellHeaderStyle = "p-2 w-[100px]";
const smsCellStyle = "p-2 w-[100px]";

const smsButtonStyle = `w-full bg-blue-500 disabled:bg-gray-500 text-white text-[18px] font-[400] py-1 px-4 rounded 
            hover:cursor-pointer disabled:cursor-none self-end`;
const emailButtonStyle = `w-full bg-red-500 text-white text-[18px] font-[400] py-1 px-4 rounded 
            hover:cursor-pointer self-end`;
const whatsAppButtonStyle = `w-full bg-green-500 text-white text-[18px] font-[400] py-1 px-4 rounded 
            hover:cursor-pointer self-end`;

export default People;
