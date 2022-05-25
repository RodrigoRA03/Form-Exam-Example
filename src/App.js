import FormState from "./context/formsContext/formState";
import UiState from "./context/uiContext/uiState";
import { StepScreen } from "./pages/StepScreen";

function App() {
  return (
    <UiState>
      <FormState>
        <StepScreen />
      </FormState>
    </UiState>
  );
}

export default App;
