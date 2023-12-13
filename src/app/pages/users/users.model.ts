import { Users } from "../../types/users.type";

export interface HttpUsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users[]; // Assuming there is a User model
}

