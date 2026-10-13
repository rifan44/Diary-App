import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import DiaryCard from "../components/DiaryCard";
import DiaryDetailModal from "../components/DiaryDetailModal";
import { COLORS, SPACE, TYPO, BREAKPOINTS } from "../styles/tokens";

// Data lengkap dengan 2 tambahan untuk tugas akhir
const DATA = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2025-10-06",
    preview: "Bangun lebih pagi dan menyeduh kopi...",
    body: "Catatan lengkap: Hari ini saya bangun jam 5 pagi, menyeduh kopi, dan menikmati udara segar sebelum mulai mengerjakan tugas kuliah. Rasanya sangat menenangkan.",
    moodUri: "https://picsum.photos/seed/happy/200",
    heroUri: "https://picsum.photos/seed/happyhero/800/450",
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2025-10-05",
    preview: "Menyelesaikan modul dan laporan...",
    body: "Catatan lengkap: Kemajuan proyek hari ini cukup pesat. Berhasil menyelesaikan modul praktikum dan menyusun laporan bersama teman-teman kelompok di perpustakaan.",
    moodUri: "https://picsum.photos/seed/focus/200",
    heroUri: "https://picsum.photos/seed/focushero/800/450",
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2025-10-04",
    preview: "Membaca buku di bawah pohon...",
    body: "Catatan lengkap: Menghabiskan waktu sore dengan membaca buku di taman kota. Refleksi singkat tentang apa yang sudah dicapai minggu ini.",
    moodUri: "https://picsum.photos/seed/calm/200",
    heroUri: "https://picsum.photos/seed/calmhero/800/450",
  },
  {
    id: 4,
    title: "Eksplorasi React Native",
    date: "2026-10-12",
    preview: "Mencoba membuat layout dua kolom...",
    body: "Catatan lengkap: Hari ini lumayan menantang karena harus mengatur layout responsif. Tapi seru melihat aplikasi perlahan mulai terlihat rapi ketika beralih dari satu kolom ke dua kolom.",
    moodUri: "https://picsum.photos/seed/code/200",
    heroUri: "https://picsum.photos/seed/codehero/800/450",
  },
  {
    id: 5,
    title: "Hujan Deras Malam Hari",
    date: "2026-10-13",
    preview: "Suasana dingin cocok untuk coding...",
    body: "Catatan lengkap: Hujan turun sangat deras malam ini. Suasana dingin begini ternyata sangat mendukung untuk fokus memperbaiki bug dan merapikan StyleSheet aplikasi.",
    moodUri: "https://picsum.photos/seed/rain/200",
    heroUri: "https://picsum.photos/seed/rainhero/800/450",
  },
];

export default function DiaryListScreen() {
  // Mendeteksi lebar layar dan menentukan jumlah kolom
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;

  // State untuk menyimpan item mana yang sedang dipilih/diklik
  const [selected, setSelected] = useState(null);

  // Kunci unik agar FlatList dibuat ulang saat pindah dari 1 ke 2 kolom (atau sebaliknya)
  const keyForCols = useMemo(() => (twoCols ? "grid2" : "list1"), [twoCols]);

  // Fungsi untuk me-render setiap kartu
  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? "grid" : "list"}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        // Memberi jarak antar kolom HANYA jika dalam mode 2 kolom
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />

      {/* Modal Detail akan muncul jika 'selected' tidak bernilai null */}
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: "700",
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: {
    flex: 1,
  },
  // Mengatur lebar item menjadi 50% (setengah bagian) jika dalam mode 2 kolom
  itemWrap2: {
    flex: 1 / 2,
  },
  empty: {
    textAlign: "center",
    color: COLORS.muted,
    marginTop: 40,
  },
});
