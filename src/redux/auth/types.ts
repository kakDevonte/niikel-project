export type AuthState = {
  isAuth: boolean;
  role: string;
  department: string;
  name: string;
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
  WAIT = 'wait',
}
