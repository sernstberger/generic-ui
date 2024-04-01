import React from 'react';
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { focusRing, sheet, size } from './utils';

export interface ButtonProps extends RACButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
  color?: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
  startIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const button = tv({
  extend: [focusRing, size],
  base: twMerge(
    sheet.base,
    'px-5 py-2 text-sm text-center items-center transition rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default flex'
    // 'px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default'
  ),
  variants: {
    variant: sheet.variants.variant,
    color: sheet.variants.color,
    size: size.variants.size,
    startIcon: 'text-sm mr-2',
    // variant: {
    //   primary: 'bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white',
    //   secondary:
    //     'bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100',
    //   destructive: 'bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white',
    //   icon: 'border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent',
    // },
    isDisabled: {
      true: 'bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5',
    },
  },

  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
    startIcon: undefined,
    size: 'md',
  },

  compoundVariants: sheet.compoundVariants,
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({
          ...renderProps,
          variant: props.variant,
          color: props.color,
          size: props.size,
          // startIcon: props.startIcon,
          className,
        })
      )}
    >
      {/* {props.startIcon && <span className="h-2 w-2">{props.startIcon}</span>} */}
      {React.isValidElement(props.startIcon) && (
        <>
          {React.cloneElement(props.startIcon as React.ReactElement<any>, {
            className: `${button.variants.startIcon} h-4 w-4`,
          })}
        </>
      )}
      {props.children}
    </RACButton>
  );
}
