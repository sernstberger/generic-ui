import { Text } from 'react-aria-components';
// import { Button } from './Button';
// import { Plus } from 'lucide-react';
import { Sheet, SheetProps } from './Sheet';

export interface ProductListItemProps extends SheetProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const ProductListItem = ({
  image,
  title,
  description,
  price,
  ...rest
}: ProductListItemProps) => {
  return (
    <Sheet variant="outlined" color="neutral" {...rest}>
      <a href="https://adobe.com">
        <div className="-mx-2 -mt-2 relative">
          {/* TODO: Check for what I should use for alt text */}
          <img src={image} alt={title} className="h-40 w-full object-cover " />

          {/* <Button
            className="absolute bottom-1 right-1"
            onPress={() => console.log('!!!clicked')}
          >
            <Plus />
          </Button> */}
        </div>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
        <Text>{price}</Text>
      </a>
    </Sheet>
  );
};
