import React, { useState, useEffect, useRef, createRef } from "react";
import PropTypes from 'prop-types';
import PageHeader from "components/PageHeader";
import Overlay from "components/Overlay";
import Markdown from "components/Markdown";
import { withRouter } from "react-router-dom";
import styles from "./index.module.sass";
//
import UseSetTheme from 'hooks/UseSetTheme';

function Content(props) {
  
  const { data, title, subtitle, date, theme } = props;
  const { pages } = data;

  const [overlayOpen, setOverlayOpen] = useState(false);

  UseSetTheme(props.appProps.setTheme, theme);

  const paths = pages.map((page) => page.path);
  const refs = useRef(pages.map(() => React.createRef()));

  const sectionsToRender = pages.map((page, i)=>{
    return (
      <section
        ref={refs.current[i]}
        key={`RuleSections${i}`}
      >
        { React.createElement(page.component, {...page, setOverlayOpen: setOverlayOpen}) }
      </section>
    )
  });

  return (
    <div className={styles.Main}>

      <PageHeader
        data={{title: title, subtitle:subtitle, date: date}}
      />

      <section className={styles.content}>
          { sectionsToRender }
      </section>
      
      {overlayOpen &&
        <Overlay close={()=>setOverlayOpen(false)} title={title} subtitle=''>
          <Markdown copy={'Hi'} />
        </Overlay>
      }
        
    </div>
    
  );
}

export default withRouter(Content);

Content.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

Content.defaultProps = {
  
};
