import { View, Grid } from '@adobe/react-spectrum';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      // areas={['header  header', 'sidebar content', 'footer  footer']}
      areas={['header  header', 'sidebar content']}
      columns={[240, '3fr']}
      // rows={['size-1000', 'auto', 'size-1000']}
      rows={['size-1000', 'auto']}
      height="100vh"
    >
      <View backgroundColor="gray-50" gridArea="header" />
      <View backgroundColor="gray-500" gridArea="sidebar" overflow="scroll">
        <ul>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
          <li>asldkjfasf</li>
          <li>asldkfjdasf</li>
        </ul>
      </View>
      <View gridArea="content" overflow="scroll" backgroundColor="gray-100">
        {children}
      </View>
      {/* <View backgroundColor="magenta-600" gridArea="footer" /> */}
    </Grid>
  );
};
