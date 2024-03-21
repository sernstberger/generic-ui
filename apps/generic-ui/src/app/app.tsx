import { Heading, Text } from 'react-aria-components';
import { Button, Sheet } from '@generic/components';

export function App() {
  return (
    <div>
      <Billboard>
        <Button variant="primary" onPress={() => alert('Hello world!')}>
          Save
        </Button>
      </Billboard>

      <Heading level={1}>Plain</Heading>
      <Sheet color="primary" variant="plain">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="neutral" variant="plain">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="destructive" variant="plain">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="success" variant="plain">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="warning" variant="plain">
        aldskfjadslfjdsalfadslfj
      </Sheet>

      <br />

      <Heading level={1}>Outlined</Heading>
      <Sheet color="primary" variant="outlined">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="neutral" variant="outlined">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="destructive" variant="outlined">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="success" variant="outlined">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="warning" variant="outlined">
        aldskfjadslfjdsalfadslfj
      </Sheet>

      <br />

      <Heading level={1}>Soft</Heading>
      <Sheet color="primary" variant="soft">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="neutral" variant="soft">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="destructive" variant="soft">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="success" variant="soft">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="warning" variant="soft">
        aldskfjadslfjdsalfadslfj
      </Sheet>

      <br />

      <Heading level={1}>Solid</Heading>
      <Sheet color="primary" variant="solid">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="neutral" variant="solid">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="destructive" variant="solid">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="success" variant="solid">
        aldskfjadslfjdsalfadslfj
      </Sheet>
      <Sheet color="warning" variant="solid">
        aldskfjadslfjdsalfadslfj
      </Sheet>

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
