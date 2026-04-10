import { Text, TextInput, View } from 'react-native';

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function SearchBar({ placeholder = 'Search', value, onChangeText }: Props) {
  return (
    <View className="bg-slate-100 rounded-xl flex-row items-center px-3 py-2.5">
      <Text className="text-slate-400 mr-2">&#x2315;</Text>
      <TextInput
        className="flex-1 text-slate-800 text-sm"
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
