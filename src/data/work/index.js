import * as Girlswear from 'data/work/girlswear';
import * as Boyswear from 'data/work/boyswear';
import * as Babywear from 'data/work/baby';
import * as Print from 'data/work/print';
import * as Products from 'data/work/products';
import Girls from 'images/girls/bonniebaby3.jpg';
import Boys from 'images/girls/bonniebaby3.jpg';
import Baby from 'images/girls/bonniebaby3.jpg';
import PrintImage from 'images/girls/bonniebaby3.jpg';
import Product from 'images/girls/bonniebaby3.jpg';

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
    image: Girls,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/girlswear`,
    data: Girlswear.DATA
  },
  {
    title: 'Boyswear',
    date: 'Work',
    image: Boys,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/boysswear`,
    data: Boyswear.DATA
  },
  {
    title: 'Babywear',
    date: 'Work',
    image: Baby,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/babywear`,
    data: Babywear.DATA
  },
  {
    title: 'Print',
    date: 'Work',
    image: PrintImage,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/print`,
    data: Print.DATA
  },
  {
    title: 'Products',
    date: 'Work',
    image: Product,
    intro: 'At Twitter, I am leading design for subscriptions as a Staff product designer in the revenue diversity team.',
    subtitle: "I joined Twitter at a time of accelerating product change to help lead design in the revenue diversity space. I am primarily focused on imprving on consumer subscription product, Twitter Blue.",
    path: `/products`,
    data: Products.DATA
  },
]
