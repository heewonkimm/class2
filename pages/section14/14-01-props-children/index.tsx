import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>testtestset</div>
      <Example school="사과">
        <div>
          <input type="text" />
          <div>저는 철수입니다</div>
          <button>클릭하시오~</button>
        </div>
      </Example>
    </div>
  );
}
