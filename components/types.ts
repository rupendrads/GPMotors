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
  serviceType: string;
  comments: string;
}

export interface IBookingConfig {
  officeStartTime: string;
  officeEndTime: string;
  noOfEmployees: number;
  slotGap: number;
  maxMotPerSlot: number;
}
