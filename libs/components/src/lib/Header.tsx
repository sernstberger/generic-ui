export interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <nav
      // className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      className="fixed top-0 z-50 w-full bg-white  dark:bg-gray-700"
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">{children}</div>
    </nav>
  );
};
