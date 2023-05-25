import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';
import img4 from '../assets/img/img-4.png';

export const products = [
  {
    id: 1,
    img: img1,
    title: 'Рождение Венеры',
    author: 'Сандро Боттичелли',
    oldPrice: 2000000,
    newPrice: 1000000,
    isAvialable: true,
  },
  {
    id: 2,
    img: img2,
    title: 'Тайная вечеря',
    author: 'Леонардо да Винчи',
    oldPrice: null,
    newPrice: 3000000,
    isAvialable: true,
  },
  {
    id: 3,
    img: img3,
    title: 'Сотворение Адама',
    author: 'Микеланджело',
    oldPrice: 6000000,
    newPrice: 5000000,
    isAvialable: true,
  },
  {
    id: 4,
    img: img4,
    title: 'Урок анатомии',
    author: 'Рембрандт',
    oldPrice: 2000000,
    newPrice: 1000000,
    isAvialable: false,
  },
];
