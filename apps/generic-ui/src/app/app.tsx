import { Heading, Text } from 'react-aria-components';
import {
  Button,
  Layout,
  ProductList,
  SearchField,
  Sheet,
} from '@generic/components';
import { Heart } from 'lucide-react';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { useSeparator } from 'react-aria';

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
        <div>
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
        <div>
          Featured items
          <div>Carousel</div>
        </div>
        <div>
          Reviews
          <div>Review Carousel</div>
        </div>
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
