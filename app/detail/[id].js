import React from "react";
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEntries } from "../../src/context/EntriesContext";
import { COLORS, SPACE, RADIUS, TYPO } from "../../src/styles/tokens";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { getById, likedIds, toggleLike } = useEntries();
  const entry = getById(id);

  if (!entry) {
    return (
      <View style={styles.center}>
        <Text>Entri tidak ditemukan.</Text>
      </View>
    );
  }

  const liked = likedIds.has(entry.id);

  return (
    <>
      <Stack.Screen options={{ title: entry.title }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={entry.moodImage} style={styles.hero} resizeMode="cover" />
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.date}>{entry.date}</Text>
        <Text style={styles.body}>{entry.body}</Text>
        <Pressable onPress={() => toggleLike(entry.id)} style={styles.likeButton}>
          <Text style={styles.likeText}>{liked ? "Disukai" : "Suka"}</Text>
        </Pressable>
        <Pressable onPress={() => router.replace("/")} style={styles.homeButton}>
          <Text style={styles.homeText}>Kembali ke Home</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: SPACE.l, gap: SPACE.m },
  hero: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: RADIUS.card,
    backgroundColor: "#eef2ff",
  },
  title: { fontSize: 22, fontWeight: "700", color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted },
  body: { fontSize: TYPO.body, color: COLORS.text, lineHeight: 22 },
  likeButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    padding: SPACE.m,
    alignItems: "center",
  },
  likeText: { color: "#ef4444", fontWeight: "700" },
  homeButton: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.card,
    padding: SPACE.m,
    alignItems: "center",
  },
  homeText: { color: "#fff", fontWeight: "700" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
