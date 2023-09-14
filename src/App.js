import keyConeptsImage from "./assets/images/key-concepts.png";
import componentImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

const concepts = [
  {
    title: "Compoenents",
    image: componentImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about eachpiece in isolation. Components can receive data via props, and they can render dynamice output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <header>
        <img src={keyConeptsImage} alt="Medal bage with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO:Title" />
          <h2>TODO:Title</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
      </ul>
    </div>
  );
}
export default App;
