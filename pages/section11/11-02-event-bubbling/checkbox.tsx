export default function Checkbox() {
  const qqq1 = (e) => {
    e.stopPropagation()
    alert('1번클릭')
  }
  const qqq2 = (e) => {
    e.stopPropagation()
    alert('2번클릭')
  }
  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq1}></input>
    </span>
  )
}