import { Heading, Text } from 'react-aria-components';
import { Button, SearchField } from '@generic/components';
import { View, Grid } from '@adobe/react-spectrum';
import { Heart } from 'lucide-react';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

export function App() {
  const navigate = useNavigate();

  return (
    <Provider theme={defaultTheme} colorScheme="light" router={{ navigate }}>
      <Grid
        areas={['header  header', 'sidebar content', 'footer  footer']}
        // columns={['1fr', '3fr']}
        columns={[240, '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="100vh"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View gridArea="content">
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
          <Text>Some text</Text>

          <div className="border p-2">
            <div>
              image
              <div>plusIcon</div>
            </div>
            <Text>Sausage, Cheddar & Egg Sandwich</Text>
            <Text>
              A savory sausage patty, fluffy cage-free eggs and aged Cheddar
              cheese on a perfectly toasted English muffin. -HIGH-PROTEIN
            </Text>
            <Text>$4.95</Text>
          </div>
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
    </Provider>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
