import * as Girlswear from 'data/work/girlswear';
import * as Boyswear from 'data/work/boyswear';
import * as Babywear from 'data/work/baby';
import * as Print from 'data/work/print';
import * as Products from 'data/work/products';
import Girls from 'images/girls.jpg';
import Boys from 'images/boys.jpg';
import Baby from 'images/baby.jpg';
import PrintImage from 'images/print.jpg';
import Product from 'images/product.jpg';

export const TITLE_BLOCK = {
  title: 'Work',
  subtitle: `
####.
`,
};

export const PAGES = [
  {
    title: 'Girlswear',
    date: 'Work',
    image: Girls,
    intro: 'Girlswear seasonal shape and print work for a variety of different companies. From vintage inspired silhouettes to hand drawn prints.',
    subtitle: "Girlswear is my true love. I love the attention to detail and craft, and have extensive experience designing across shape and pattern.",
    path: `/girlswear`,
    data: Girlswear.DATA
  },
  {
    title: 'Boyswear',
    date: 'Work',
    image: Boys,
    intro: 'I have worked on boyswear extensively, with full ranges, bold graphics, and detailed prints.',
    subtitle: "I have had the opportunity to design exciting ranges for boys whilst at various companies. I enjoy applying my style to all types of childrens products.",
    path: `/boysswear`,
    data: Boyswear.DATA
  },
  {
    title: 'Babywear',
    date: 'Work',
    image: Baby,
    intro: 'Babywear shape and pattern work from the past 15 years.',
    subtitle: "At Jojo Maman Bebe, I designed extensive ranges for babywear. I have also had the chance to work with some beautiful vintage licences.",
    path: `/babywear`,
    data: Babywear.DATA
  },
  {
    title: 'Print',
    date: 'Work',
    image: PrintImage,
    intro: 'A selection of my print and pattern work, including vintage inspired florals, and painterly, hand-drawn motifs.',
    subtitle: "I love to design repeat patterns. I have experienced many styles, using both digital and traditional methods, to make a wide variety of prints for different applications.",
    path: `/print`,
    data: Print.DATA
  },
  {
    title: 'Products',
    date: 'Work',
    image: Product,
    intro: 'Childrens product design outside of clothing.',
    subtitle: "Whilst working at Jojo, I got to use my design style across a variety of different product lines.",
    path: `/products`,
    data: Products.DATA
  },
]
