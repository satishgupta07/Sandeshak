import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type Tab = 'login' | 'register';
type Props = { onLogin: () => void };

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity
      className={`flex-1 py-2.5 rounded-lg items-center ${active ? 'bg-white shadow' : ''}`}
      onPress={onPress}
    >
      <Text className={`font-semibold ${active ? 'text-indigo-600' : 'text-slate-500'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function AuthScreen({ onLogin }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('login');

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-slate-50"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center px-6 py-12"
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo / App name */}
        <View className="items-center mb-10">
          <View className="w-16 h-16 rounded-2xl bg-indigo-600 items-center justify-center mb-4">
            <Text className="text-white text-3xl font-bold">S</Text>
          </View>
          <Text className="text-3xl font-bold text-slate-800">Sandeshak</Text>
          <Text className="text-slate-500 mt-1">Stay connected, always.</Text>
        </View>

        {/* Tab switcher */}
        <View className="flex-row bg-slate-200 rounded-xl p-1 mb-8">
          <TabButton label="Login"    active={activeTab === 'login'}    onPress={() => setActiveTab('login')}    />
          <TabButton label="Register" active={activeTab === 'register'} onPress={() => setActiveTab('register')} />
        </View>

        {activeTab === 'login'
          ? <LoginForm onLogin={onLogin} />
          : <RegisterForm onLogin={onLogin} />
        }
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
