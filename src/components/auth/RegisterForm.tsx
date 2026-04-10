import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from '../ui/Button';

type Props = { onLogin: () => void };

export default function RegisterForm({ onLogin }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="gap-4">
      <View>
        <Text className="text-sm font-medium text-slate-700 mb-1.5">Full Name</Text>
        <TextInput
          className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800"
          placeholder="John Doe"
          placeholderTextColor="#94a3b8"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
      </View>
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
      <View>
        <Text className="text-sm font-medium text-slate-700 mb-1.5">Confirm Password</Text>
        <TextInput
          className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800"
          placeholder="••••••••"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <Button label="Create Account" onPress={onLogin} />
    </View>
  );
}
