import { Stack } from "expo-router";
import React from "react";

export default function ExerciseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="exerciseDetail" />
    </Stack>
  );
}
