import {Role} from "./role.model";

export interface User {
  id:number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  username:string;
  password:string;
  counter:number;
  roles:Role[];
}
