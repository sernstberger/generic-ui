import React from 'react';
// import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { sheet } from './utils';

export interface HeaderProps {
  children: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
  color?: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
  className?: string;
}

const header = tv({
  base: twMerge(
    sheet.base,
    // 'px-5 py-2 text-sm text-center items-center transition rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default flex'
    'fixed top-0 z-50 w-full'
  ),
  variants: {
    variant: sheet.variants.variant,
    color: sheet.variants.color,
  },

  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
  },

  compoundVariants: sheet.compoundVariants,
});

export function Header(props: HeaderProps) {
  return (
    // <div
    //   {...props}
    //   className={composeRenderProps(props.className, (className, renderProps) =>
    //     header({
    //       ...renderProps,
    //       variant: props.variant,
    //       color: props.color,
    //       className,
    //     })
    //   )}
    // >
    //   {props.children}
    // </div>
    <header
      {...props}
      className={header({
        variant: props.variant,
        color: props.color,
        className: props.className,
      })}
    >
      {props.children}
    </header>

    //     <nav
    //       // className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    //       className="fixed top-0 z-50 w-full bg-white  dark:bg-gray-700"
    //     >
    //       <div className="px-3 py-3 lg:px-5 lg:pl-3">{children}</div>
    //     </nav>
  );
}
