// Components
import "./App.css";
import SetRoute from "./components/SetRoute";

// context
import { Gl_provider } from "./context/ContextApi";

function App() {
  return (
    <>
      <Gl_provider>
        <SetRoute />
      </Gl_provider>
    </>
  );
}

export default App;
