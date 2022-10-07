import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function Hello({ firstName, lastName, children: city }) {
//     return (
//       <h1 style={{ color: "blue" }}>
//         Hi {firstName} {lastName} from {city}!!!
//       </h1>
//     );
//   }

// var out1 = <h1 style={{ color: "blue" }}>This is from JSX</h1>;
// // Use the babel transpiler to go from out1 to out2
// var out2 = createElement(
//   "h1",
//   { style: { color: "red" } },
//   "This is from createElement"
// );
// //execute createElement to generate an element from the virtual dom
// var out3 = {
//   $$typeof: Symbol.for("react.element"),
//   type: "h1",
//   props: {
//     style: { color: "purple" },
//     children: "This is from the virtual DOM",
//   },
//   ref: null,
//   key: null,
// };

//   console.log("I'm running");
//   root.render(
//     <>
//       <h1 style={{ color: "blue" }}>Hello World</h1>
//       <p>The time is {new Date().toLocaleTimeString()}</p>
//     </>
//   );
// }, 1000);
