import React from "react";
import PropTypes from 'prop-types';
import Image from 'components/Image';
import styles from "./index.module.sass";

export default function SectionImage(props) {
  const { img, alt, caption, full, half } = props;
  return (
    <figure className={`${styles.Main} ${full ? styles.full: ''} ${half ? styles.half: ''}`}>
      <Image img={img} alt={alt} className={styles.image} />
      {caption &&
        <figcaption className={styles.caption}>
          <span>{caption}</span>
        </figcaption>
      }
    </figure>
  );
}

SectionImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  full: PropTypes.bool,
  half: PropTypes.bool,
  caption: PropTypes.string
};
