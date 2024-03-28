import { Heading, Text } from 'react-aria-components';
import { Button, SearchField } from '@generic/components';
import { View, Grid, repeat } from '@adobe/react-spectrum';
import { Heart } from 'lucide-react';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

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
        <ProductList
          title="Some text"
          products={[
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
          ]}
        />
      </Layout>
    </Provider>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

interface ProductListProps {
  title: string;
  products: ProductCardProps[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div>
      <Text>{title}</Text>
      <Grid
        columns={repeat('auto-fit', 'size-3000')}
        autoRows="size-3000"
        justifyContent="center"
        gap="size-100"
      >
        {products.map((product) => {
          return <ProductCard {...product} key={product.title} />;
        })}
      </Grid>
    </div>
  );
};

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({
  image,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <div className="border p-2">
      <div>
        {/* TODO: Check for what I should use for alt text */}
        <img src={image} alt={title} />

        <Button>plusIcon</Button>
      </div>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </div>
  );
};

const Layout = ({ children }: any) => {
  return (
    <Grid
      // areas={['header  header', 'sidebar content', 'footer  footer']}
      areas={['header  header', 'sidebar content']}
      columns={[240, '3fr']}
      // rows={['size-1000', 'auto', 'size-1000']}
      rows={['size-1000', 'auto']}
      height="100vh"
    >
      <View backgroundColor="gray-50" gridArea="header" />
      <View backgroundColor="gray-500" gridArea="sidebar" overflow="scroll">
        <ul>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
        </ul>
      </View>
      <View gridArea="content" overflow="scroll" backgroundColor="gray-100">
        {children}
      </View>
      {/* <View backgroundColor="magenta-600" gridArea="footer" /> */}
    </Grid>
  );
};

export default App;
