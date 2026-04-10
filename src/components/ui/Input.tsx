import { useState } from 'react';
import { View, TextInput, TextInputProps, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Text } from './Text';
import { cn } from '@/utils/cn';

// Derive the icon name type directly from the Ionicons component to stay in sync
// with the installed version, rather than duplicating a long string union manually.
type IoniconsName = ComponentProps<typeof Ionicons>['name'];

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string | null;
  leftIcon?: IoniconsName;
  containerClassName?: string;
}

export function Input({
  label,
  error,
  leftIcon,
  secureTextEntry,   // when passed, activates the show/hide toggle automatically
  className,
  containerClassName,
  ...props           // forwarded to TextInput: value, onChangeText, keyboardType, etc.
}: InputProps) {
  // `hidden` tracks whether the password text is currently obscured.
  // Seeded from `secureTextEntry` so passwords start hidden by default.
  // `??` (nullish coalescing) falls back to false only when the prop is undefined/null.
  const [hidden, setHidden] = useState(secureTextEntry ?? false);

  return (
    // Outer wrapper holds the label, input row, and error message as a vertical stack.
    <View className={cn('gap-1.5', containerClassName)}>
      {label ? <Text variant="label">{label}</Text> : null}

      {/* Input row — border turns red when there is an error */}
      <View
        className={cn(
          'flex-row items-center border rounded-xl px-3.5',
          error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50',
        )}
      >
        {/* Optional leading icon — tinted red to match the error border */}
        {leftIcon ? (
          <Ionicons
            name={leftIcon}
            size={18}
            color={error ? '#f87171' : '#9ca3af'}
            style={{ marginRight: 10 }}
          />
        ) : null}

        <TextInput
          className={cn('flex-1 py-3.5 text-base text-gray-900', className)}
          placeholderTextColor="#9ca3af"
          secureTextEntry={hidden}
          {...props}
        />

        {/* Eye toggle only renders when `secureTextEntry` was originally passed.
            hitSlop expands the tap area by 8pt around the small icon. */}
        {secureTextEntry ? (
          <Pressable onPress={() => setHidden(h => !h)} hitSlop={8}>
            <Ionicons
              name={hidden ? 'eye-outline' : 'eye-off-outline'}
              size={18}
              color="#9ca3af"
            />
          </Pressable>
        ) : null}
      </View>

      {/* Inline error message shown directly below the field */}
      {error ? (
        <Text variant="caption" className="text-red-500">{error}</Text>
      ) : null}
    </View>
  );
}
