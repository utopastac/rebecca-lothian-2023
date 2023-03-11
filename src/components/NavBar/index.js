import React, { useContext } from "react";
import ThemeContext from "containers/ThemeContext";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";

import * as Data from 'data/navigation';

function NavBar(props) {

  const {location} = props;

  const theme = useContext(ThemeContext);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={`${styles.Main}`}>
      <div className={styles.content}>
        <div>
          <Link to={Data.HOME.path}>
            <h4>Rebecca Lothian</h4>
            <p>Portfolio</p>
          </Link>
        </div>
        <div>
          <h4>Childrenswear, Print, illustration</h4>
          <p>Select projects</p>
        </div>
        <div>
          <h4>{year}</h4>
          <p>–</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
