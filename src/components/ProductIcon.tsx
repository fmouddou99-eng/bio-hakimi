import {
  Leaf,
  Droplet,
  Flower2,
  Sun,
  SprayCan,
  Hand,
  Pill,
  Beaker,
  Sparkles,
  Sprout,
  Feather,
  Snowflake,
  type LucideIcon,
} from 'lucide-react';
import type { ProductIcon as IconKey } from '../types';

const ICONS: Record<IconKey, LucideIcon> = {
  leaf: Leaf,
  drop: Droplet,
  honey: Sun,
  flower: Flower2,
  cream: Sparkles,
  seed: Sprout,
  clay: Beaker,
  oil: Droplet,
  spray: SprayCan,
  balm: Feather,
  glove: Hand,
  powder: Beaker,
  pill: Pill,
  rose: Flower2,
  comb: Leaf,
  root: Sprout,
};

export function ProductIcon({
  icon,
  className,
}: {
  icon: IconKey;
  className?: string;
}) {
  const Cmp = ICONS[icon] ?? Leaf;
  return <Cmp className={className} strokeWidth={1.25} />;
}
