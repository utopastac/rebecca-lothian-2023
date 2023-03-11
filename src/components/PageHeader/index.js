import React, { useContext } from "react";
import ThemeContext from "containers/ThemeContext";
import PropTypes from 'prop-types';
import Markdown from 'components/Markdown';
import SectionLink from 'components/SectionLink';
import styles from "./index.module.sass";

export default function PageHeader(props) {
  const { data } = props;

  const theme = useContext(ThemeContext);

  let links;
  if(data.links){
    links = data.links.map((link, i) => {
      return (
        <SectionLink {...link} key={`link${i}`} />
      )
    });
  }

  return (
    <section className={styles.Main}>
      <header>
        <h5>{ data.date }</h5>
        <h1>{data.title}</h1>
        <div className={styles.content}>
          <Markdown copy={data.subtitle} />
        </div>
      </header>
      {data.links &&
        <div className={styles.links}>
          {/* <h5>Writing</h5> */}
          <div>{ links }</div>
        </div>
      }
    </section>
  );
}

PageHeader.propTypes = {
  data: PropTypes.object.isRequired,
};
