import { Text } from 'react-aria-components';
import { Grid, repeat } from '@adobe/react-spectrum';
import { Button } from './Button';
import { Plus } from 'lucide-react';
import { Sheet } from './Sheet';

export interface ProductListProps {
  title: string;
  products: ProductCardProps[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
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

export interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const ProductCard = ({
  image,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <Sheet variant="outlined" color="neutral">
      <div>
        {/* TODO: Check for what I should use for alt text */}
        <img src={image} alt={title} />

        <Button>
          <Plus />
        </Button>
      </div>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </Sheet>
  );
};
