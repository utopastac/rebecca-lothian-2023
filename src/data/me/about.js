import {SECTIONS} from 'data/work/pageBasics';
import Me1 from 'images/content/bec_young.jpg';

export const DATA = {
  pages: [
    {
      ...SECTIONS.section,
      title: 'About',
      path: '#aboutme',
      sub: true,
      data: [
        {
          type: 'copy',
          copy: `
  I'm Rebecca. I live in south west London with my 2 rescue dogs and husband. I have been designing childresnwear and products for over 15 years.  
  &nbsp;  
  &nbsp;
  I studied fasion at Kingston University, graduating in 2007. Throughout my studies, I developed a growing obsession with vintage clothes and childrens books. I adore the illustration styles of the time, and use them often as inspiration for my work.  
  &nbsp;  
  I have been lucky enough to work at some amazing companies. I started my career in childrenswear with high street retailer Jojo Maman Bebe, where I worked across their entire product range. I then worked directly with the founder of Bonnie Baby, a luxury brand based in Brighton. I got to experience the vast archive collection whilst working with Laura Ashley, always an inspiration for me.
          `
        },
        {
          type: 'image',
          img: Me1,
          half: true,
          alt: 'Me aged 5',
          caption: `
          I found my love of vintage clothes at a young age. This is me aged 5 wearing a vintage Laura Ashley dress.
          `
        },
      ]
    },
  ]
}
