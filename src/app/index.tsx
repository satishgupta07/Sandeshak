import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import AuthScreen from '../components/auth/AuthScreen';
import ChatScreen from '../components/chat/ChatScreen';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appIsReady) return null;

  return isLoggedIn
    ? <ChatScreen onLogout={() => setIsLoggedIn(false)} />
    : <AuthScreen onLogin={() => setIsLoggedIn(true)} />;
}
