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
      <Sheet>aldskfjadslfjdsalfadslfj</Sheet>
      <Sheet color="destructive">aldskfjadslfjdsalfadslfj</Sheet>
      <Sheet color="success">aldskfjadslfjdsalfadslfj</Sheet>
      <Sheet color="secondary">aldskfjadslfjdsalfadslfj</Sheet>
      <Heading level={1}>Hello, world!</Heading>
      <Text>Some text</Text>
    </div>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
