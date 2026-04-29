import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");

      if (stored) {
        setFavorites(JSON.parse(stored));
      } else {
        setFavorites([]);
      }
    } catch (e) {
      console.log("LocalStorage error:", e);
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      let updated;

      if (prev.some((p) => p.id === pokemon.id)) {
        updated = prev.filter((p) => p.id !== pokemon.id);
      } else {
        updated = [...prev, pokemon];
      }

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return { favorites, toggleFavorite };
}