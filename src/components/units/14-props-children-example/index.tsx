interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>하이</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>빠이</div>
    </div>
  );
}
