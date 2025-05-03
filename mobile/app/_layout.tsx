

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


const loggedIn = false;
export default function RootLayout() {
  return <GluestackUIProvider mode="light">
    <SafeAreaProvider>
      <RootLayoutNav />
    </SafeAreaProvider>
  </GluestackUIProvider>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (


    <Stack>
      <Stack.Screen name="(logged-in)" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" />
    </Stack>



  );

}
