import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { EntriesProvider } from "../src/context/EntriesContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <EntriesProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="detail/[id]" options={{ title: "Detail Diary" }} />
          <Stack.Screen name="favorites" options={{ title: "Favorites" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
        </Stack>
      </EntriesProvider>
    </SafeAreaProvider>
  );
}
