// import RadioButtonGroup from "./Components/RadioBtnProblem/RadioButtonGroup"
// import StarRating from "./Components/StarRating/StarRating"
// import CheckBox from "./Components/CheckBoxExp/CheckBox"
// import ObjectConcept from "./Components/Playing_with Object/ObjectConcept"
// import Board from "./Components/TicTacToeGame/Board"
// import RangeInput from "./Components/Range Input/RangeInput"
// import Quiz from "./Components/Quiz App/Quiz"


// Designs
// import Carousel from "./Components/Designs/DesignCarousel/Carousel"
// import Accordion from './Components/Designs/DesignAccordion/Accordion'

// From JS Cafe
// import TabCmp from './Components/JSCafe/ReactCompoundPattern/Tab/TabCmp'
// import RenderProps from './Components/JSCafe/RenderPropsPattern/RenderProps'
// import ParentCmp from './Components/JSCafe/ReactHooksPattern/ParentCmp'
// import BasicAccordion from './Components/JSCafe/ReactCompoundPattern/Accordion/BasicAccordion'

// From Akash ingole
// import Windowing from "./Components/RenderHugeList(AkashIngole)/Windowing.jsx";
// import InfiniteScroll from "./Components/Infinite Scrolling/InfiniteScroll";
// import StopWatch from "./Components/Stop Watch/StopWatch";
// import StopWatch2 from "./Components/AkashIngole/Stop Watch/StopWatch2";
// import UseStateWithArray from "./Components/AkashIngole/useState/UseStateWithArray";
// import UseStateWithMap from "./Components/AkashIngole/useState/UseStateWithMap";

// From Wild Walk in web
// import VoiceRecorder from "./Components/Wild Walk in web/VoiceRecorder/VoiceRecorder";
// import GioLocation from "./Components/Wild Walk in web/GioLocation and Share Api/GioLocation";


// From Roadside coder
// import UseEffectPollyfill from "./Components/RoadsideCoder/pollyfills/UseEffectPollyfill";
// import UseMemoPollyfill from "./Components/RoadsideCoder/pollyfills/UseMemoPollyfill";
import Parent from "./Components/RoadsideCoder/pollyfills/Breadcrumbs/Parent";

// From Frontend Master

// Todo app 
// import Todo from "./Components/Todo App/NormalTodo/Todo";

const App = () => {
  return (
    <>
      {/* <RadioButtonGroup /> */}
      {/* <StarRating/> */}
      {/* <CheckBox /> */}
      {/* <RangeInput /> */}
      {/* <ObjectConcept /> */} {/* object concept by what about coding */}
      {/* <Board/>  // tic toe game by piyush garg */}
      {/* <Quiz/> */}
      {/* <Carousel /> */}
      {/* <Accordion /> */}
      {/* <TabCmp/> */}
      {/* <RenderProps/> */}
      {/* <ParentCmp/> */}
      {/* <BasicAccordion/> */}
      {/* <Windowing /> */}
      {/* <InfiniteScroll /> */}
      {/* <StopWatch /> */}
      {/* <StopWatch2 /> */}
      {/* <VoiceRecorder /> */}
      {/* <GioLocation /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithMap /> */}

      {/* From road side coder */}
      {/* <UseEffectPollyfill /> */}
      {/* <UseMemoPollyfill /> */}
      <Parent />

      {/* Todo App */}
      {/* <Todo /> */}
    </>
  );
};

export default App;

/*
// 1. 
  const a = {
    name: "hansraj",
  }
  const b = {
    name: "hansraj",
  }
  console.log(a === a) // true
  console.log(a === b) // false
// 2. 
  const a = React.createElement("div", null, "Hello World");
  const b = React.createElement("div", null, "Hello World");
  console.log(a===a) // true
  console.log(a===b) // false
// 3.
  const a = <div>Hello</div>
  const b = <div>Hello</div>
  console.log(a===a)  // true
  console.log(a===b)  // false
// 4. 
  const Title = ({title}) => {
    <h1>{title}</h1>
  }

  const r1 = <Title title="Hello" />
  const r2 = <Title title="Hello" />
  console.log(r1 === r1); // true
  console.log(r1 === r2); // false

// 5. using useMemo() Hook
  // only when title changes do we create a new element otherwise we return the same exact element we had the last time.
  const Title = ({title}) => {
    const elem = useMemo(
      () => <h1>{title}</h1>,
      [title]
    );
    return elem;
  }

  const r1 = <Title title="Hello" />
  const r2 = <Title title="Hello" />
  console.log(r1 === r1); // true
  console.log(r1 === r2); // true
*/
