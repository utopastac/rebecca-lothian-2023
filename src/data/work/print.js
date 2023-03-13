import {SECTIONS} from 'data/work/pageBasics';
//
import Floral1 from 'images/print/prints_jojo_6.jpg';
import Floral2 from 'images/print/prints_jojo_5.jpg';
import Floral3 from 'images/print/prints_jojo_3.jpg';
//
import Hand1 from 'images/print/prints_nature_1.jpg';
import Hand2 from 'images/print/prints_mix_1.jpg';
import Hand3 from 'images/print/prints_hand_1.jpg';
import Hand4 from 'images/print/prints_watercolour_1.jpg';
import Hand5 from 'images/print/prints_sketched_1.jpg';
//
import Conversational1 from 'images/print/prints_jojo_1.jpg';
import Conversational2 from 'images/print/prints_jojo_4.jpg';
import Conversational3 from 'images/print/prints_jojo_2.jpg';
import Conversational4 from 'images/print/prints_bb1.jpg';

export const DATA = {
  pages: [
    {
      ...SECTIONS.section,
      title: 'Floral',
      path: '#floral',
      data: [
        {
          type: 'copy',
          copy: `
  ## Floral
  Words.
          `
        },
        {
          type: 'image',
          img: Floral1,
          alt: 'Floral work example',
          caption: ``
        },
        {
          type: 'image',
          img: Floral2,
          alt: 'Floral work example',
          caption: ``
        },
        {
          type: 'image',
          img: Floral3,
          alt: 'Floral work example',
          caption: ``
        }
      ]
    },
    {
      ...SECTIONS.section,
      title: 'Conversational',
      path: '#conversational',
      data: [
        {
          type: 'copy',
          copy: `
  ## Conversational
  Words.
          `
        },
        {
          type: 'image',
          img: Conversational1,
          alt: 'Conversational work example',
          caption: ``
        },
        {
          type: 'image',
          img: Conversational2,
          alt: 'Conversational work example',
        },
        {
          type: 'image',
          img: Conversational3,
          alt: 'Conversational work example',
          caption: ``
        },
        {
          type: 'image',
          img: Conversational4,
          alt: 'Conversational work example',
          caption: ``
        },
      ]
    },
    {
      ...SECTIONS.section,
      title: 'Hand drawn',
      path: '#handdrawn',
      data: [
        {
          type: 'copy',
          copy: `
  ## Hand drawn
  Words.
          `
        },
        {
          type: 'image',
          img: Hand1,
          alt: 'Hand drawn work example',
          caption: ``
        },
        {
          type: 'image',
          img: Hand2,
          alt: 'Hand drawn work example',
        },
        {
          type: 'image',
          img: Hand3,
          alt: 'Hand drawn work example',
          caption: ``
        },
        {
          type: 'image',
          img: Hand4,
          alt: 'Hand drawn work example',
          caption: ``
        },
        {
          type: 'image',
          img: Hand5,
          alt: 'Hand drawn work example',
          caption: ``
        },
      ]
    },
  ]
}
