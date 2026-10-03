export function Icon({ d, size = 18, viewBox = '0 0 24 24', fill = 'none', stroke = 'currentColor', strokeWidth = 1.8, ...rest }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d={d} />
    </svg>
  )
}

export const SearchIcon = (p) => <Icon d="M11 4a7 7 0 1 0 4.9 12l3.6 3.6" {...p} />
export const CartIcon = (p) => (
  <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 6h15l-1.5 8h-12z" />
    <path d="M6 6 5 3H2" />
    <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)
export const StarIcon = ({ size = 18, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z" strokeLinejoin="round" />
  </svg>
)
export const CheckIcon = (p) => <Icon d="M4 12.5l5 5L20 6.5" {...p} />
export const PlayIcon = (p) => (
  <svg width={p.size ?? 36} height={p.size ?? 36} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
)
export const FilterIcon = (p) => <Icon d="M4 6h16M7 12h10M10 18h4" {...p} />
export const LevelIcon = (p) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
    <path d="M5 19v-6M11 19V9M17 19V5" />
  </svg>
)
export const GridIcon = (p) => <Icon d="M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z" {...p} />
export const SortIcon = (p) => <Icon d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3" {...p} />
export const ShareIcon = (p) => <Icon d="M12 3v12M8 7l4-4 4 4M5 12v8h14v-8" {...p} />
export const UsersIcon = (p) => <Icon d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M16 10.5a3 3 0 1 0-2-5.2M18 14.5v1a4 4 0 0 1-3 3.9" {...p} />
export const ClockIcon = (p) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)
export const ChatIcon = (p) => <Icon d="M4 6h16v10H9l-5 4z" {...p} />
export const BookIcon = (p) => <Icon d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13" {...p} />
export const AwardIcon = (p) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" />
  </svg>
)
export const MailIcon = (p) => <Icon d="M3 6h18v12H3zM3 7l9 6 9-6" {...p} />
