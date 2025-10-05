import { Stack, Tabs } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
