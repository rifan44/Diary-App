import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import DiaryCard from "../../src/components/DiaryCard";
import { useEntries } from "../../src/context/EntriesContext";
import { COLORS, SPACE, TYPO } from "../../src/styles/tokens";

export default function HomeScreen() {
  const router = useRouter();
  const { entries, likedIds, toggleLike } = useEntries();
  const [query, setQuery] = useState("");

  const data = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return entries;
    return entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(normalizedQuery) ||
        entry.preview.toLowerCase().includes(normalizedQuery) ||
        entry.date.toLowerCase().includes(normalizedQuery),
    );
  }, [entries, query]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Cari entri..."
        style={styles.search}
        accessibilityLabel="Kolom pencarian"
      />
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text>Belum ada entri.</Text>}
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            moodImage={item.moodImage}
            liked={likedIds.has(item.id)}
            onToggleLike={() => toggleLike(item.id)}
            onPress={() =>
              router.push({
                pathname: "/detail/[id]",
                params: { id: String(item.id) },
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACE.l, backgroundColor: COLORS.surface },
  header: {
    fontSize: TYPO.h1,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  search: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 10,
    marginBottom: SPACE.m,
  },
  list: { gap: SPACE.m, paddingBottom: SPACE.xl },
});
