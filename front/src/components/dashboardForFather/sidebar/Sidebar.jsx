import React from "react";
import { BiBarChartAlt } from "react-icons/bi";
import Soncard from "../soncard/Soncard";
import Modal from "../Modal/Modal";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import LogOut from "../../logOut";
import Addform from "../../dashboardForFather/Addform/Addform";
import { useLoaderData } from "react-router-dom";
function Sidebar(props) {
  const data = useLoaderData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hundleClickLogOut(){
    LogOut()
  }
  function showModalHandler() {

    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <FaBars onClick={toggleSidebar} size={30} className={classes.iconbar} />

      <aside
        className={`${classes.sidebar} ${
          isSidebarOpen ? "" : classes.sidebarHidden
        }`}
      >
        <BiBarChartAlt className={classes.bars} size={40} />
        <h4 className={classes.sentenc}>Parents Dashboard</h4>
        <p className={classes.LogOut} onClick={hundleClickLogOut}>LogOut</p>
        {data.value.map((e) => {
          return (
            <Soncard
              key={e.id}
              id={e.id}
              photo={e.profile}
              name={e.name}
              minute={e.minute}
              setInfo={props.setInfo}
              setKidsInfo={props.setKidsInfo}
            />
          );
        })}
        {/* <Soncard onHandle={props.onHandle} /> */}
        {modalIsVisible && (
          <Modal onClose={hideModalHandler} onOpen={setModalIsVisible}>
            <Addform />
          </Modal>
        )}
        <button onClick={showModalHandler} className={classes.addchild}>
          Add child
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
