export interface emailParams {
  companyName: string;
  clientName: string;
  clientId: string;
  serviceDate: string;
  timeSlot: string;
  serviceType: string;
  carRegistrationNo: string;
  bookingId: string;
  companyContactNo: string;
  websiteUrl: string;
  year: string;
  logoUrl: string;
}

const getEmailTemplate = (emailParams: emailParams) => {
  const {
    companyName,
    clientName,
    clientId,
    serviceDate,
    timeSlot,
    serviceType,
    carRegistrationNo,
    bookingId,
    companyContactNo,
    websiteUrl,
    year,
    logoUrl,
  } = emailParams;
  const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Car Service Slot Confirmation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f6f9;
      color: #333333;
    }
    .container {
      max-width: 640px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }
    .brand-header {
      background-color: #1a1a1a;
      padding: 30px 20px;
      text-align: center;
    }
    .brand-header img {
      max-width: 150px;
      height: auto;
    }
    .main-header {
      background: #004aad;
      color: #ffffff;
      text-align: center;
      padding: 40px 20px 30px;
    }
    .main-header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
      font-size: 16px;
      line-height: 1.6;
    }
    .highlight-box {
      background-color: #f0f4fa;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #004aad;
    }
    .highlight-box p {
      margin: 8px 0;
    }
    .button {
      display: inline-block;
      background-color: #004aad;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
      margin-top: 20px;
    }
    .footer {
      background-color: #f9fafc;
      text-align: center;
      font-size: 12px;
      color: #888888;
      padding: 20px;
    }
    .footer a {
      color: #888;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Brand Logo -->
    <div class="brand-header">    
      <img src="${logoUrl}" alt="${companyName} Logo" />
    </div>

    <!-- Header Section -->
    <div class="main-header">
      <h1>Service Appointment Confirmed</h1>
      <p>Your booking reference: <strong>${bookingId}</strong></p>
    </div>

    <!-- Email Body -->
    <div class="content">
      <p>Dear <strong>${clientName}</strong>,</p>
      <p>Thank you for choosing <strong>${companyName}</strong>. We're pleased to confirm your upcoming car service appointment.</p>

      <div class="highlight-box">
        <p><strong>📅 Date: </strong> ${serviceDate}</p>
        <p><strong>🕒 Time Slot: </strong> ${timeSlot}</p>
        <p><strong>🏢 Service Type: </strong>${serviceType}</p>
        <p><strong>🚘 Vehicle Registration Number: </strong>${carRegistrationNo}</p>
        <p><strong>🆔 Booking ID: </strong>${bookingId}</p>
      </div>

      <p>If you need to make changes or have any questions, feel free to contact us at <strong>${companyContactNo}</strong> or reply to this email.</p>

      <p>We look forward to providing you with exceptional service.</p>

      <p>Warm regards,<br />
      <strong>The ${companyName} Team</strong></p>
    </div>

    <!-- Footer -->
    <div class="footer">
      &copy; ${year} ${companyName} &nbsp;|&nbsp;
      <a href="${websiteUrl}">Visit Our Website</a><br/>
      If you don't want to receive annual reminders for services and MOTs, please click <a href="${websiteUrl}opt-out?id=${clientId}">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
`;
  return template;
};

export default getEmailTemplate;
