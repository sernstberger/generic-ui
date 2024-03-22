import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
  },
  args: {
    isDisabled: false,
    children: 'Button',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
  },
};

{
  /* <Button color="primary" variant="plain">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="neutral" variant="plain">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="destructive" variant="plain">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="success" variant="plain">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="warning" variant="plain">
aldskfjadslfjdsalfadslfj
</Button>

<br />

<Heading level={1}>Outlined</Heading>
<Button color="primary" variant="outlined">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="neutral" variant="outlined">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="destructive" variant="outlined">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="success" variant="outlined">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="warning" variant="outlined">
aldskfjadslfjdsalfadslfj
</Button>

<br />

<Heading level={1}>Soft</Heading>
<Button color="primary" variant="soft">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="neutral" variant="soft">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="destructive" variant="soft">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="success" variant="soft">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="warning" variant="soft">
aldskfjadslfjdsalfadslfj
</Button>

<br />

<Heading level={1}>Solid</Heading>
<Button color="primary" variant="solid">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="neutral" variant="solid">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="destructive" variant="solid">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="success" variant="solid">
aldskfjadslfjdsalfadslfj
</Button>
<Button color="warning" variant="solid">
aldskfjadslfjdsalfadslfj
</Button> */
}
