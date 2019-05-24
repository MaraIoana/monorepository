import {Roles} from "./roles.model";

export interface addUser {
  firstName ? : string;
  lastName ? : string;
  mobileNumber ? : string;
  email ? : string;
  roles ? : string[];
}
