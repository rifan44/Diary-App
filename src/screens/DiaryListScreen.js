import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

// Import gambar lokal dari folder assets/moods
const localMoodImage = require("../../assets/moods/happy.png");
const localAvatarImage = require("../../assets/moods/avatar.png");

const diaryEntries = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2025-10-06",
    preview:
      "Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...",
    moodUri: "https://picsum.photos/seed/happy/80",
    moodColor: "#4ade80", // Warna border: Hijau
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2025-10-05",
    preview:
      "Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...",
    moodUri: "https://picsum.photos/seed/focus/80",
    moodColor: "#3b82f6", // Warna border: Biru
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2025-10-04",
    preview:
      "Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...",
    moodUri: "https://picsum.photos/seed/calm/80",
    moodColor: "#f59e0b", // Warna border: Oranye
  },
  // --- Tugas 1: Tambahkan 2 entri baru ---
  {
    id: 4,
    title: "Belajar React Native",
    date: "2025-10-03",
    preview:
      "Mengerjakan tugas praktikum tambahan. Seru belajar layouting pakai Flexbox!",
    isLocalImage: true, // Penanda untuk menggunakan gambar lokal (Tugas 2)
    moodColor: "#ec4899", // Warna border: Pink
  },
  {
    id: 5,
    title: "Makan Malam Bersama",
    date: "2025-10-02",
    preview:
      "Makan malam bareng teman-teman setelah seharian lelah beraktivitas di kampus.",
    moodUri: "https://picsum.photos/seed/dinner/80",
    moodColor: "#8b5cf6", // Warna border: Ungu
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Tugas 3: Tambahkan avatar pengguna pada header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image source={localAvatarImage} style={styles.avatar} />
      </View>

      {diaryEntries.map((entry) => (
        <View
          key={entry.id}
          /* Tugas 4: Variasi border berdasarkan mood di dalam array data */
          style={[styles.card, { borderColor: entry.moodColor }]}
        >
          <Image
            // Jika isLocalImage bernilai true, pakai localMoodImage. Jika tidak, pakai moodUri dari internet.
            source={
              entry.isLocalImage ? localMoodImage : { uri: entry.moodUri }
            }
            style={styles.mood}
          />

          <View style={styles.cardContent}>
            <Text style={styles.title} numberOfLines={1}>
              {entry.title}
            </Text>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
              {entry.preview}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
  },
  avatar: {
    width: 44, // Target ukuran aksesibilitas yang baik menurut modul
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  card: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    borderWidth: 2, // Diperbesar menjadi 2 agar variasi warnanya lebih terlihat jelas
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});
