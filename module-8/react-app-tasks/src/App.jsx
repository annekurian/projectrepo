import "./App.css";
import ColorChanger from "./components/ColorChanger";
import ToggleMessage from "./components/ToggleMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <ToggleMessage />
      <ColorChanger />
      <UserProfile />
    </div>
  );
}

export default App;
