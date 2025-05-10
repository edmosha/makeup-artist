import type { ReactNode } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ICarouselProps {
  children?: ReactNode;
}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export const Carousel = ({ children }: ICarouselProps) => (
  <ReactMultiCarousel
    responsive={responsive}
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    draggable
    infinite
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    shouldResetAutoplay
    slidesToSlide={1}
    swipeable
    // itemClass='carousel-item-padding-40-px'
  >
    {children}
  </ReactMultiCarousel>
);
