import React from "react";
import PropTypes from 'prop-types';
import Image from 'components/Image';
import styles from "./index.module.sass";

export default function ImageGrid(props) {
  const { img, alt, col } = props;

  let columns;
  if(col){
    switch(col){
      case 2:
        columns = styles.two
        break;
      case 3:
        columns = styles.three
        break;
      case 4:
        columns = styles.four
        break;
      case 5:
        columns = styles.five
        break;
    }
  }
  
  const images = img.map((image, index)=>{
    return (
      <div className={styles.image}>
        <Image img={image} alt={`${alt}-${index}`} key={`${alt}-${index}`} />
      </div>
    )
  });
  
  return (
    <div className={`${styles.Main} ${col ? columns: ''}`}>
      {images}
    </div>
  );
}

ImageGrid.propTypes = {
  img: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
  col: PropTypes.number
};
