import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const EntriesContext = createContext(null);

const INITIAL_ENTRIES = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2026-10-24",
    preview: "Jalan pagi 20 menit dan menikmati udara segar.",
    body: "Hari ini aku bangun lebih pagi dan berjalan kaki selama 20 menit.",
    moodImage: require("../../assets/moods/happy.png"),
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2026-10-23",
    preview: "Menyelesaikan modul praktikum dan berdiskusi dengan tim.",
    body: "Hari ini cukup produktif karena beberapa target perkuliahan selesai.",
    moodImage: require("../../assets/moods/focus.png"),
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2026-10-22",
    preview: "Membaca buku sambil menikmati suasana senja.",
    body: "Sore ini saya menikmati waktu di taman sambil membaca buku.",
    moodImage: require("../../assets/moods/calm.png"),
  },
];

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [likedIds, setLikedIds] = useState(new Set());

  const addEntry = (entry) => {
    setEntries((previous) => [{ id: Date.now(), ...entry }, ...previous]);
  };

  const getById = useCallback(
    (id) => entries.find((entry) => entry.id === Number(id)),
    [entries],
  );

  const toggleLike = (id) => {
    setLikedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const value = useMemo(
    () => ({ entries, addEntry, getById, likedIds, toggleLike }),
    [entries, getById, likedIds],
  );

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
}

export function useEntries() {
  const value = useContext(EntriesContext);
  if (!value) {
    throw new Error("useEntries harus berada di dalam EntriesProvider");
  }
  return value;
}
