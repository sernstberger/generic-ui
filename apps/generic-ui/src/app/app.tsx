import { Heading } from 'react-aria-components';
import {
  Button,
  Carousel,
  Layout,
  ProductList,
  SearchField,
  Sheet,
} from '@generic/components';
import { Heart } from 'lucide-react';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { useSeparator } from 'react-aria';

import { useState, useRef, useEffect } from 'react';

const data = {
  resources: [
    {
      title: 'Find me on Twitter',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Welcome to Ark Labs',
      link: 'https://ark-labs.co.uk',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Some sort of third title',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'A personal site perhaps?',
      link: 'https://robkendal.co.uk',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Super item number five',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Super item number six',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Super item number seven',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Super item number eight',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Super item number the last',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ],
};

const Thing = () => {
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
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Our epic carousel
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
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

function Separator(props: any) {
  const { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      style={{
        background: 'gray',
        width: props.orientation === 'vertical' ? '1px' : '100%',
        height: props.orientation === 'vertical' ? '100%' : '1px',
        margin: props.orientation === 'vertical' ? '0 5px' : '5px 0',
      }}
    />
  );
}

const products = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sausage, Cheddar & Egg Sandwich',
    description:
      'A savory sausage patty, fluffy cage-free eggs and aged Cheddar cheese on a perfectly toasted English muffin.',
    price: '$4.95',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sausage, Cheddar & Egg Biscuit',
    description:
      'A savory sausage patty, fluffy eggs and aged Cheddar cheese served on a biscuit.',
    price: '$3.95',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Bacon, Gouda & Egg Sandwich',
    description:
      'Thick-cut bacon, fluffy eggs and aged Gouda cheese on a perfectly toasted English muffin.',
    price: '$4.95',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
    description:
      'Thick-cut bacon, fluffy eggs and aged Cheddar cheese on a perfectly toasted English muffin.',
    price: '$4.95',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Reduced-Fat Turkey Bacon & Cage-Free Egg White Sandwich',
    description:
      'Sliced turkey bacon and egg whites with creamy melted cheese on an organic wheat English muffin.',
    price: '$4.95',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sausage & Cheddar Breakfast Sandwich',
    description:
      'A savory sausage patty, fluffy eggs and aged Cheddar cheese served on a croissant.',
    price: '$3.95',
  },
];

export function App() {
  const navigate = useNavigate();

  return (
    <Provider theme={defaultTheme} colorScheme="light" router={{ navigate }}>
      <Layout>
        <Billboard>
          <div>Avatar</div>
          <Button startIcon={<Heart />}>Save</Button>
        </Billboard>
        <div className="flex justify-between">
          <Heading level={1}>Starbucks</Heading>
          <SearchField />
        </div>

        <Sheet
          variant="outlined"
          color="neutral"
          className="flex justify-between"
        >
          <Button>Delivery / Pickup toggle</Button>
          <Button>Group order</Button>
          <div className="flex justify-between">
            <div>
              <div>$0.00</div>
              <div>
                Delivery fee
                <span>tooltip</span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>21 min</p>
              <p>Delivery time</p>
            </div>
          </div>
        </Sheet>

        <Thing />

        <Carousel title="Featured items" items={products} />
        <Carousel title="Reviews" items={products} />

        <Separator />
        <ProductList title="Some text" products={products} />
      </Layout>
    </Provider>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
