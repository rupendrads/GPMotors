"use client";
import { useEffect, useRef, useState } from "react";
import { person } from "./types";
import Progress from "../Progressbar/Progress";
import Loading from "../Loading";
import { sendSmsTemplate } from "@/utils/webex";
import { formatDate } from "@/utils/formatter";

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
    phoneno,
    isChecked,
  }: {
    phoneno: string;
    isChecked: boolean;
  }) => {
    const people = [...personList];
    const index = people.findIndex((person) => person.PhoneNo === phoneno);
    if (index > -1) {
      people[index].IsChecked = !isChecked;
    }

    setPersonList([...people]);
  };

  // const sendEmail = () => {
  //   processingStart();
  //   setTitle("Email");
  //   progressRef.current?.resetValue();
  //   const person = personList[i];
  //   try {
  //     const emailParams: emailParams = {
  //       companyName: "GP Motors",
  //       clientName: person.FirstName + " " + person.LastName,
  //       serviceDate: person.serviceDate,
  //       timeSlot: person.timeSlot,
  //       serviceType: person.serviceType,
  //       carRegistrationNo: person.carRegistrationNo,
  //       bookingId: person.bookingId,
  //       companyContactNo: "0208 943 4103",
  //       websiteUrl: "https://gpmotorstedd.co.uk/",
  //       year: new Date().getFullYear().toString(),
  //       logoUrl:
  //         "https://ik.imagekit.io/enxjuklx6/Group%2054.png?updatedAt=1750399283384",
  //     };
  //     const emailTemplate = getEmailTemplate(emailParams);
  //     console.log("emailParams", emailParams);
  //     // initEmailJS();
  //     // sendAutoReplyEmail({
  //     //   to_name: "Admin",
  //     //   to_email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL as string,
  //     //   reply_subject: "appointment reminder",
  //     //   reply_message_html: emailTemplate,
  //     // });

  //     // setPersonList((prevList) => {
  //     //   const newList = [...prevList];
  //     //   console.log("i value", i);
  //     //   newList[i].EmailStatus = "success";
  //     //   return [...newList];
  //     // });
  //     progressRef.current?.incrementValue();
  //   } catch (error) {
  //     console.log("email error", error);

  //     setPersonList((prevList) => {
  //       const newList = [...prevList];
  //       console.log("i value", i);
  //       newList[i].EmailStatus = "failed";
  //       return [...newList];
  //     });
  //     progressRef.current?.incrementValue();
  //   }
  // }
  // progressRef.current?.incrementValue();

  // let i = -1;
  // const intervalId = setInterval(() => {
  //   i++;
  //   if (i < personList.length) {
  //     console.log("processing id", personList[i].Id);
  //     // call send email function start...
  //     try {
  //       const person = personList[i];
  //       const emailParams: emailParams = {
  //         companyName: "GP Motors",
  //         clientName: person.FirstName + " " + person.LastName,
  //         serviceDate: formatDate(new Date(person.serviceDate)),
  //         timeSlot: person.timeSlot,
  //         serviceType: person.serviceType,
  //         carRegistrationNo: person.carRegistrationNo,
  //         bookingId: person.bookingId,
  //         companyContactNo: "0208 943 4103",
  //         websiteUrl: "https://gpmotorstedd.co.uk/",
  //         year: new Date().getFullYear().toString(),
  //         logoUrl:
  //           "https://ik.imagekit.io/enxjuklx6/Group%2054.png?updatedAt=1750399283384",
  //       };
  //       const emailTemplate = getEmailTemplate(emailParams);
  //       console.log("emailParams", emailParams);
  //       initEmailJS();
  //       sendAutoReplyEmail({
  //         to_name: emailParams.clientName,
  //         to_email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL as string,
  //         reply_subject: "appointment reminder",
  //         reply_message_html: emailTemplate,
  //       });
  //       // call send email function end...
  //       setPersonList((prevList) => {
  //         const newList = [...prevList];
  //         console.log("i value", i);
  //         newList[i].EmailStatus = "success";
  //         return [...newList];
  //       });
  //     } catch (error) {
  //       console.log("email error", error);
  //       setPersonList((prevList) => {
  //         const newList = [...prevList];
  //         console.log("i value", i);
  //         newList[i].EmailStatus = "failed";
  //         return [...newList];
  //       });
  //     } finally {
  //       progressRef.current?.incrementValue();
  //     }
  //   const newList = [...prevList];
  //   console.log("i value", i);
  //   newList[i].EmailStatus = "success";
  //   // if (i % 2 === 0) {
  //   //   newList[i].EmailStatus = "success";
  //   // } else {
  //   //   newList[i].EmailStatus = "failed";
  //   // }
  //   return [...newList];
  // });
  // progressRef.current?.incrementValue();
  //     } else {
  //       progressRef.current?.incrementValue();
  //       clearInterval(intervalId);
  //     }
  //   }, 5000);
  // };
  //   processingStart();
  //   setTitle("SMS");
  //   progressRef.current?.resetValue();

  //   for (const person of personList) {
  //     const sendSmsStatus = await sendSMSToPerson(person);
  //     setPersonList((prevList) => {
  //       const newList = [...prevList];
  //       const i = newList.findIndex((p) => p.Id === person.Id);
  //       if (i > -1) {
  //         newList[i].SmsStatus = sendSmsStatus;
  //       }
  //       return [...newList];
  //     });
  //     progressRef.current?.incrementValue();
  //   }
  //   progressRef.current?.incrementValue();
  // };

  const getSMSTemplate = (person: person) => {
    const sms = `Hi ${person.FirstName} ${person.LastName}, 
    your vehicles MOT is due to expire on ${formatDate(
      new Date(person.serviceDate)
    )}. 
    We will be closed from 25th December to January 3rd. 
    Opening in the new year Tuesday January 4th 2022.
    Call us today to book your Annual MOT & Service 0208 943 4103. 
    Thanks.
    Remember you can get your car MOT'd up to a month before your MOT renewal date 
    and still keep your original MOT date. You lose nothing.
    Please make sure your wheel locking nut key is in the car. 
    Thank you.
    G.P. Motors (Teddington) LTD T:0208 943 4103`;
    return sms;
  };

  //"+447533326624"
  const sendSMSToPerson = async (person: person): Promise<string> => {
    const smsTemplate = getSMSTemplate(person);
    console.log(smsTemplate);
    const sendSmsStatus = await sendSmsTemplate(person.PhoneNo, smsTemplate);
    return sendSmsStatus;
  };

  const sendSMS = async () => {
    processingStart();
    setTitle("SMS");
    progressRef.current?.resetValue();

    let i = -1;
    const intervalId = setInterval(async () => {
      i++;
      if (i < personList.length) {
        console.log("processing id", personList[i].Id);
        const sendSmsStatus = await sendSMSToPerson(personList[i]);
        setPersonList((prevList) => {
          const newList = [...prevList];
          console.log("i value", i);
          newList[i].SmsStatus = sendSmsStatus;
          return [...newList];
        });
        progressRef.current?.incrementValue();
      } else {
        progressRef.current?.incrementValue();
        clearInterval(intervalId);
      }
    }, 5000);
  };

  const sendWhatsApp = () => {};

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
                  <div key={person.Id}>
                    {index === 0 && (
                      <>
                        <div className="flex bg-gray-800 text-white">
                          <div className={checkCellHeaderStyle}></div>
                          <div className={nameCellHeaderStyle}>Name</div>
                          <div className={phoneNoCellHeaderStyle}>Phone No</div>
                          <div className={smsCellHeaderStyle}>SMS Status</div>
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
                              phoneno: person.PhoneNo,
                              isChecked: person.IsChecked,
                            })
                          }
                        />
                      </div>
                      <div className={nameCellStyle}>
                        {person.FirstName.concat(" ").concat(person.LastName)}
                      </div>
                      <div className={phoneNoCellStyle}>{person.PhoneNo}</div>

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

const nameCellHeaderStyle = "p-2 w-[220px]";
const nameCellStyle = "p-2 w-[220px]";

const phoneNoCellHeaderStyle = "p-2 w-[140px]";
const phoneNoCellStyle = "p-2 w-[140px] text-right";

const smsCellHeaderStyle = "p-2 w-[100px]";
const smsCellStyle = "p-2 w-[100px]";

const smsButtonStyle = `w-full bg-blue-500 disabled:bg-gray-500 text-white text-[18px] font-[400] py-1 px-4 rounded 
            hover:cursor-pointer disabled:cursor-none self-end`;

const whatsAppButtonStyle = `w-full bg-green-500 text-white text-[18px] font-[400] py-1 px-4 rounded 
            hover:cursor-pointer self-end`;

export default People;
