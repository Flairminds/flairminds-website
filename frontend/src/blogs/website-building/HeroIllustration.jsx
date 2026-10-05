import React from 'react';

/**
 * Hand-authored hero illustration for "Lessons from Building Websites for
 * Real Clients". Depicts the article's central idea — the same raw content
 * can become a very different, polished page once it's designed — rather
 * than being purely decorative. Self-contained inline SVG: no external
 * images, no libraries.
 */
export default function HeroIllustration() {
    return (
        <figure style={{ margin: 0 }}>
            <svg
                viewBox="0 0 1200 520"
                role="img"
                aria-label="A browser window split in two: plain stacked paragraph lines on the left labeled CONTENT, transforming via an arrow into a colourful designed card layout on the right labeled DESIGNED, with a feedback comment bubble above it."
                style={{ display: 'block', width: '100%', height: 'auto' }}
            >
                <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#eaf3fb" />
                        <stop offset="100%" stopColor="#f7fafc" />
                    </linearGradient>
                    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#003d6e" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="limeGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#b9ed5e" />
                        <stop offset="100%" stopColor="#84cc16" />
                    </linearGradient>
                    <marker id="heroArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" fill="#005ba1" />
                    </marker>
                </defs>

                {/* Ambient background */}
                <rect x="0" y="0" width="1200" height="520" fill="url(#bgGrad)" />
                <circle cx="120" cy="90" r="140" fill="#cfe0ee" opacity="0.4" />
                <circle cx="1100" cy="440" r="170" fill="#cfe0ee" opacity="0.4" />
                <circle cx="1040" cy="70" r="70" fill="#e4f6c3" opacity="0.5" />

                {/* Browser chrome */}
                <rect x="60" y="56" width="1080" height="408" rx="18" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
                <rect x="60" y="56" width="1080" height="46" rx="18" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="2" />
                <circle cx="92" cy="79" r="6" fill="#f87171" />
                <circle cx="114" cy="79" r="6" fill="#fbbf24" />
                <circle cx="136" cy="79" r="6" fill="#34d399" />
                <rect x="520" y="69" width="200" height="20" rx="10" fill="#e5e7eb" />

                {/* Divider + arrow */}
                <line x1="600" y1="122" x2="600" y2="444" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 8" />
                <path d="M 470 283 L 540 283" stroke="#005ba1" strokeWidth="4" fill="none" markerEnd="url(#heroArrow)" />

                {/* LEFT: raw content document */}
                <text x="140" y="150" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" letterSpacing="2" fill="#737373">CONTENT</text>
                <rect x="140" y="170" width="260" height="22" rx="4" fill="#475569" opacity="0.8" />
                <rect x="140" y="206" width="300" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="226" width="280" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="246" width="300" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="266" width="190" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="298" width="180" height="16" rx="4" fill="#737373" opacity="0.7" />
                <rect x="140" y="326" width="300" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="346" width="260" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="366" width="300" height="10" rx="4" fill="#d4d4d4" />
                <rect x="140" y="386" width="220" height="10" rx="4" fill="#d4d4d4" />

                {/* RIGHT: designed page */}
                <text x="650" y="150" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" letterSpacing="2" fill="#005ba1">DESIGNED</text>
                <rect x="650" y="166" width="92" height="22" rx="11" fill="#eaf3fb" />
                <text x="665" y="181" fontFamily="-apple-system, sans-serif" fontSize="10" fontWeight="700" fill="#003d6e">SECTION</text>
                <rect x="650" y="202" width="340" height="30" rx="6" fill="url(#accentGrad)" />
                <rect x="650" y="244" width="400" height="10" rx="4" fill="#e5e7eb" />
                <rect x="650" y="262" width="300" height="10" rx="4" fill="#e5e7eb" />

                <rect x="650" y="292" width="192" height="96" rx="10" fill="#ffffff" stroke="#eaf3fb" strokeWidth="2" />
                <rect x="668" y="310" width="36" height="36" rx="8" fill="url(#limeGrad)" />
                <rect x="668" y="358" width="140" height="10" rx="4" fill="#bcd6ea" />

                <rect x="858" y="292" width="192" height="96" rx="10" fill="#ffffff" stroke="#eaf3fb" strokeWidth="2" />
                <rect x="876" y="310" width="36" height="36" rx="8" fill="url(#accentGrad)" />
                <rect x="876" y="358" width="140" height="10" rx="4" fill="#bcd6ea" />

                {/* Feedback bubble, floating above the designed panel */}
                <g transform="translate(880,112)">
                    <rect x="0" y="0" width="190" height="56" rx="16" fill="#111827" />
                    <path d="M22 56 L14 72 L38 56 Z" fill="#111827" />
                    <circle cx="28" cy="28" r="4.5" fill="#f9fafb" />
                    <circle cx="44" cy="28" r="4.5" fill="#f9fafb" />
                    <circle cx="60" cy="28" r="4.5" fill="#f9fafb" />
                    <text x="86" y="33" fontFamily="-apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#f9fafb">Feedback</text>
                </g>
            </svg>
        </figure>
    );
}
