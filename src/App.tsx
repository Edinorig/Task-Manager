import { Routes, Route } from "react-router";
import Inbox from "./components/Pages/Inbox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inbox />} />
    </Routes>
  );
}

export default App;
