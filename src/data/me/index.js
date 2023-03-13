import * as About from 'data/me/about';
import * as Inspiration from 'data/me/inspiration';

export const PAGES = [
  {
    title: 'About',
    date: 'Personal',
    intro: '...',
    subtitle: 'I love all aspects of designing for children. My style is flexible and vintage inspired, and I take great pride in my design research.',
    path: `/about`,
    links: [
      {
        title: 'Childenswear Instagram',
        subtitle: 'An Instagram account where I detail my finds in childrenswear and vintage.',
        cta: 'Hello',
        path: 'https://instagram.com/dovetail_child'
      },
      {
        title: 'Inspiration Pinterest',
        subtitle: 'My Pinterest account where I save all interesting visual inspiration.',
        cta: 'Hello',
        path: 'https://www.pinterest.co.uk/Narrative_vintage/'
      }
    ],
    data: About.DATA
  },
  {
    title: 'Inspiration',
    date: 'Personal',
    intro: '...',
    subtitle: 'I have a large collection of vintage childrenswear and illustrated books. I use these as inspiration for everything I make.',
    path: `/inspiration`,
    data: Inspiration.DATA
  },
  {
    title: 'Email',
    type: 'link',
    path: `mailto:narrativevintage@gmail.com`,
  },
  {
    title: 'LinkedIn',
    type: 'link',
    path: `https://www.linkedin.com/in/rebecca-lothian-5bb18945/`,
  },
  {
    title: 'Vintage Instagram',
    type: 'link',
    path: `https://instagram.com/narra_tives`,
  },
  {
    title: 'Childrenswear instagram',
    type: 'link',
    path: `https://instagram.com/dovetail_child`,
  },
  {
    title: 'Inspiration Pinterest',
    type: 'link',
    path: `https://www.pinterest.co.uk/Narrative_vintage/`,
  }
]


