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
import { Sidebar } from './Sidebar';
import { Nut } from 'lucide-react';

export interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    href: '#',
    Icon: <Nut />,
    label: 'Inbox',
    count: 3,
  },
  {
    href: '#',
    Icon: <Nut />,
    label: 'Users',
    children: [
      {
        href: '#',
        label: 'Add user',
      },
      {
        href: '#',
        label: 'Manage users',
      },
    ],
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
      <Header variant="solid" color="primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="sidebar"
              data-drawer-toggle="sidebar"
              aria-controls="sidebar"
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
            <a href="/" className="flex ms-2 md:me-24">
              <Logo />
            </a>
          </div>

          <div className="flex items-center">
            <UserMenu />
          </div>
        </div>
      </Header>

      <Sidebar>
        <ul className="space-y-2 font-medium">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </Sidebar>

      <div className="pt-14 sm:ml-64">{children}</div>
    </div>
  );
};

function UserMenu() {
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
          alt="user"
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
