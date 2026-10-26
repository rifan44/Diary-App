import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <Text>Halaman ini dapat dikembangkan pada praktikum berikutnya.</Text>
      <Pressable onPress={() => router.push("/favorites")} style={styles.button}>
        <Text style={styles.buttonText}>Buka Favorites</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/about")} style={styles.button}>
        <Text style={styles.buttonText}>Buka About</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  button: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
