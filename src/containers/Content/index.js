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
  
  const {match, history, location, data, date, links, title, subtitle, theme, related } = props;
  const { pages } = data;

  const [active, setActive] = useState();
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

  useEffect(() => {
    const path = location.hash;
    if(path){
      setActive(path);
      scrollToSection(path);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    const inViewRefs = refs.current.filter((ref)=>{
      if(ref && ref.current.offsetTop !==null){
        return ref.current.offsetTop <= window.scrollY
      }
    });
    const path = paths[inViewRefs.length-1];
    setActive(path);
  }

  const switchSection = (path) => {
    history.push(`${match.url}${path}`);
    scrollToSection(path);
  }

  const scrollToSection = (path) => {
    const index = paths.indexOf(path);
    window.scrollTo({
      top: refs.current[index].current.offsetTop - 32,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.Main}>

      <PageHeader
        data={{title: title, subtitle:subtitle, date: date, links: links}}
        sections={pages}
        active={active}
        setActive={switchSection}
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
