export default function WorldMap() {
    return (
      <svg width="100%" height="300" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* This would be a detailed dotted world map - simplified for this example */}
        <g className="map-dots" fill="#f0f0f0">
          {/* Africa */}
          <path d="M400,200 Q450,150 500,200 Q520,250 500,300 Q450,320 400,300 Q380,250 400,200 Z" />
  
          {/* Europe */}
          <path d="M380,150 Q420,120 460,150 Q480,180 460,210 Q420,230 380,210 Q360,180 380,150 Z" />
  
          {/* Asia */}
          <path d="M500,150 Q550,120 600,150 Q620,200 600,250 Q550,270 500,250 Q480,200 500,150 Z" />
  
          {/* North America */}
          <path d="M200,150 Q250,120 300,150 Q320,200 300,250 Q250,270 200,250 Q180,200 200,150 Z" />
  
          {/* South America */}
          <path d="M250,270 Q280,250 310,270 Q330,320 310,370 Q280,390 250,370 Q230,320 250,270 Z" />
  
          {/* Australia */}
          <path d="M600,300 Q630,280 660,300 Q680,330 660,360 Q630,380 600,360 Q580,330 600,300 Z" />
        </g>
  
        {/* Location Markers */}
        <circle cx="270" cy="150" r="12" fill="#22c55e" />
        <circle cx="320" cy="150" r="12" fill="#d946ef" />
        <circle cx="370" cy="150" r="12" fill="#ef4444" />
  
        {/* Location Stands */}
        <line x1="270" y1="162" x2="270" y2="180" stroke="#22c55e" strokeWidth="2" />
        <line x1="320" y1="162" x2="320" y2="180" stroke="#d946ef" strokeWidth="2" />
        <line x1="370" y1="162" x2="370" y2="180" stroke="#ef4444" strokeWidth="2" />
  
        {/* Location Bases */}
        <ellipse cx="270" cy="180" rx="8" ry="3" fill="#22c55e" />
        <ellipse cx="320" cy="180" rx="8" ry="3" fill="#d946ef" />
        <ellipse cx="370" cy="180" rx="8" ry="3" fill="#ef4444" />
      </svg>
    )
  }
  