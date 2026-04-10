import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../ui/Button';

type Props = { onLogin: () => void };

export default function LoginForm({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="gap-4">
      <View>
        <Text className="text-sm font-medium text-slate-700 mb-1.5">Email</Text>
        <TextInput
          className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800"
          placeholder="you@example.com"
          placeholderTextColor="#94a3b8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Text className="text-sm font-medium text-slate-700 mb-1.5">Password</Text>
        <TextInput
          className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800"
          placeholder="••••••••"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity className="self-end -mt-1">
        <Text className="text-sm text-indigo-600 font-medium">Forgot password?</Text>
      </TouchableOpacity>
      <Button label="Login" onPress={onLogin} />
    </View>
  );
}
