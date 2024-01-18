import EditForm from "@/components/EditForm";
import { notFound } from "next/navigation";
import { getSnippet } from "@/lib/snippets";

type Props = {
  params: { id: string };
};

const SnippetEditPage = async (props: Props) => {
  const snippet = getSnippet(props.params.id);

  if (!snippet) return notFound();

  return (
    <div>
      {snippet.title}
      <EditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
