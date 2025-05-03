

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';



export default function RootLayout() {
  return <GluestackUIProvider mode="light"><RootLayoutNav /></GluestackUIProvider>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (

    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>


  );

}
