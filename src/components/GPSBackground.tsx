'use client';

/**
 * Decorative background for the Hero section.
 *
 * Renders:
 *  - Subtle GPS-inspired route lines (thin golden SVG paths)
 *  - Soft ambient glow spots
 *  - Small intersection points resembling GPS waypoints
 *
 * Purely decorative — no cliché law graphics (scales, gavels, etc.).
 */
export default function GPSBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Ambient gold glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[180px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-gold/[0.02] blur-[140px]" />

      {/* GPS Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gpsGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C79A2B" stopOpacity="0" />
            <stop offset="25%" stopColor="#C79A2B" stopOpacity="1" />
            <stop offset="75%" stopColor="#C79A2B" stopOpacity="1" />
            <stop offset="100%" stopColor="#C79A2B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gpsGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A2B" stopOpacity="0" />
            <stop offset="25%" stopColor="#C79A2B" stopOpacity="1" />
            <stop offset="75%" stopColor="#C79A2B" stopOpacity="1" />
            <stop offset="100%" stopColor="#C79A2B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal route lines */}
        <path
          d="M-50 220 C200 190, 380 380, 620 320 S920 210, 1140 360 S1380 280, 1500 340"
          stroke="url(#gpsGradH)"
          strokeWidth="0.6"
          opacity="0.07"
        />
        <path
          d="M-50 520 C160 470, 320 620, 530 540 S780 370, 980 510 S1230 430, 1500 490"
          stroke="url(#gpsGradH)"
          strokeWidth="0.8"
          opacity="0.05"
        />
        <path
          d="M-50 720 C220 670, 420 770, 670 700 S970 620, 1170 720 S1420 660, 1500 700"
          stroke="url(#gpsGradH)"
          strokeWidth="0.5"
          opacity="0.04"
        />

        {/* Vertical connector lines */}
        <path
          d="M420 -50 C400 200, 460 400, 430 580 S410 780, 390 950"
          stroke="url(#gpsGradV)"
          strokeWidth="0.5"
          opacity="0.04"
        />
        <path
          d="M920 -50 C940 160, 900 360, 930 540 S910 710, 940 950"
          stroke="url(#gpsGradV)"
          strokeWidth="0.5"
          opacity="0.04"
        />

        {/* Waypoint dots */}
        <circle cx="620" cy="320" r="2" fill="#C79A2B" opacity="0.1" />
        <circle cx="980" cy="510" r="1.5" fill="#C79A2B" opacity="0.08" />
        <circle cx="430" cy="580" r="1.5" fill="#C79A2B" opacity="0.07" />
        <circle cx="920" cy="360" r="1" fill="#C79A2B" opacity="0.06" />

        {/* GPS pin indicator */}
        <g transform="translate(620, 310)" opacity="0.06">
          <circle cx="0" cy="0" r="8" stroke="#C79A2B" strokeWidth="0.6" fill="none" />
          <circle cx="0" cy="0" r="2.5" fill="#C79A2B" />
        </g>
      </svg>
    </div>
  );
}
