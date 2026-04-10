import { Text as RNText, TextProps } from 'react-native';
import { cn } from '@/utils/cn';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'caption' | 'muted';

// Semantic variant → Tailwind class mapping.
// Keeps typography consistent across the app without repeating class strings.
const variantStyles: Record<TextVariant, string> = {
  h1:      'text-4xl font-bold text-gray-900',
  h2:      'text-2xl font-bold text-gray-900',
  h3:      'text-lg font-semibold text-gray-800',
  body:    'text-base text-gray-900',
  label:   'text-sm font-medium text-gray-700',
  caption: 'text-xs text-gray-500',
  muted:   'text-base text-gray-500',
};

export interface CustomTextProps extends TextProps {
  variant?: TextVariant;
  className?: string;
}

// `className` is merged via twMerge (inside `cn`), so it overrides any conflicting
// classes from the variant — e.g. <Text variant="h1" className="text-white"> works correctly.
export function Text({ variant = 'body', className, children, ...props }: CustomTextProps) {
  return (
    <RNText className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </RNText>
  );
}
