export interface IDateTime {
  date: Date | undefined;
  time: string;
}

export interface IFormInput {
  title: string;
  firstName: string;
  lastName: string;
  postCode: string;
  email: string;
  registrationNo: string;
  comments: string;
  phoneNo: string;
}

export interface IBookingConfig {
  officeStartTime: string;
  officeEndTime: string;
  noOfEmployees: number;
  slotGap: number;
  limitPerSlot: number;
}

export interface IServiceType {
  id: number;
  type: string;
  logic: number;
}

export interface IServiceTypeDB {
  ID: number;
  Type: string;
  Logic: number;
}

export interface IBookingDB {
  ID: number;
  BookingDate: Date | undefined;
  BookingTime: string;
  Title: string;
  FirstName: string;
  LastName: string;
  PostCode: string;
  Email: string;
  RegistrationNo: string;
  ServiceType: number;
  Comments: string;
  PhoneNo: string;
  Type: string;
  Logic: number;
}

export interface IBookingFilled {
  date: Date;
  times: string[];
  timesWithLogic: string[];
}

export interface IBookingSlots {
  time: string;
  slots: number;
}

export interface IClientFormInput {
  title: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postCode: string;
  contactNo: string;
  serviceType: string;
  serviceDate: Date | undefined;
  creationDate: Date | undefined;
  registrationNo: string;
  remarks: string;
}

export interface IClientDetailDB {
  Id: number;
  Title: string;
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: string;
  PostCode: string;
  ContactNo: string;
  ServiceType: string;
  ServiceDate: Date | undefined;
  CreationDate: Date | undefined;
  RegistrationNo: string;
  Remarks: string;
}