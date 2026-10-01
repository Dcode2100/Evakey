export interface CarouselData {
  id: number;
  image: string;
}

// EVAKEY's own product photos (served from /public so they always load).
export const Datas: CarouselData[] = [
  { id: 1, image: "/rubberkeychain/rubber3.jpg" },
  { id: 2, image: "/rubberkeychain/rubber9.jpg" },
  { id: 3, image: "/rubberkeychain/metal1.jpg" },
  { id: 4, image: "/rubberkeychain/rubber6.jpg" },
];

