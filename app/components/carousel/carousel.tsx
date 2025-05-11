import { type ReactNode, useEffect, useState } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ICarouselProps {
  children?: ReactNode;
  maxItemsDesktop?: number;
}

const getResponsive = (maxItemsDesktop: number) => (
  {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: maxItemsDesktop,
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
  }
);

export const Carousel = ({ children, maxItemsDesktop = 4 }: ICarouselProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ReactMultiCarousel
      responsive={ getResponsive(maxItemsDesktop) }
      additionalTransfrom={ 0 }
      arrows
      autoPlaySpeed={ 3000 }
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={ 80 }
      pauseOnHover
      shouldResetAutoplay
      slidesToSlide={ 1 }
      swipeable
    >
      { children }
    </ReactMultiCarousel>
  );
};
