import React from "react";
import styles from "./index.module.sass";
import MainContent from "containers/MainContent";
import Markdown from 'components/Markdown';
import LinkBlock from "components/LinkBlock";

import * as Data from 'data/home';
import * as WorkData from 'data/work';
import * as NavigationData from 'data/navigation';
import * as Colors from 'data/colors';

import UseSetTheme from 'hooks/UseSetTheme';

export default function Home(props) {

  const { TITLE_BLOCK } = Data;

  UseSetTheme(props.appProps.setTheme, Colors.PEACH_THEME);

  const resumeElements = WorkData.PAGES.map((page, i) => {
    return (
      <LinkBlock {...page} basePath={NavigationData.WORK_PATH} key={`page${i}`} />
    )
  });

  return (
    <div className={styles.Main}>
      <MainContent>
        <header>
          <h1>{TITLE_BLOCK.title}</h1>
          <Markdown copy={TITLE_BLOCK.subtitle} />
        </header>
      </MainContent>

      <section className={styles.resume}>
        <MainContent>
          <div className={styles.content}>
            {resumeElements}
          </div>
        </MainContent>
      </section>
    </div>
  );
}

//<SectionPromoList data={PROMO_BLOCK.promos} basePath='' title='Our Approach' />
