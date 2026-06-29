const modules = import.meta.glob("../assets/profile/*.{jpg,jpeg,png,webp,svg,gif,jfif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const allImages = Object.values(modules);
allImages.sort();

let currentIndex = 0;
const callbacks = new Set();

export function getCurrentImage() {
  return allImages.length > 0 ? allImages[currentIndex] : null;
}

export function subscribe(cb) {
  callbacks.add(cb);
  return () => callbacks.delete(cb);
}

function tick() {
  if (allImages.length === 0) return;
  currentIndex = (currentIndex + 1) % allImages.length;
  const img = allImages[currentIndex];
  callbacks.forEach((cb) => cb(img));
}

if (typeof window !== "undefined") {
  const id = setInterval(tick, 3000);
  if (import.meta.hot) {
    import.meta.hot.dispose(() => clearInterval(id));
  }
}
