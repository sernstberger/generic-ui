import { Text } from 'react-aria-components';
import { ProductListItem, ProductListItemProps } from './ProductListItem';

export interface CarouselProps {
  title: string;
  items: ProductListItemProps[];
}

export const Carousel = ({ title, items }: CarouselProps) => {
  return (
    <div>
      <Text>{title}</Text>
      <div>arrows go here</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((product) => {
          return <ProductListItem {...product} key={product.title} />;
        })}
      </div>
    </div>
  );
};
