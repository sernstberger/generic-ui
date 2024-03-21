import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
// import { focusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  color?: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
}

function createPlainVariant(
  color: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning',
  bgColor: any,
  textColor: any
): any {
  return {
    variant: 'plain',
    color: color,
    class: `${bgColor} ${textColor}`,
  };
}

function createOutlinedVariant(
  color: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning',
  borderColor: any,
  textColor: any
): any {
  return {
    variant: 'outlined',
    color: color,
    class: `${borderColor} ${textColor}`,
  };
}

function createSoftVariant(
  color: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning',
  bgColor: any,
  textColor: any
): any {
  return {
    variant: 'soft',
    color: color,
    class: `${bgColor} ${textColor}`,
  };
}

function createSolidVariant(
  color: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning',
  bgColor: any,
  textColor: any
): any {
  return {
    variant: 'solid',
    color: color,
    class: `${bgColor} ${textColor}`,
  };
}

const sheet = tv({
  base: 'p-2',
  // base: 'px-5 py-2 text-sm text-center transition border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default',
  variants: {
    color: {
      primary: '',
      neutral: '',
      destructive: '',
      success: '',
      warning: '',
    },
    variant: {
      // plain: 'bg-transparent',
      plain: '',
      outlined: 'border',
      soft: '',
      solid: '',
    },
  },
  defaultVariants: {
    variant: 'plain',
    color: 'primary',
  },

  compoundVariants: [
    createPlainVariant('primary', 'bg-blue-50', 'text-blue-600'),
    createPlainVariant('neutral', 'bg-gray-50', 'text-gray-600'),
    createPlainVariant('destructive', 'bg-red-50', 'text-red-600'),
    createPlainVariant('success', 'bg-green-50', 'text-green-600'),
    createPlainVariant('warning', 'bg-yellow-50', 'text-yellow-600'),

    createOutlinedVariant('primary', 'border-blue-600', 'text-blue-600'),
    createOutlinedVariant('neutral', 'border-gray-600', 'text-gray-600'),
    createOutlinedVariant('destructive', 'border-red-600', 'text-red-600'),
    createOutlinedVariant('success', 'border-green-600', 'text-green-600'),
    createOutlinedVariant('warning', 'border-yellow-600', 'text-yellow-600'),

    createSoftVariant('primary', 'bg-blue-100', 'text-blue-900'),
    createSoftVariant('neutral', 'bg-gray-100', 'text-gray-900'),
    createSoftVariant('destructive', 'bg-red-100', 'text-red-900'),
    createSoftVariant('success', 'bg-green-100', 'text-green-900'),
    createSoftVariant('warning', 'bg-yellow-100', 'text-yellow-900'),

    createSolidVariant('primary', 'bg-blue-600', 'text-blue-900'),
    createSolidVariant('neutral', 'bg-gray-600', 'text-gray-900'),
    createSolidVariant('destructive', 'bg-red-600', 'text-red-900'),
    createSolidVariant('success', 'bg-green-600', 'text-green-900'),
    createSolidVariant('warning', 'bg-yellow-600', 'text-yellow-900'),
  ],
});

export function Sheet(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        sheet({
          ...renderProps,
          variant: props.variant,
          color: props.color,
          className,
        })
      )}
    />
  );
}
