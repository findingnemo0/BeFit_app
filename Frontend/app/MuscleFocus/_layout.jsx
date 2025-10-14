import { Stack } from "expo-router";
import React from "react";

export default function MuscleFocusLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="muscleFocusScreen" />
    </Stack>
  );
}
