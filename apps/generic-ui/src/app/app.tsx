import { Heading, Text } from 'react-aria-components';
import { Button } from './Button';

export function App() {
  return (
    <div>
      <Billboard>
        <Button variant="destructive" onPress={() => alert('Hello world!')}>
          Save
        </Button>
      </Billboard>
      <Heading level={1}>Hello, world!</Heading>
      <Text>Some text</Text>
    </div>
  );
}

const Billboard = ({ children }: any) => {
  return <div className="flex p-8 bg-slate-500">{children}</div>;
};

export default App;
