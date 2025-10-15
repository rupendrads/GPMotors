export type reminderFilterType = {
  //serviceType: number | undefined;
  fromDate: string | undefined;
  toDate: string | undefined;
};

export type person = {
  Id: number;
  FirstName: string;
  LastName: string;
  PhoneNo: string;
  Address1: string;
  Address2: string;
  PostCode: string;
  IsChecked: boolean;
  SmsStatus: string;
  WhatsAppStatus: string;
  serviceDate: string;
  CreationDate: string;
  serviceType: string;
  carRegistrationNo: string;
};

//-----------

  // Id: number;
  // Title: string;
  // FirstName: string;
  // LastName: string;
  // Address1: string;
  // Address2: string;
  // PostCode: string;
  // ContactNo: string;
  // ServiceType: string;
  // ServiceDate: Date | undefined;
  // CreationDate: Date | undefined;
  // RegistrationNo: string;
  // Remarks: string;