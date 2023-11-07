import Radio from "./radio";

const { RadioGroup } = Radio;
function App() {
  return (
    <>
      <RadioGroup value={3}>
        <Radio value={1} key={1}>
          1
        </Radio>
        <Radio value={2} key={2}>
          2
        </Radio>
        <Radio value={3} key={3}>
          3
        </Radio>
      </RadioGroup>
    </>
  );
}

export default App;
