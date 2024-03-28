import { composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
// import { focusRing } from './utils';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  color?: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
}

interface Variant {
  variant: 'solid' | 'soft' | 'outlined' | 'plain';
  color: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
  class: string;
}

const createVariant = (
  variant: Variant['variant'],
  color: Variant['color'],
  bgColor: string,
  textColor: string
): Variant => {
  return {
    variant,
    color,
    class: `${bgColor} ${textColor}`,
  };
};

const createPlainVariant = (
  color: Variant['color'],
  bgColor: string,
  textColor: string
): Variant => {
  return createVariant('plain', color, bgColor, textColor);
};

const createOutlinedVariant = (
  color: Variant['color'],
  bgColor: string,
  textColor: string
): Variant => {
  return createVariant('outlined', color, bgColor, textColor);
};

const createSoftVariant = (
  color: Variant['color'],
  bgColor: string,
  textColor: string
): Variant => {
  return createVariant('soft', color, bgColor, textColor);
};

const createSolidVariant = (
  color: Variant['color'],
  bgColor: string
): Variant => {
  return createVariant('solid', color, bgColor, 'text-white');
};

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
    createPlainVariant('primary', 'bg-transparent', 'text-blue-600'),
    createPlainVariant('neutral', 'bg-transparent', 'text-gray-600'),
    createPlainVariant('destructive', 'bg-transparent', 'text-red-600'),
    createPlainVariant('success', 'bg-transparent', 'text-green-600'),
    createPlainVariant('warning', 'bg-transparent', 'text-yellow-600'),

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

    createSolidVariant('primary', 'bg-blue-600'),
    createSolidVariant('neutral', 'bg-gray-600'),
    createSolidVariant('destructive', 'bg-red-600'),
    createSolidVariant('success', 'bg-green-600'),
    createSolidVariant('warning', 'bg-yellow-600'),
  ],
});

export function Sheet({ children, className, variant, color }: SheetProps) {
  const newClassName: any = composeRenderProps(
    className,
    (className, renderProps) =>
      sheet({
        // ...renderProps,
        variant: variant,
        color: color,
        className,
      })
  );

  return <div className={newClassName()}>{children}</div>;
}
