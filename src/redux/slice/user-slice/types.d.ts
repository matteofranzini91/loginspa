export interface UserStateDTO {
  name: string;
  surname: string;
  birthday: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    position: string;
  };
  avatar?: string;
}

export interface UserInitialStateDTO extends UserStateDTO {
  id: number;
  loading: boolean;
  error: boolean;
}