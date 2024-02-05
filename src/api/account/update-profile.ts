import { api } from "@/libs/axios";

export type UpdateProfileBody = {
  name: string;
  description: string | null;
};

export const updateProfile = async ({
  name,
  description,
}: UpdateProfileBody) => {
  // throw new Error()

  await api.put("/profile", {
    name,
    description,
  });
};
