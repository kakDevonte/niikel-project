export type AuthDataType = {
  isAuth: boolean;
  role: string;
  department: string;
  name: string;
};

export type AuthState = {
  data: AuthDataType;
  status?: Status;
};

export type LoginType = {
  email: string;
  password: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
