import { ChevronDown } from 'lucide-react';
import { Link } from './Link';
import { useState } from 'react';

export interface NavItemProps {
  href: string;
  Icon: string;
  label: string;
  count?: number;
  children?: Omit<NavItemProps, 'children'>[];
}

export const NavItem = ({
  href,
  Icon,
  label,
  count,
  children,
}: NavItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li>
      <Link
        href={children ? '#' : href}
        onPress={
          children ? () => setOpen((prevState) => !prevState) : undefined
        }
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {Icon}
        </div>
        <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
        {count && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {count}
          </span>
        )}
        {children && (
          <ChevronDown
            className={`w-5 h-5 transition ${open ? 'rotate-180' : 'rotate-0'}`}
            aria-hidden="true"
          />
        )}
      </Link>
      {children && open && (
        <ul id="dropdown" className="py-2 space-y-2">
          {children.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
