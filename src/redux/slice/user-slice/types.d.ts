export interface UserStateDTO {
  id: number;
  name: string;
  surname: string;
  birthday: string;
  email: string;
  phone: string;
  website: string;
  avatar: string;
  company: {
    name: string;
    position: string;
  }
  loading: boolean;
  error: boolean;
}