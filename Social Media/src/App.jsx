import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import AddEntry from "./components/AddEntry";
import PostList from "./components/PostList";
import { useState } from "react";
import ContextProvider from "./store/ContextProvider";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");
  function sideBarBtn(e) {
    let newVal = e.target.innerText;
    newVal === "Home" ? setSelectedTab("Home") : setSelectedTab("Create Post");
  }

  return (
    <ContextProvider>
      <div className="main_Box">
        <SideBar selectedTab={selectedTab} sideBarBtn={sideBarBtn}></SideBar>
        <div className="Header_footer_container">
          <Header></Header>
          {selectedTab === "Home" ?(
            <PostList></PostList>
          ) : (
            <AddEntry></AddEntry>
          )}
          <Footer></Footer>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
