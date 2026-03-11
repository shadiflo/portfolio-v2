export const categories = [
  { slug: 'frontend', label: 'Frontend', color: '#a855f7' },
  { slug: 'backend', label: 'Backend', color: '#ef4444' },
  { slug: 'gaming', label: 'Gaming & Tools', color: '#22c55e' },
  { slug: 'ai', label: 'AI & LLMs', color: '#3b82f6' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
