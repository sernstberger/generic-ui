import { Text } from 'react-aria-components';
import { Grid, repeat } from '@adobe/react-spectrum';
import { ProductListItem, ProductListItemProps } from './ProductListItem';

export interface ProductListProps {
  title: string;
  products: ProductListItemProps[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div>
      <Text>{title}</Text>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => {
          return <ProductListItem {...product} key={product.title} />;
        })}
      </div>
      <div>pagination goes here</div>
    </div>
  );
};
