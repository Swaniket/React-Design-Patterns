/* eslint-disable react/prop-types */
// import "./App.css";
import SplitScreen from "./LayoutComponents/SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
};

function App() {
  return (
    <>
      {/* <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      /> */}
      {/* Pass the components as childrens */}
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Swaniket" />
        <RightHandComponent message="Learining React Design Patterns" />
      </SplitScreen>
    </>
  );
}

export default App;
