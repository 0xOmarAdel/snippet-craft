import { db } from "@/db";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const SnippetPage = async (props: Props) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  console.log(props);

  if (!snippet) return notFound();

  return (
    <div>
      <p>{snippet.title}</p>
    </div>
  );
};

export default SnippetPage;
