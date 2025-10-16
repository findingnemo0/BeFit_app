import { Stack, Tabs, SplashScreen } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/font/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/font/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("../assets/font/Montserrat-SemiBold.ttf"),
  });

  // Prevent rendering until fonts are ready
  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Equipment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Exercise"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MuscleFocus"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
