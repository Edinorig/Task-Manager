import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <div></div>
      </main>
    </div>
  );
}

export default App;
