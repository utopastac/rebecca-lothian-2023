import React, { useContext } from "react";
import ThemeContext from "containers/ThemeContext";
import PropTypes from 'prop-types';
import Markdown from 'components/Markdown';
import InPageNavigation from "components/InPageNavigation";
import SectionLink from 'components/SectionLink';
import styles from "./index.module.sass";

export default function PageHeader(props) {
  const { data, sections, active, setActive } = props;

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
        <h1>{ data.title }</h1>
        <div className={styles.content}>
          <Markdown copy={ data.subtitle } />
        </div>
      </header>
      {(sections.length > 1) &&
        <InPageNavigation
          sections={sections}
          active={active}
          setActive={setActive}
        />
      }
      {data.links &&
        <div className={styles.links}>
          <div>{ links }</div>
        </div>
      }
    </section>
  );
}

PageHeader.propTypes = {
  data: PropTypes.object.isRequired,
  sections: PropTypes.array,
  active: PropTypes.number,
  setActive: PropTypes.func
};
