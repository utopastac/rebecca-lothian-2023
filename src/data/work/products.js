import {SECTIONS} from 'data/work/pageBasics';
//
import Jojo1 from 'images/product/jojonursery_balloon.jpg';
import Jojo2 from 'images/product/jojonursery_moon.jpg';
import Jojo3 from 'images/product/jojonursery_rocket.jpg';
//
import Home1 from 'images/product/homewares_mood_1.jpg';
import Home2 from 'images/product/homewares_range_1.jpg';
import Home3 from 'images/product/homeswares_mood_2.jpg';
import Home4 from 'images/product/homewares_range_2.jpg';
import Home5 from 'images/product/homewares_mood_3.jpg';
import Home6 from 'images/product/homewares_range_3.jpg';
import Home7 from 'images/product/homewares_4_mood.jpg';
import Home8 from 'images/product/homewares_range_4.jpg';
import Home9 from 'images/product/homewares_mood_5.jpg';
import Home10 from 'images/product/homewares_range_5.jpg';

export const DATA = {
  pages: [
    {
      ...SECTIONS.section,
      title: 'Jojo Maman Bebe',
      path: '#jojomamanbebe',
      data: [
        {
          type: 'copy',
          copy: `
  ## Jojo Maman Bebe
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
          caption: ``
        },
        {
          type: 'image',
          img: Jojo3,
          alt: 'Jojo work example',
          caption: ``
        }
      ]
    },
    {
      ...SECTIONS.section,
      title: 'Freelance',
      path: '#freelance',
      data: [
        {
          type: 'copy',
          copy: `
  ## Freelance
          `
        },
        {
          type: 'image',
          img: Home1,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home2,
          alt: 'Freelance work example',
        },
        {
          type: 'image',
          img: Home3,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home4,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home5,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home6,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home7,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home8,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home9,
          alt: 'Freelance work example',
          caption: ``
        },
        {
          type: 'image',
          img: Home10,
          alt: 'Freelance work example',
          caption: ``
        },
      ]
    }
  ]
}
