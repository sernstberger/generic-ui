import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
// import { focusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  color?: 'primary' | 'secondary' | 'destructive' | 'success' | 'warning';
}

const sheet = tv({
  // extend: focusRing,
  base: 'px-5 py-2 text-sm text-center transition border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default',
  variants: {
    color: {
      primary: 'bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white',
      secondary:
        'bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100',
      destructive: 'bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white',
      success:
        'bg-green-700 hover:bg-green-800 pressed:bg-green-900 text-white',
      warning:
        'bg-yellow-700 hover:bg-yellow-800 pressed:bg-yellow-900 text-white',
      // icon: 'border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent',
    },
    isDisabled: {
      true: 'bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5',
    },
  },
  defaultVariants: {
    variant: 'plain',
    color: 'primary',
  },
});

export function Sheet(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        sheet({
          ...renderProps,
          // variant: props.variant,
          color: props.color,
          className,
        })
      )}
    />
  );
}
