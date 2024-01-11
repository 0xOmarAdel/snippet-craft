import { db } from "@/db";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

const SnippetEditPage = async (props: Props) => {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({ where: { id } });

  if (!snippet) return notFound();

  return <div>{snippet.title}</div>;
};

export default SnippetEditPage;
