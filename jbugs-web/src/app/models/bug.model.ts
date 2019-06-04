export interface Bug{
  id?: bigint;
  title?: string;
  description?: string;
  version?: string;
  date?: string;
  status?: string;
  fixedVersion?: string;
  severity?: string;
  createdByUser?: bigint;
  assignedTo?: bigint;
}
