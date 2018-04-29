import React from "react";
import classes from "./style.css";
import Aux from "../hoc/Aux";

const Layout = props => {
  return (
    <Aux>
      <div>
        <p>We're Good!</p>
        {/* <Toolbar />
        <Sidebar />
        <Backdrop /> */}
      </div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
