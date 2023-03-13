import {SECTIONS} from 'data/work/pageBasics';
//
import Bonnie1 from 'images/boys/bonniebaby1.jpg';
//
import Jojo1 from 'images/boys/jojo_boysknights.jpg';
import Jojo2 from 'images/boys/jojo_nautical.jpg';
import Jojo3 from 'images/boys/jojo_boyspjs.jpg';
//
import Free1 from 'images/boys/boyswear_mood.jpg';
import Free2 from 'images/boys/boyswear_range.jpg';
import Free3 from 'images/boys/boyswearmood_iceland.jpg';
import Free4 from 'images/boys/boyswearrange_iceland.jpg';

export const DATA = {
  pages: [
    {
      ...SECTIONS.section,
      title: 'Freelance',
      path: '#freelance',
      data: [
        {
          type: 'copy',
          copy: `
  ## Freelance
  Words.
          `
        },
        {
          type: 'image',
          img: Free1,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Free2,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Free3,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Free4,
          alt: 'Freelance work example',
          caption: ``
        }
      ]
    },
    {
      ...SECTIONS.section,
      title: 'Bonnie Baby',
      path: '#bonniebaby',
      data: [
        {
          type: 'copy',
          copy: `
  ## Bonnie Baby
  Words.
          `
        },
        {
          type: 'image',
          img: Bonnie1,
          alt: 'Bonnie Baby work example',
          caption: ``
        }
      ]
    },
    {
      ...SECTIONS.section,
      title: 'Jojo Maman Bebe',
      path: '#jojo',
      data: [
        {
          type: 'copy',
          copy: `
  ## Jojo Maman Bebe
  Words.
          `
        },
        {
          type: 'image',
          img: Jojo1,
          alt: 'Jojo work example',
          caption: ``
        },
        {
          type: 'image',
          img: Jojo2,
          alt: 'Jojo work example',
        },
        {
          type: 'image',
          img: Jojo3,
          alt: 'Jojo work example',
          caption: ``
        }
      ]
    },
  ]
}
