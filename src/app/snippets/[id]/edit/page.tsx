type Props = {
  params: { id: string };
};

const SnippetEditPage = (props: Props) => {
  const id = parseInt(props.params.id);

  return <div>{id}</div>;
};

export default SnippetEditPage;
