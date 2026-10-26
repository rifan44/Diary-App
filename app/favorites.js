import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import DiaryCard from "../src/components/DiaryCard";
import { useEntries } from "../src/context/EntriesContext";
import { COLORS, SPACE } from "../src/styles/tokens";

export default function FavoritesScreen() {
  const router = useRouter();
  const { entries, likedIds, toggleLike } = useEntries();
  const favorites = entries.filter((entry) => likedIds.has(entry.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text>Belum ada entri yang disukai.</Text>}
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            moodImage={item.moodImage}
            liked
            onToggleLike={() => toggleLike(item.id)}
            onPress={() =>
              router.push({ pathname: "/detail/[id]", params: { id: String(item.id) } })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  list: { padding: SPACE.l, gap: SPACE.m },
});
