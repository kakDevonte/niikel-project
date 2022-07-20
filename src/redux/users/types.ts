export type UserType = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  confirmPassword?: string;
  department: string;
};

export type UsersState = {
  users: UserType[];
  currUser: UserType;
  isEditMode: boolean;
};
