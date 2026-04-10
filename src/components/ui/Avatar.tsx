import { Text, View } from 'react-native';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  name: string;
  colorClass: string;
  size?: Size;
};

const sizeStyles: Record<Size, { container: string; text: string }> = {
  sm: { container: 'w-8 h-8',   text: 'text-xs' },
  md: { container: 'w-12 h-12', text: 'text-base' },
  lg: { container: 'w-16 h-16', text: 'text-xl' },
};

export default function Avatar({ name, colorClass, size = 'md' }: Props) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .slice(0, 2)
    .join('');
  const s = sizeStyles[size];
  return (
    <View className={`${s.container} rounded-full ${colorClass} items-center justify-center`}>
      <Text className={`text-white font-bold ${s.text}`}>{initials}</Text>
    </View>
  );
}
