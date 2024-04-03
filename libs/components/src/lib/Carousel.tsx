import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductListItem, ProductListItemProps } from './ProductListItem';

import { useState, useRef, useEffect, ReactNode } from 'react';

export interface CarouselProps {
  title: string;
  items: ProductListItemProps[];
}

export const Carousel = ({ title, items }: CarouselProps) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-xl">{title}</h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <CarouselButton
            onClick={movePrev}
            disabled={isDisabled('prev')}
            srText="Prev"
          >
            <ChevronLeft className="w-10 h-10" />
          </CarouselButton>

          <CarouselButton
            onClick={moveNext}
            disabled={isDisabled('next')}
            srText="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </CarouselButton>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <a
                  href="#"
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${item.image || ''})` }}
                >
                  <img
                    src={item.image || ''}
                    alt={item.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href="#"
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {item.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
  srText: string;
}

const CarouselButton = ({
  onClick,
  disabled,
  children,
  srText,
}: CarouselButtonProps) => (
  <button
    onClick={onClick}
    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
    disabled={disabled}
  >
    {children}
    <span className="sr-only">{srText}</span>
  </button>
);
