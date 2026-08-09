// Eager-loads whatever actually exists in assets/stock at build time, so a
// failed/skipped download doesn't break the build — components fall back to
// PlaceholderPhoto for any key that isn't present.
const modules = import.meta.glob<{ default: string }>("../assets/stock/*.{jpg,jpeg,png,webp}", {
  eager: true,
})

const stockImages: Record<string, string> = {}
for (const path in modules) {
  const name = path.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, "")
  if (name) stockImages[name] = modules[path].default
}

export function stockImage(key: string): string | undefined {
  return stockImages[key]
}
