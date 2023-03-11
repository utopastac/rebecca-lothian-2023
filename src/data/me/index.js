import * as About from 'data/me/about';
import * as Collection from 'data/me/collection';
import * as Books from 'data/me/books';

export const PAGES = [
  {
    title: 'About',
    date: 'Personal',
    intro: 'My life, my dogs, my family, my interests, and everything that makes me who I am.',
    subtitle: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione',
    path: `/about`,
    links: [
      {
        title: 'Link',
        subtitle: 'This is a link',
        cta: 'Hello',
        path: '/go'
      }
    ],
    data: About.DATA
  },
  {
    title: 'Collection',
    date: 'Personal',
    intro: 'Playpress is a toy company I founded with my brother, creating award-winning, eco-friendly playsets.',
    subtitle: 'Playpress is a set of construction toys, designed and manufactured in the UK. Made out of recycled cardboard, it is designed as an environmentally friendly, pocket-money price toy, but retaining all the fun of well-known brands like Lego.',
    path: `/collection`,
    data: Collection.DATA
  },
  {
    title: `Vintage Children's books`,
    date: 'Personal',
    intro: 'Portraits of people I have seen out and about in a pixelated style, drawn on my phone with Memopad.',
    subtitle: 'Sometimes when I have downtime, on the train or while waiting, I like to draw the people I see.',
    path: `/books`,
    data: Books.DATA
  },
  {
    title: 'Email',
    type: 'link',
    path: `mailto:utopastac@gmail.com`,
  },
  {
    title: 'LinkedIn',
    type: 'link',
    path: `https://www.linkedin.com/in/utopastac/`,
  },
  {
    title: 'Vintage Instagram',
    type: 'link',
    path: `https://twitter.com/utopastac`,
  },
  {
    title: 'Childrenswear instagram',
    type: 'link',
    path: `https://medium.com/@utopastac`,
  },
  {
    title: 'Pinterest',
    type: 'link',
    path: `https://medium.com/@utopastac`,
  },
]
