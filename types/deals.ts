export interface Deal {
  id: number;
  image: string;
  title: string;
  price: number;
  yield: number;
  sold: number;
  tiket: number;
  daysLeft: number;

  createdAt: string;
  updatedAt: string;

  usersId: number;
  user: User;
}

export interface NewDeal {
  image: string;
  title: string;
  price: number;
  yield: number;
  sold: number;
  tiket: number;
  daysLeft: number;

  usersId: number;
  user: User;
}

export interface User {
  email: string;
  username: string;
}
