import { Heading, Text } from 'react-aria-components';
import { Button, Sheet } from '@generic/components';

export function App() {
  return (
    <div>
      <Billboard>foooooooobar</Billboard>

      <Heading level={1}>Plain</Heading>
      <Button color="primary" variant="plain">
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
      </Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />

      <Text>Some text</Text>
    </div>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
