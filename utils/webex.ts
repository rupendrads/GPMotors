// In your React component or service file
// export const sendSms = async (toNumber, fromNumber, messageContent) => {
//   const apiUrl = "https://api.uk.webexconnect.io/v1/messages"; // Replace {YourRegion}
//   const apiKey = "aky_30gLecjoiiFVXLqfSN8576zeZOa"; // Replace with your actual API key

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`, // Or your specific authentication header
//       },
//       body: JSON.stringify({
//         from: fromNumber, //Mandatory.
//         to: toNumber, //Mandatory. E.164 format required/recommended.
//         content: messageContent, //Mandatory.
//         contentType: "text", //Mandatory.
//       }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       console.log("SMS sent successfully:", data);
//       // Handle success, e.g., show a confirmation message
//     } else {
//       console.error("Failed to send SMS:", data);
//       // Handle error, e.g., display an error message
//     }
//   } catch (error) {
//     console.error("Error sending SMS:", error);
//     // Handle network errors or other exceptions
//   }
// };

export const sendSms = async (
  toNumber,
  fromNumber,
  messageContent
): Promise<string> => {
  const apiUrl = "https://api.webexinteract.com/v1/sms"; // Replace {YourRegion}
  const apiKey = "aky_30gLecjoiiFVXLqfSN8576zeZOa"; // Replace with your actual API key

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-AUTH-KEY": apiKey, // Or your specific authentication header
      },
      body: JSON.stringify({
        message_body: messageContent,
        //"template_id":"stp_2alB8n4k3BuCjOumRddxXiaA97M", //only one of message_body or template_id should be present
        from: "GP Motors",
        skip_optout_check: true,
        to: [
          {
            phone: [toNumber],
          },
        ],
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("SMS sent successfully:", data);
      // Handle success, e.g., show a confirmation message
      return "success";
    } else {
      console.error("Failed to send SMS:", data);
      // Handle error, e.g., display an error message
      return "failed";
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
    // Handle network errors or other exceptions
    return "failed";
  }
};

// Example usage in a React component
// <button onClick={() => sendSms('+1647XXXXXXX', '12233XXXXXX', 'Hello from React!')}>Send SMS</button>

export const sendSmsTemplate = async (toNumber, templateId) => {
  const apiUrl = "https://api.webexinteract.com/v1/sms"; // Replace {YourRegion}
  const apiKey = "aky_33gzP5A4Q1XUIz7QdE271qrkc9N"; // Replace with your actual API key

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-AUTH-KEY": apiKey, // Or your specific authentication header
      },
      body: JSON.stringify({
        message_body: templateId,
        //template_id: templateId, //only one of message_body or template_id should be present
        from: "GP Motors",
        skip_optout_check: true,
        to: [
          {
            phone: [toNumber],
          },
        ],
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("SMS sent successfully:", data);
      // Handle success, e.g., show a confirmation message
      return "success";
    } else {
      console.log("Failed to send SMS:", data);
      // Handle error, e.g., display an error message
      return "failed";
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
    // Handle network errors or other exceptions
    return "failed";
  }
};

// Individual SMS status update - for single database updates
export const updateSMSStatus = async (
  clientId: number,
  status: 'success' | 'failed' | 'pending'
): Promise<void> => {
  try {
    await fetch('/api/update-sms-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        status: status,
      }),
    });
    console.log(`Updated SMS status for client ${clientId}: ${status}`);
  } catch (error) {
    console.error("Failed to update SMS status:", error);
  }
};
