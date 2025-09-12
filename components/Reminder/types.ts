export type reminderFilterType = {
  serviceType: number | undefined;
  fromDate: string | undefined;
  toDate: string | undefined;
};

export type person = {
  Id: number;
  FirstName: string;
  LastName: string;
  PhoneNo: number;
  Email: string;
  IsChecked: boolean;
  SmsStatus: string;
  WhatsAppStatus: string;
  EmailStatus: string;
};
