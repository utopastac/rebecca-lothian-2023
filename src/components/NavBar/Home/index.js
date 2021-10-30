import React, { useContext, useState } from "react";
import ThemeContext from "containers/ThemeContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./index.module.sass";

export default function NavItem(props) {
  const { title, path, active, stuck } = props;

  const theme = useContext(ThemeContext);

  return (
    <li
      className={`${styles.Main} ${active ? styles.active : ''} ${stuck ? styles.stuck : ''}`}
      style={{color: theme.text}}
    >
      <Link to={path}>
        <div className={styles.content}>
          <span>
            {title}
            <div className={styles.bar} style={{background: theme.text}} />
          </span>
        </div>
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  stuck: PropTypes.bool.isRequired,
};
