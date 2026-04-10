import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Variant = 'primary' | 'muted';

type Props = TouchableOpacityProps & {
  children: ReactNode;
  variant?: Variant;
};

const containerStyles: Record<Variant, string> = {
  primary: 'bg-indigo-600 rounded-full w-9 h-9 items-center justify-center',
  muted:   'bg-slate-100 rounded-full w-9 h-9 items-center justify-center',
};

export default function IconButton({ children, variant = 'primary', ...props }: Props) {
  return (
    <TouchableOpacity className={containerStyles[variant]} {...props}>
      {children}
    </TouchableOpacity>
  );
}
