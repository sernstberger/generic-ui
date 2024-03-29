// import { View, Grid } from '@adobe/react-spectrum';
import { NavItem } from './NavItem';
import { Header } from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    href: '#',
    svgPath:
      'm17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z',
    label: 'Inbox',
    count: 3,
  },
  {
    href: '#',
    svgPath:
      'M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z',
    label: 'Users',
  },
  // Add more items as needed
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    // <Grid
    //   // areas={['header  header', 'sidebar content', 'footer  footer']}
    //   areas={['header  header', 'sidebar content']}
    //   columns={[240, '3fr']}
    //   // rows={['size-1000', 'auto', 'size-1000']}
    //   rows={['size-1000', 'auto']}
    //   height="100vh"
    // >
    //   <View backgroundColor="gray-50" gridArea="header" />
    //   <View backgroundColor="gray-500" gridArea="sidebar" overflow="scroll">
    //     <ul>
    //       <li>asldkfjdasf</li>
    //       <li>asldkjfasf</li>
    //       <li>asldkfjdasf</li>
    //     </ul>
    //   </View>
    //   <View gridArea="content" overflow="scroll" backgroundColor="gray-100">
    //     {children}
    //   </View>
    //   {/* <View backgroundColor="magenta-600" gridArea="footer" /> */}
    // </Grid>

    <div>
      <Header />

      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </aside>

      <div className="pt-14 sm:ml-64">{children}</div>
    </div>
  );
};
