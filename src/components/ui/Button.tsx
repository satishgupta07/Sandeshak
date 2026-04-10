import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Variant = 'primary' | 'secondary';

type Props = TouchableOpacityProps & {
  label: string;
  variant?: Variant;
};

const variantStyles: Record<Variant, { container: string; label: string }> = {
  primary:   { container: 'bg-indigo-600 rounded-xl py-4 items-center', label: 'text-white font-bold text-base' },
  secondary: { container: 'bg-slate-100 rounded-xl py-4 items-center',  label: 'text-slate-700 font-bold text-base' },
};

export default function Button({ label, variant = 'primary', ...props }: Props) {
  const s = variantStyles[variant];
  return (
    <TouchableOpacity className={s.container} {...props}>
      <Text className={s.label}>{label}</Text>
    </TouchableOpacity>
  );
}
