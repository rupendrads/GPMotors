export interface PostcodeResult {
  region: string;
  admin_district: string;
  admin_ward: string; 
  admin_county: string;
  country: string;
  postcode: string;
  latitude: string;
  iongitude: string;
  [key: string]: any; // for additional fields
}

export interface PostcodeAPIResponse {
  status: number;
  result: PostcodeResult;
}