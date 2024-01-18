import { notFound } from "next/navigation";
import Link from "next/link";
import { getSnippet } from "@/lib/snippets";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetShowPageProps) {
  const snippet = getSnippet(props.params.id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${props.params.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <button className="p-2 border rounded" type="submit">
            Delete
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
