// In your React component or service file
export const sendSms = async (toNumber, fromNumber, messageContent) => {
  const apiUrl = "https://api.uk.webexconnect.io/v1/messages"; // Replace {YourRegion}
  const apiKey = "aky_30gLecjoiiFVXLqfSN8576zeZOa"; // Replace with your actual API key

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Or your specific authentication header
      },
      body: JSON.stringify({
        from: fromNumber, //Mandatory.
        to: toNumber, //Mandatory. E.164 format required/recommended.
        content: messageContent, //Mandatory.
        contentType: "text", //Mandatory.
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("SMS sent successfully:", data);
      // Handle success, e.g., show a confirmation message
    } else {
      console.error("Failed to send SMS:", data);
      // Handle error, e.g., display an error message
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
    // Handle network errors or other exceptions
  }
};

// Example usage in a React component
// <button onClick={() => sendSms('+1647XXXXXXX', '12233XXXXXX', 'Hello from React!')}>Send SMS</button>
