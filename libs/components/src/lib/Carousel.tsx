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
            return <CarouselItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

interface CarouselItemProps {
  item: {
    image: string;
    title: string;
  };
}

const CarouselItem = ({ item }: CarouselItemProps) => (
  // <div className="carousel-item text-center relative w-64 h-64 aspect-square snap-center bg-yellow-400">
  //   <img src={item.image || ''} alt={item.title} />
  //   <h3 className="text-xl">{item.title}</h3>
  // </div>
  <ProductListItem
    {...item}
    className="carousel-item w-64 h-64 aspect-square snap-center"
  />
);

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

// import React from 'react';

// export const Carousel = () => {
//   const handleClick = (direction) => {
//     const list = document.querySelector('.list');
//     const item = document.querySelector('.item');
//     const itemWidth = item.offsetWidth;

//     if (direction === 'previous') {
//       list.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//     } else {
//       list.scrollBy({ left: itemWidth, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="list-wrapper" style={{ position: 'relative' }}>
//       <ul
//         className="list"
//         style={{
//           display: 'flex',
//           gap: '8px',
//           padding: '16px',
//           listStyle: 'none',
//           overflowX: 'scroll',
//           scrollSnapType: 'x mandatory',
//         }}
//       >
//         <li
//           className="item"
//           style={{
//             flexShrink: 0,
//             width: '80%',
//             height: '90vh',
//             backgroundColor: '#FFF',
//             scrollSnapAlign: 'center',
//           }}
//         >
//           <div
//             className="content"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: '100%',
//               fontFamily: 'sans-serif',
//               fontSize: '64px',
//               fontWeight: 'bold',
//             }}
//           >
//             Item 1
//           </div>
//         </li>
//         <li
//           className="item"
//           style={{
//             flexShrink: 0,
//             width: '80%',
//             height: '90vh',
//             backgroundColor: '#FFF',
//             scrollSnapAlign: 'center',
//           }}
//         >
//           <div
//             className="content"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: '100%',
//               fontFamily: 'sans-serif',
//               fontSize: '64px',
//               fontWeight: 'bold',
//             }}
//           >
//             Item 2
//           </div>
//         </li>
//         <li
//           className="item"
//           style={{
//             flexShrink: 0,
//             width: '80%',
//             height: '90vh',
//             backgroundColor: '#FFF',
//             scrollSnapAlign: 'center',
//           }}
//         >
//           <div
//             className="content"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: '100%',
//               fontFamily: 'sans-serif',
//               fontSize: '64px',
//               fontWeight: 'bold',
//             }}
//           >
//             Item 3
//           </div>
//         </li>
//         {/* Add more items as needed */}
//       </ul>
//       <button
//         onClick={() => handleClick('previous')}
//         className="button button--previous"
//         type="button"
//         style={{
//           position: 'absolute',
//           top: '50%',
//           width: '3rem',
//           height: '3rem',
//           transform: 'translateY(-50%)',
//           left: '1.5rem',
//           transform: 'rotate(180deg)',
//         }}
//       >
//         ➜
//       </button>
//       <button
//         onClick={() => handleClick('next')}
//         className="button button--next"
//         type="button"
//         style={{
//           position: 'absolute',
//           top: '50%',
//           width: '3rem',
//           height: '3rem',
//           transform: 'translateY(-50%)',
//           right: '1.5rem',
//         }}
//       >
//         ➜
//       </button>
//     </div>
//   );
// };
