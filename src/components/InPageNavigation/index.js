import React, { useContext }  from "react";
import ThemeContext from "containers/ThemeContext";
import PropTypes from 'prop-types';
import MainContent from "containers/MainContent";
import styles from "./index.module.sass";

export default function InPageNavigation(props) {
  const { sections, active, setActive } = props;
  
  const theme = useContext(ThemeContext);

  const sectionList = sections.map((section, i)=>{

    const { title, path } = section;
    const activeSection = active===path ? styles.active : '';
    const sub = section.sub ? styles.sub : styles.notSub;    

    return (
      <li
        key={`sectionList${i}`}
        className={`${activeSection} ${sub}`}
        onClick={()=>setActive(path)}
      >
        {title}
      </li>
    )
  });

  return (
    <div className={styles.Main}>
      <ul>
        {sectionList}
      </ul>
    </div>
  );
}

InPageNavigation.propTypes = {
  section: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
