import { useEffect, useState } from "react";

// Ana səhifə və detay səhifəsi eyni açarı istifadə edir (sinxronizasiya üçün)
const STORAGE_KEY = "sv_bookmarks";

// localStorage-dan oxuyuruq. Xəta olsa boş massiv qaytarırıq.
function readBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

// Custom hook: bookmark siyahısını idarə edir
function useBookmark() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Komponent açılanda localStorage-dan oxu (səhifə yenilənəndə də qalır)
    const sync = () => setBookmarks(readBookmarks());
    sync();

    // Başqa səhifədə / pəncərədə dəyişiklik olanda yenilə
    window.addEventListener("bookmarks-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("bookmarks-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // Bu xəbər yadda saxlanılıbmı?
  const isBookmarked = (id) => bookmarks.includes(id);

  // Varsa sil, yoxdursa əlavə et
  const toggleBookmark = (id) => {
    const current = readBookmarks();
    const updated = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("bookmarks-changed"));
  };

  return { isBookmarked, toggleBookmark };
}

export default useBookmark;
