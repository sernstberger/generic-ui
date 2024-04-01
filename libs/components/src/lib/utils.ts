import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2',
    },
  },
});

export const size = tv({
  base: '',
  variants: {
    size: {
      sm: 'px-2 text-sm rounded',
      md: 'px-4 text-base rounded-md',
      lg: 'px-6 text-lg rounded-lg',
      xl: 'px-8 text-xl rounded-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

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

export const sheet = tv({
  base: 'p-5 text-sm',
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

// export function Sheet(props: ButtonProps) {
//   return (
//     <RACButton
//       {...props}
//       className={composeRenderProps(props.className, (className, renderProps) =>
//         sheet({
//           ...renderProps,
//           variant: props.variant,
//           color: props.color,
//           className,
//         })
//       )}
//     />
//   );
// }

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
