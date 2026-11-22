import type { ProjectDeliverable } from '../data/portfolio'

interface EditorialFigureProps {
  aspect?: ProjectDeliverable['aspect']
  motif?: ProjectDeliverable['motif']
  figureLabel?: string
  caption?: string
  imageSrc?: string
  alt?: string
  className?: string
  tone?: 'ivory' | 'charcoal' | 'burgundy'
}

const aspectClassMap: Record<ProjectDeliverable['aspect'], string> = {
  '16/10': 'aspect-[16/10]',
  '4/5': 'aspect-[4/5]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '21/9': 'aspect-[21/9]',
}

function MotifArtwork({
  motif,
  tone,
}: {
  motif: ProjectDeliverable['motif']
  tone: 'ivory' | 'charcoal' | 'burgundy'
}) {
  const stroke =
    tone === 'charcoal'
      ? 'rgba(246, 243, 236, 0.28)'
      : tone === 'burgundy'
        ? 'rgba(251, 249, 244, 0.34)'
        : 'rgba(20, 20, 19, 0.22)'
  const accentStroke =
    tone === 'charcoal'
      ? '#D98A94'
      : tone === 'burgundy'
        ? '#F6F3EC'
        : '#7B1E2B'

  switch (motif) {
    case 'network':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <line x1="70" y1="70" x2="195" y2="120" stroke={stroke} strokeWidth="1" />
          <line x1="195" y1="120" x2="315" y2="65" stroke={stroke} strokeWidth="1" />
          <line x1="195" y1="120" x2="295" y2="195" stroke={stroke} strokeWidth="1" />
          <line x1="70" y1="70" x2="115" y2="195" stroke={stroke} strokeWidth="1" />
          <line x1="115" y1="195" x2="295" y2="195" stroke={stroke} strokeWidth="1" />
          <line x1="195" y1="120" x2="115" y2="195" stroke={accentStroke} strokeWidth="1.2" />
          <circle cx="195" cy="120" r="36" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="70" cy="70" r="5" fill={accentStroke} />
          <circle cx="195" cy="120" r="7" fill={accentStroke} />
          <circle cx="315" cy="65" r="4" stroke={stroke} strokeWidth="1.5" />
          <circle cx="295" cy="195" r="5" stroke={stroke} strokeWidth="1.5" />
          <circle cx="115" cy="195" r="4" fill={stroke} />
        </svg>
      )
    case 'discourse':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <rect x="44" y="42" width="142" height="176" stroke={stroke} strokeWidth="1" />
          <rect x="214" y="42" width="142" height="104" stroke={accentStroke} strokeWidth="1.2" />
          <line x1="214" y1="170" x2="356" y2="170" stroke={stroke} strokeWidth="1" />
          <line x1="214" y1="192" x2="318" y2="192" stroke={stroke} strokeWidth="1" />
          <line x1="214" y1="214" x2="280" y2="214" stroke={stroke} strokeWidth="1" />
          <line x1="44" y1="42" x2="186" y2="218" stroke={stroke} strokeWidth="0.75" />
        </svg>
      )
    case 'campaign':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <circle cx="200" cy="130" r="82" stroke={stroke} strokeWidth="1" />
          <circle cx="200" cy="130" r="48" stroke={accentStroke} strokeWidth="1.2" />
          <line x1="40" y1="130" x2="360" y2="130" stroke={stroke} strokeWidth="1" />
          <line x1="200" y1="24" x2="200" y2="236" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'esg':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <path d="M50 185 C 125 90, 225 90, 350 185" stroke={accentStroke} strokeWidth="1.2" />
          <path d="M50 155 C 140 65, 250 65, 350 155" stroke={stroke} strokeWidth="1" />
          <path d="M50 210 L 350 210" stroke={stroke} strokeWidth="1" />
          <circle cx="200" cy="108" r="22" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'ai':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <rect x="70" y="55" width="260" height="150" stroke={stroke} strokeWidth="1" />
          <rect x="115" y="85" width="170" height="90" stroke={accentStroke} strokeWidth="1.2" />
          <circle cx="200" cy="130" r="18" stroke={stroke} strokeWidth="1" />
          <line x1="70" y1="130" x2="115" y2="130" stroke={stroke} strokeWidth="1" />
          <line x1="285" y1="130" x2="330" y2="130" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'social':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <rect x="60" y="48" width="80" height="164" stroke={stroke} strokeWidth="1" />
          <rect x="160" y="48" width="80" height="164" stroke={accentStroke} strokeWidth="1.2" />
          <rect x="260" y="48" width="80" height="164" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'prototype':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <rect x="58" y="42" width="284" height="176" stroke={stroke} strokeWidth="1" />
          <line x1="58" y1="78" x2="342" y2="78" stroke={stroke} strokeWidth="1" />
          <rect x="82" y="102" width="130" height="84" stroke={accentStroke} strokeWidth="1.2" />
          <line x1="234" y1="112" x2="316" y2="112" stroke={stroke} strokeWidth="1" />
          <line x1="234" y1="136" x2="300" y2="136" stroke={stroke} strokeWidth="1" />
          <line x1="234" y1="160" x2="284" y2="160" stroke={stroke} strokeWidth="1" />
        </svg>
      )
    case 'survey':
    default:
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" aria-hidden="true">
          <line x1="65" y1="205" x2="335" y2="205" stroke={stroke} strokeWidth="1" />
          <line x1="65" y1="55" x2="65" y2="205" stroke={stroke} strokeWidth="1" />
          <rect x="102" y="112" width="44" height="93" stroke={stroke} strokeWidth="1" />
          <rect x="178" y="78" width="44" height="127" stroke={accentStroke} strokeWidth="1.2" />
          <rect x="254" y="138" width="44" height="67" stroke={stroke} strokeWidth="1" />
        </svg>
      )
  }
}

export function EditorialFigure({
  aspect = '16/10',
  motif = 'network',
  figureLabel,
  caption,
  imageSrc,
  alt,
  className = '',
  tone = 'ivory',
}: EditorialFigureProps) {
  const bgClass =
    tone === 'charcoal'
      ? 'bg-[#1A1A18] text-[#F6F3EC] border-[#141413]'
      : tone === 'burgundy'
        ? 'bg-[#7B1E2B] text-[#FBF9F4] border-[#7B1E2B]'
        : 'bg-[#EDE8DC] text-[#141413] border-[rgba(20,20,19,0.18)]'

  return (
    <figure className={`group m-0 ${className}`}>
      <div
        className={`relative w-full overflow-hidden border ${aspectClassMap[aspect]} ${bgClass} transition-colors duration-300`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={alt || caption || 'Project visual'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between p-4 sm:p-6">
            <div className="flex items-center justify-between gap-2 z-10">
              <span className="font-mono-meta text-[10px] uppercase tracking-[0.14em] opacity-70">
                {figureLabel || 'ARCHIVE PLATE'}
              </span>
              <span className="font-mono-meta text-[10px] uppercase tracking-[0.12em] opacity-55">
                MEDIA SLOT
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 opacity-90 transition-transform duration-500 group-hover:scale-[1.02]">
              <MotifArtwork motif={motif} tone={tone} />
            </div>
            <div className="flex items-end justify-between z-10">
              <span className="font-mono-meta text-[10px] tracking-[0.08em] opacity-60">
                {aspect.replace('/', ' : ')}
              </span>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-mono-meta text-[11px] leading-relaxed tracking-[0.02em] text-[#5D5A54]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
