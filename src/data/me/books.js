import {SECTIONS} from 'data/work/pageBasics';
import p1 from 'images/pixel/p1.PNG';

export const DATA = {
  meta: [
  ],
  pages: [
    {
      ...SECTIONS.section,
      title: 'Image',
      path: '#Image',
      sub: true,
      data: [
        {
          type: 'imageGrid',
          col: 5,
          img: [
            p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1
          ],
          alt: 'Animated Cat'
        },
      ]
    },
  ]
}
