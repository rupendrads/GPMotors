export interface PostcodeResult {
  ced: string;
  ccg: string;
  admin_ward: string; 
  admin_district: string;
  region: string;
  admin_county: string;
  country: string;
  postcode: string;
  
  [key: string]: string; // for additional fields
}

export interface PostcodeAPIResponse {
  status: number;
  result: PostcodeResult;
}

