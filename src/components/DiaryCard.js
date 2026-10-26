import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

export default function DiaryCard({
  title,
  date,
  preview,
  moodImage,
  liked = false,
  onPress = () => {},
  onToggleLike = () => {},
}) {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={onPress}
        style={styles.main}
        accessibilityLabel={`Buka entri ${title}`}
      >
        <Image source={moodImage} style={styles.mood} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={2}>
            {preview}
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={onToggleLike}
        style={styles.likeButton}
        accessibilityLabel={liked ? "Batal suka" : "Suka"}
      >
        <Text style={styles.like}>{liked ? "♥" : "♡"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    overflow: "hidden",
  },
  main: {
    flex: 1,
    flexDirection: "row",
    gap: SPACE.m,
    padding: SPACE.m,
    alignItems: "center",
  },
  mood: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.avatar,
    backgroundColor: "#eef2ff",
  },
  content: { flex: 1 },
  title: { fontSize: TYPO.title, fontWeight: "700", color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: 4 },
  preview: { fontSize: TYPO.body, color: COLORS.text },
  likeButton: { padding: SPACE.m },
  like: { fontSize: 26, color: "#ef4444" },
});
