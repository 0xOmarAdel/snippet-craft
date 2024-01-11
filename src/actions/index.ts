"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createSnippet = async (
  formState: { message: string },
  fromData: FormData
) => {
  const title = fromData.get("title");
  const code = fromData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return { message: "Title must be longer" };
  }

  if (typeof code !== "string" || code.length < 3) {
    return { message: "Code must be longer" };
  }

  try {
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
  } catch (error) {
    return { message: "Error creating snippet" };
  }

  revalidatePath("/");
  redirect("/");
};

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });

  revalidatePath("/");
  redirect("/");
};
