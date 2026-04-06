import React from "react";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-3 border-b-2 border-b-[#E4E4E7] px-5">
      <div>
        <h1>TASK MANAGER</h1>
      </div>
      <nav className="flex flex-row gap-6">
        <a href="">
          <p className="text-sm">INBOX</p>
        </a>
        <a href="">
          <p className="text-sm">PROJECTS</p>
        </a>
        <a href="">
          <p className="text-sm">ARCHIVES</p>
        </a>
      </nav>
      <div className="flex flex-row gap-1">
        <div>+ TASK</div>
        <SignedOut>
          <SignInButton>SIGN IN</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
