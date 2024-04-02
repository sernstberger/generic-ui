import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { sheet } from './utils';

export interface SidebarProps {
  children: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
  color?: 'primary' | 'neutral' | 'destructive' | 'success' | 'warning';
  className?: string;
}

const sidebar = tv({
  base: twMerge(
    sheet.base,
    'fixed top-0 left-0 z-40 w-64 h-screen pt-20 px-3 pb-4 overflow-y-auto transition-transform -translate-x-full sm:translate-x-0'
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

export function Sidebar(props: SidebarProps) {
  return (
    <aside
      id="sidebar"
      aria-label="Sidebar"
      {...props}
      className={sidebar({
        variant: props.variant,
        color: props.color,
        className: props.className,
      })}
    >
      {props.children}
    </aside>
  );
}
