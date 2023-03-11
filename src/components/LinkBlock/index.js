import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Image from 'components/Image';
import styles from "./index.module.sass";

export default function LinkBlock(props) {
  const { title, intro, image, date, basePath, path, type } = props;
  if(type==='link') return null;
  return (
    <Link to={`${basePath}${path}`} className={styles.Main}>
      <div className={styles.backer} />
      <div className={styles.container}>
        <Image img={image} alt='Portfolio item image' />
        <div>
          <header>
            <h2>{title}</h2>
          </header>
          <p>{intro}</p>
        </div>
      </div>
    </Link>
  );
}

LinkBlock.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
  date: PropTypes.string
};
