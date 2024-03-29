export interface NavItemProps {
  href: string;
  svgPath: string;
  label: string;
  count?: number;
}

export const NavItem = ({ href, svgPath, label, count }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d={svgPath} />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
        {count && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {count}
          </span>
        )}
      </a>
    </li>
  );
};
