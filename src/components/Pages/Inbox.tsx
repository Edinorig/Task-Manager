import React from "react";
import Task from "../Task";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";

function Inbox() {
  return (
    <>
      <Header />
      <main className="flex flex-row">
        <SideBar />
        <section className="pl-96 pt-16 w-200">
          <h1 className="text-6xl">INBOX</h1>
          <p className="text-xs pt-5">TASKS - 5 REMANING</p>
          <SearchInput />
          <div>
            <Task />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const SearchInput = () => {
  return (
    <input
      type="text"
      className="py-2 px-3 border rounded-sm w-full mt-16 border-[#C6C6C6]/30"
      placeholder="What needs to be done ?"
    />
  );
};

export default Inbox;
