"use server";

export const deleteImageAction = async (id: string) => {
  console.log({ id });

  return {
    ok: true,
  };
};
