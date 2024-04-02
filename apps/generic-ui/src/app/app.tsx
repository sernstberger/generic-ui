import { Heading, Text } from 'react-aria-components';
import { Button, Layout, ProductList, SearchField } from '@generic/components';
import { View, Grid, repeat } from '@adobe/react-spectrum';
import { Heart } from 'lucide-react';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

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
        <div>
          <Heading level={1}>Starbucks</Heading>
          <SearchField />
        </div>
        <div>
          <Button>Group order</Button>
          <div>
            <div>$0.00</div>
            <div>
              Delivery fee
              <span>tooltip</span>
            </div>
          </div>
          <div>divider</div>
          <div>
            <p>21 min</p>
            <p>Delivery time</p>
          </div>
        </div>
        <div>
          Featured items
          <div>Carousel</div>
        </div>
        <div>
          Reviews
          <div>Review Carousel</div>
        </div>
        <hr />
        <ProductList title="Some text" products={products} />
      </Layout>
    </Provider>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
