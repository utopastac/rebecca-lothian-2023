import React from "react";
import PropTypes from 'prop-types';
import MainContent from "containers/MainContent";
import Quote from 'components/Content/PeerQuotes/Quote';
import styles from "./index.module.sass";
import * as Colors from "data/colors";

export default function PeerQuotes(props) {
  
  const {quotes} = props;
  
  const quoteElements = quotes.map((quote, index)=>{
    return (
      <Quote content={quote.content} attribution={quote.attribution} />
    )
  });
  
  return (
    <div className={styles.Main}>
      <MainContent>
        <div className={styles.content}>
          {quoteElements}
        </div>
      </MainContent>
    </div>
  );
}

PeerQuotes.propTypes = {
  quotes: PropTypes.array.isRequired,
};
