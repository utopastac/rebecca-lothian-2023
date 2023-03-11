import * as Girlswear from 'data/work/girlswear';
import image1 from 'images/content/twitter-1.jpg';

export const TITLE_BLOCK = {
  title: 'Work',
  subtitle: `
#### I am lucky enough to have worked on some amazing projects at incredible companies. I'm currently at Twitter, thinking about the future of revenue diversity and subscriptions.
`,
};

export const PAGES = [
  {
    title: 'Girlswear',
    date: 'Work',
    image: image1,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/girlswear`,
    data: Girlswear.DATA
  },
]
