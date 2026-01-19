import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make API calls, etc.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        // Hide the splash screen manually
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <>
      {appIsReady &&
        <View className="flex-1 items-center justify-center bg-blue-600">
          <Text className="text-3xl font-bold text-white">
            NativeWind is Working!
          </Text>
        </View>
      }
    </>
  );
}
