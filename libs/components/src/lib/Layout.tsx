// import { View, Grid } from '@adobe/react-spectrum';
import { NavItem } from './NavItem';
import { Header } from './Header';

import {
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Separator,
} from 'react-aria-components';
import type { MenuItemProps } from 'react-aria-components';
import RailIcon from '@spectrum-icons/workflow/Rail';
import { Logo } from './Logo';
import { Button } from './Button';

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
      <Header>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
              <Logo />
            </a>
          </div>

          <div className="flex items-center">
            <MenuExample />
          </div>
        </div>
      </Header>

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

function MenuExample() {
  return (
    <MenuTrigger>
      <Button
        aria-label="Menu"
        // className="inline-flex items-center justify-center rounded-md bg-black bg-opacity-20 bg-clip-padding border border-white/20 px-3 py-2 text-white hover:bg-opacity-30 pressed:bg-opacity-40 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        variant="outlined"
        className="p-0"
      >
        {/* <RailIcon size="S" /> */}

        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
        />
      </Button>
      <Popover className="p-1 w-56 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards origin-top-left">
        <Menu className="outline-none">
          <ActionItem id="new">New…</ActionItem>
          <ActionItem id="open">Open…</ActionItem>
          <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
          <ActionItem id="save">Save</ActionItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

function ActionItem(props: MenuItemProps) {
  return (
    <MenuItem
      {...props}
      className="group flex w-full items-center rounded-md px-3 py-2 box-border outline-none cursor-default text-gray-900 focus:bg-violet-500 focus:text-white"
    />
  );
}
