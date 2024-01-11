"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

type Props = {
  snippet: Snippet;
};

const EditForm = ({ snippet }: Props) => {
  const [code, setCode] = useState<string | undefined>(snippet.code);

  /* const submitHandler = async () => {
    await actions.editSnippet(snippet.id, code);
  }; */

  const submitHandler = actions.editSnippet.bind(null, snippet.id, code!);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        onChange={(value) => setCode(value)}
        options={{ minimap: { enabled: false } }}
      />
      {/* <button className="p-2 border rounded" onClick={submitHandler}>Save</button> */}
      <form action={submitHandler}>
        <button className="p-2 border rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;
