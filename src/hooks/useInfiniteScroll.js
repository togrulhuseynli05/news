import { useEffect, useRef, useState } from "react";

const STEP = 4;

// items: bütün xəbərlərin massivi
// options.enabled: false olanda yükləmə (VIEW MORE və scroll) işləmir.
// API gələndə bunu true edəcəksiniz.
// Qaytarır: göstəriləcək xəbərlər, daha var?, yüklənir?, loadMore funksiyası
function useInfiniteScroll(items, { step = STEP, enabled = true } = {}) {
  const [visibleCount, setVisibleCount] = useState(step);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(false); // scroll zamanı təkrar çağırışın qarşısını almaq üçün
  const timerRef = useRef(null);

  // Tab dəyişəndə (yəni items dəyişəndə) sayğacı sıfırla
  useEffect(() => {
    setVisibleCount(step);
    setIsLoading(false);
    loadingRef.current = false;
    return () => clearTimeout(timerRef.current);
  }, [items, step]);

  const hasMore = visibleCount < items.length;

  const loadMore = () => {
    if (!enabled || loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      setVisibleCount((prev) => prev + step);
      setIsLoading(false);
      loadingRef.current = false;
    }, 600);
  };

  // Səhifənin sonuna yaxınlaşanda avtomatik yüklə (yalnız enabled olanda)
  useEffect(() => {
    if (!enabled) return undefined;

    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom) loadMore();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore,
    isLoading,
    loadMore,
  };
}

export default useInfiniteScroll;
