import {Roles} from "./roles.model";

export interface User {
  firstname: string;
  lastname: string;
  age: number;
  roles: Roles[];
}
