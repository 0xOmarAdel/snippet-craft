"use client";

import type { Snippet } from "@prisma/client";

type Props = {
  snippet: Snippet;
};

const EditForm = ({ snippet }: Props) => {
  return <div>{snippet.code}</div>;
};

export default EditForm;
