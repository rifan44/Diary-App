import React from "react";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const tabIcons = {
  index: "home-outline",
  create: "plus-circle-outline",
  settings: "cog-outline",
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2563EB",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name={tabIcons[route.name]}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="create" options={{ title: "Tambah" }} />
      <Tabs.Screen name="settings" options={{ title: "Pengaturan" }} />
    </Tabs>
  );
}
