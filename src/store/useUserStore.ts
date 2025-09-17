import { create } from "zustand";

type User = {
  name: string;
  password: string;
  email: string;
};

interface UserStore {
  allUsers: User[];
  createUser: (user: Record<keyof User, string>) => void;
  findUser: (user: Omit<User, "name">) => User | undefined;
}

const allUsers = [{ name: "vasya puplin", password: "123456", email: "qwerty@gmail.com" }];

const useUserState = create<UserStore>((set, get) => ({
  allUsers,
  createUser: (user: Record<keyof User, string>) =>
    set((s) => ({ allUsers: s.allUsers.concat(user) })),
  findUser: (user: Omit<User, "name">) => {
    return get().allUsers.find((us) => us.email === user.email && us.password === user.password);
  },
}));

export { useUserState };
