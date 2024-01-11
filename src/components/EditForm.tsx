"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";

type Props = {
  snippet: Snippet;
};

const EditForm = ({ snippet }: Props) => {
  const [code, setCode] = useState<string | undefined>(snippet.code);

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
    </div>
  );
};

export default EditForm;
