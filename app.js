// LifeBridge AI - JavaScript Logic and Database

// 1. Initial State Database for Disaster Scenarios
const disasterDatabase = {
  cyclone: {
    name: "Odisha Cyclone (Extremely Severe)",
    threatLevel: "CRITICAL",
    threatMeta: "Extremely Severe Cyclonic Storm landfall",
    center: [20.2724, 85.8300],
    zoom: 11,
    weatherText: "Wind 150 km/h, Torrential Rain",
    weatherTemp: "27°C",
    alerts: "CYCLONE WARNING: Extremely severe cyclonic storm landfall near Puri coast. Red alert active. Coastal communities evacuated to cyclone shelters. Avoid marine drives.",
    shelters: [
      { id: "s-c1", name: "Puri Coastal Multipurpose Shelter", type: "shelter", lat: 19.8134, lng: 85.8312, occupancy: 95, capacity: 800, supplies: "Needs drinking water & dry rations", contact: "+91 6752-223401" },
      { id: "s-c2", name: "Bhubaneswar Exhibition Ground Camp", type: "shelter", lat: 20.2750, lng: 85.8400, occupancy: 45, capacity: 2500, supplies: "Needs blankets & baby formula", contact: "+91 674-2530199" },
      { id: "s-c3", name: "Jagatsinghpur Government College", type: "shelter", lat: 20.2680, lng: 86.1640, occupancy: 82, capacity: 1000, supplies: "Needs basic medical kits", contact: "+91 6722-220122" }
    ],
    roads: [
      { id: "r-c1", name: "Puri-Konark Marine Drive", type: "road", lat: 19.8650, lng: 86.0120, status: "Blocked", desc: "Uprooted trees & heavy sand deposit from storm surge. Fully blocked." },
      { id: "r-c2", name: "National Highway 16 (Bhubaneswar-Cuttack)", type: "road", lat: 20.3150, lng: 85.8900, status: "Caution", desc: "Water logging in low lying stretches. Heavy wind speed." },
      { id: "r-c3", name: "Puri Old Town Link Road", type: "road", lat: 19.8180, lng: 85.8210, status: "Blocked", desc: "Felled electrical poles & live wires on road." }
    ],
    hospitals: [
      { id: "m-c1", name: "AIIMS Bhubaneswar Emergency", type: "hospital", lat: 20.2280, lng: 85.7760, status: "Active", waitTime: "15 min", service: "Full Disaster Trauma & ICU Support" },
      { id: "m-c2", name: "Puri District Headquarters Hospital", type: "hospital", lat: 19.8105, lng: 85.8190, status: "Active", waitTime: "30 min", service: "Emergency Wound & General Care" }
    ],
    prompts: [
      "Nearest cyclone shelter in Puri?",
      "NH-16 current road status?",
      "Cyclone safety precautions?",
      "Treating wounds with local kits"
    ],
    sosGuidelines: [
      "Stay inside high-strength concrete structures. Do not venture outdoors.",
      "Unplug all non-essential electrical equipment. Keep emergency torches ready.",
      "Avoid low-lying coastal roads due to high storm surge threat.",
      "Keep local authorities updated with your GPS coordinates via beacon."
    ]
  },
  landslide: {
    name: "Uttarakhand Cloudburst & Landslide",
    threatLevel: "EXTREME",
    threatMeta: "Cloudburst damage & blocked valley roads",
    center: [30.5506, 79.5660],
    zoom: 12,
    weatherText: "Heavy Rains, Active Rockfall",
    weatherTemp: "12°C",
    alerts: "LANDSLIDE WARNING: Cloudburst triggered flash floods in Alaknanda basin. Multiple landslides on Badrinath National Highway NH-58. High-altitude evacuation active.",
    shelters: [
      { id: "s-l1", name: "Joshimath Transit Camp", type: "shelter", lat: 30.5520, lng: 79.5680, occupancy: 78, capacity: 600, supplies: "Needs warm clothes & blankets", contact: "+91 1372-252102" },
      { id: "s-l2", name: "Pipalkoti Community Ashram", type: "shelter", lat: 30.4350, lng: 79.4310, occupancy: 35, capacity: 400, supplies: "Needs fresh food packets", contact: "+91 1372-243099" },
      { id: "s-l3", name: "Chamoli Government School Camp", type: "shelter", lat: 30.4020, lng: 79.3300, occupancy: 90, capacity: 500, supplies: "Needs paramedics & oxygen cylinders", contact: "+91 1372-233111" }
    ],
    roads: [
      { id: "r-l1", name: "NH-58 (Joshimath-Govindghat)", type: "road", lat: 30.5850, lng: 79.5630, status: "Blocked", desc: "Huge boulder collapse and mudslide covering 50m highway stretch." },
      { id: "r-l2", name: "Rishikesh-Kedarnath Valley Route", type: "road", lat: 30.2850, lng: 78.9810, status: "Caution", desc: "Active rolling stones. Drive strictly during daylight." },
      { id: "r-l3", name: "Helang Bridge Access Road", type: "road", lat: 30.5210, lng: 79.5020, status: "Blocked", desc: "Cracks observed on bridge approach slabs. Closed." }
    ],
    hospitals: [
      { id: "m-l1", name: "Chamoli District Hospital", type: "hospital", lat: 30.4050, lng: 79.3320, status: "Active", waitTime: "20 min", service: "High-Altitude Trauma Care" },
      { id: "m-l2", name: "AIIMS Rishikesh Emergency Wing", type: "hospital", lat: 30.1180, lng: 78.2910, status: "Active", waitTime: "10 min", service: "Advanced Intensive Trauma Unit" }
    ],
    prompts: [
      "Stranded pilgrim emergency helpline?",
      "Is NH-58 Badrinath route open?",
      "First aid for hypothermia?",
      "Helicopter rescue staging points"
    ],
    sosGuidelines: [
      "Move away from valley slopes and landslide-prone cliff sides.",
      "Stay warm, seek shelter indoors to avoid severe exposure hypothermia.",
      "Do not attempt to cross swift mountain streams or waterfalls.",
      "Listen for rumble noises from hillsides which indicate land movements."
    ]
  },
  mumbai_flood: {
    name: "Mumbai Monsoon Flash Flood",
    threatLevel: "HIGH",
    threatMeta: "Heavy monsoon rain combined with high tide",
    center: [19.0760, 72.8777],
    zoom: 12,
    weatherText: "Severe Monsoon Downpour",
    weatherTemp: "28°C",
    alerts: "MUMBAI MONSOON EMERGENCY: Exceptionally heavy rainfall exceeding 250mm. High tide warning at 4.8m. Major subways flooded. Local trains partially suspended. Avoid travel.",
    shelters: [
      { id: "s-f1", name: "Dadar Community Relief Hall", type: "shelter", lat: 19.0178, lng: 72.8478, occupancy: 70, capacity: 1000, supplies: "Needs clean drinking water & dry snacks", contact: "+91 22-24134011" },
      { id: "s-f2", name: "Goregaon Sports Complex Shelter", type: "shelter", lat: 19.1680, lng: 72.8430, occupancy: 85, capacity: 1500, supplies: "Needs medical first aid", contact: "+91 22-28750844" },
      { id: "s-f3", name: "Sion Community Kalyan Kendra", type: "shelter", lat: 19.0370, lng: 72.8620, occupancy: 25, capacity: 500, supplies: "Needs blankets & baby food", contact: "+91 22-24010822" }
    ],
    roads: [
      { id: "r-f1", name: "Andheri East Subway Crossing", type: "road", lat: 19.1190, lng: 72.8470, status: "Blocked", desc: "Fully submerged under 5 feet of floodwater. Strictly closed." },
      { id: "r-f2", name: "Western Express Highway (WEH) Bandra", type: "road", lat: 19.0600, lng: 72.8420, status: "Caution", desc: "Heavy water logging in left lanes. Slow moving traffic." },
      { id: "r-f3", name: "Sion Circle Low-lying Area", type: "road", lat: 19.0350, lng: 72.8610, status: "Blocked", desc: "Severe water logging, minor vehicles stranded." }
    ],
    hospitals: [
      { id: "m-f1", name: "KEM Hospital Parel Emergency", type: "hospital", lat: 19.0028, lng: 72.8410, status: "Active", waitTime: "25 min", service: "Full Trauma & Monsoon Fever Wards" },
      { id: "m-f2", name: "Sion Hospital Trauma Core", type: "hospital", lat: 19.0380, lng: 72.8600, status: "Active", waitTime: "15 min", service: "Emergency Trauma & Surgical Services" }
    ],
    prompts: [
      "Is Andheri subway flooded?",
      "Next high tide timing?",
      "Closest shelter to Dadar?",
      "Preventing waterborne infection"
    ],
    sosGuidelines: [
      "Do not walk or drive through flooded subways or waterlogged roads.",
      "Stay away from open drains, manholes, and live electricity poles.",
      "Move to higher floors if water levels start rising rapidly inside buildings.",
      "Drink only bottled or boiled water to prevent cholera/diarrhea outbreaks."
    ]
  },
  yamuna_accident: {
    name: "Yamuna Expressway Major Accident",
    threatLevel: "WARNING",
    threatMeta: "Multi-vehicle pileup under heavy fog conditions",
    center: [28.4089, 77.5130],
    zoom: 12,
    weatherText: "Dense Fog, Near Zero Vis",
    weatherTemp: "10°C",
    alerts: "TRAFFIC ALERT: Major 12-car collision on Yamuna Expressway near Mile 25. Fog visibility under 5 meters. Emergency rescue vehicles on scene. Heavy expressway blockade.",
    shelters: [
      { id: "s-a1", name: "Greater Noida Transit Shelter", type: "shelter", lat: 28.4680, lng: 77.5110, occupancy: 15, capacity: 200, supplies: "Needs hot tea & dry food", contact: "+91 120-2320911" },
      { id: "s-a2", name: "Jewar Toll Plaza Transit Rest Room", type: "shelter", lat: 28.1270, lng: 77.5750, occupancy: 20, capacity: 150, supplies: "Needs blankets & warm clothes", contact: "+91 120-2320922" }
    ],
    roads: [
      { id: "r-a1", name: "Yamuna Expressway Mile 25 Northbound", type: "road", lat: 28.4110, lng: 77.5140, status: "Blocked", desc: "Wreckage clearing & emergency vehicle staging. Closed." },
      { id: "r-a2", name: "Noida-Greater Noida Link Highway", type: "road", lat: 28.4800, lng: 77.4900, status: "Caution", desc: "Dense fog patches. Speed limited to 40 km/h." },
      { id: "r-a3", name: "Expressway Entry Ramp (Jewar)", type: "road", lat: 28.1300, lng: 77.5700, status: "Blocked", desc: "Diversion in place. Entry blocked to prevent further pileups." }
    ],
    hospitals: [
      { id: "m-a1", name: "Sharda Hospital Trauma Emergency", type: "hospital", lat: 28.4720, lng: 77.4820, status: "Active", waitTime: "10 min", service: "Full Fracture & Burn Trauma" },
      { id: "m-a2", name: "Kailash Hospital Greater Noida", type: "hospital", lat: 28.4690, lng: 77.5080, status: "Active", waitTime: "20 min", service: "General Emergency & ICU Unit" }
    ],
    prompts: [
      "Yamuna Expressway safe detours?",
      "First aid for highway crash victims?",
      "Fog visibility updates?",
      "Emergency ambulance hotline"
    ],
    sosGuidelines: [
      "Turn on hazard lights immediately if stuck on expressway lanes.",
      "Evacuate vehicle occupants behind the crash barrier/railing immediately.",
      "Do not stand on the active highway lanes; secondary pileups are common in fog.",
      "Contact Expressway Toll Helpline (+91 1800-180-2277) or national ambulance (108)."
    ]
  }
};

// 2. Global State Variables
let activeDisasterKey = "mumbai_flood";
let activeDisaster = disasterDatabase[activeDisasterKey];
let map = null;
let mapMarkers = [];
let sosCountdownInterval = null;
let audioCtx = null;

// Supply Hub Listings (Mutable Mock Data)
let supplyListings = [
  { id: "su-1", type: "request", category: "Water", desc: "Urgent need: 30 cases of clean drinking water", location: "Dadar Community Relief Hall", status: "Active", timestamp: "10 min ago" },
  { id: "su-2", type: "request", category: "Medical", desc: "Insulin vials & syringes required for elderly evacuees", location: "Dadar Community Relief Hall", status: "Active", timestamp: "15 min ago" },
  { id: "su-3", type: "offer", category: "Water", desc: "Providing 100 cases of bottled water", location: "KEM Hospital Logistics Hub", status: "Active", timestamp: "5 min ago" },
  { id: "su-4", type: "offer", category: "Blankets", desc: "50 woolen thermal blankets available for dispatch", location: "Sion Community Kalyan Kendra", status: "Active", timestamp: "25 min ago" }
];

// Safety Check-In Listings (Mutable Mock Data)
let safetyRegistry = [
  { id: "sa-1", name: "Priya Sharma", status: "Safe (At Shelter)", notes: "With family, safe at Dadar Relief Hall", timestamp: "5 mins ago" },
  { id: "sa-2", name: "Rajesh Kumar", status: "Safe (At Home)", notes: "Power out but structural home safe in Bandra", timestamp: "12 mins ago" },
  { id: "sa-3", name: "Amit Patel", status: "Evacuating", notes: "Moving towards Sion high-ground area now", timestamp: "1 hour ago" }
];

// Volunteer Dispatch Tasks (Mutable Mock Data)
let volunteerTasks = [
  { id: "v-1", title: "Assist Water Distribution", desc: "Unpack and distribute drinking water cases at Dadar Relief Hall.", location: "Dadar Community Hall", reward: "Food + Transit Pass", status: "Unclaimed", claimedBy: "" },
  { id: "v-2", title: "Clear Debris at Sion Circle", desc: "Help clear fallen branches and rubble from roads to open safe traffic lanes.", location: "Sion Circle", reward: "Protective Gloves Provided", status: "Unclaimed", claimedBy: "" },
  { id: "v-3", title: "Sort Clothing Donations", desc: "Sort incoming blankets, dry sarees, and children's boots for flood evacuees.", location: "Dadar Community Relief Hall", reward: "Community Service Certificate", status: "Claimed", claimedBy: "Rahul Verma" }
];

// 3. Web Audio API Synth Siren
function startSirenAudio() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Create oscillator and modulator for siren effect
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    let mod = audioCtx.createOscillator();
    let modGain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.value = 600; // base Hz
    
    mod.type = 'sawtooth';
    mod.frequency.value = 2; // modulation rate (2 Hz)
    modGain.gain.value = 250; // swing frequency
    
    // Connect mod
    mod.connect(modGain);
    modGain.connect(osc.frequency);
    
    // Output path
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    // Low volume
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    
    osc.start();
    mod.start();
    
    return { osc, mod, gain };
  } catch (e) {
    console.log("Audio not supported or blocked", e);
    return null;
  }
}

// 4. Initialize Map
function initMap() {
  if (map) {
    map.remove();
  }
  
  // Set up center and zoom
  const currentCenter = activeDisaster.center;
  const currentZoom = activeDisaster.zoom;
  
  map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView(currentCenter, currentZoom);
  
  // Tile layer (standard OSM styled with dark filter via CSS variables where supported, or default OSM)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
  
  renderMapMarkers();
}

// 5. Render Map Markers
function renderMapMarkers() {
  // Clear old markers
  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];
  
  // Render shelters
  activeDisaster.shelters.forEach(shelter => {
    const icon = createCustomMarkerSVG("green", "🏠");
    const m = L.marker([shelter.lat, shelter.lng], { icon: icon })
      .bindPopup(`
        <div style="color: #333; font-family: sans-serif;">
          <h4 style="margin:0 0 5px 0; color: #10b981;">${shelter.name}</h4>
          <p style="margin:0 0 5px 0; font-size:12px;"><b>Capacity:</b> ${shelter.occupancy}% full (${shelter.capacity} max)</p>
          <p style="margin:0 0 5px 0; font-size:12px;"><b>Needs:</b> ${shelter.supplies}</p>
          <p style="margin:0; font-size:11px; color:#666;"><b>Contact:</b> ${shelter.contact}</p>
        </div>
      `);
    m.category = "shelters";
    m.addTo(map);
    mapMarkers.push(m);
  });
  
  // Render roads
  activeDisaster.roads.forEach(road => {
    const color = road.status === "Blocked" ? "red" : "orange";
    const emoji = road.status === "Blocked" ? "🚫" : "⚠️";
    const icon = createCustomMarkerSVG(color, emoji);
    const m = L.marker([road.lat, road.lng], { icon: icon })
      .bindPopup(`
        <div style="color: #333; font-family: sans-serif;">
          <h4 style="margin:0 0 5px 0; color:${road.status === "Blocked" ? "#ef4444" : "#f59e0b"};">${road.name}</h4>
          <p style="margin:0 0 5px 0; font-size:12px;"><b>Status:</b> ${road.status}</p>
          <p style="margin:0; font-size:12px;">${road.desc}</p>
        </div>
      `);
    m.category = "roads";
    m.addTo(map);
    mapMarkers.push(m);
  });
  
  // Render medical hospitals
  activeDisaster.hospitals.forEach(hosp => {
    const icon = createCustomMarkerSVG("blue", "⚕️");
    const m = L.marker([hosp.lat, hosp.lng], { icon: icon })
      .bindPopup(`
        <div style="color: #333; font-family: sans-serif;">
          <h4 style="margin:0 0 5px 0; color:#3b82f6;">${hosp.name}</h4>
          <p style="margin:0 0 5px 0; font-size:12px;"><b>Wait Time:</b> ${hosp.waitTime}</p>
          <p style="margin:0; font-size:12px;"><b>Support:</b> ${hosp.service}</p>
        </div>
      `);
    m.category = "hospitals";
    m.addTo(map);
    mapMarkers.push(m);
  });
}

// Helper to construct beautiful SVGs for map markers
function createCustomMarkerSVG(colorHex, emoji) {
  let color = "#3b82f6";
  if (colorHex === "green") color = "#10b981";
  if (colorHex === "orange") color = "#f59e0b";
  if (colorHex === "red") color = "#ef4444";
  
  const markerHtml = `
    <div style="
      background-color: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      border: 2px solid white;
    ">
      <div style="
        transform: rotate(45deg);
        font-size: 14px;
      ">${emoji}</div>
    </div>
  `;
  
  return L.divIcon({
    html: markerHtml,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: "custom-leaflet-marker"
  });
}

// 6. Handle Filters on Map Markers
function setupMapFilters() {
  const filterButtons = document.querySelectorAll('#map-layer-filters .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      
      // Toggle button active state
      if (category === "all") {
        const isCurrentlyActive = btn.classList.contains('active');
        filterButtons.forEach(b => {
          if (isCurrentlyActive) b.classList.remove('active');
          else b.classList.add('active');
        });
      } else {
        btn.classList.toggle('active');
      }
      
      // Update markers visibility
      applyMarkerVisibility();
    });
  });
}

function applyMarkerVisibility() {
  const activeFilters = Array.from(document.querySelectorAll('#map-layer-filters .filter-btn.active'))
    .map(btn => btn.getAttribute('data-filter'))
    .filter(cat => cat !== "all");

  mapMarkers.forEach(m => {
    if (activeFilters.includes(m.category)) {
      m.addTo(map);
    } else {
      map.removeLayer(m);
    }
  });
}

// 7. Navigation Tab Logic
function setupNavigation() {
  const navItems = document.querySelectorAll('nav.sidebar .nav-item');
  const pages = document.querySelectorAll('main.main-content .page');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = item.getAttribute('data-tab');
      
      navItems.forEach(i => i.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      
      item.classList.add('active');
      const targetPage = document.getElementById(`page-${tabId}`);
      if (targetPage) {
        targetPage.classList.add('active');
      }
      
      // Trigger map resize to prevent rendering glitches inside container
      if (tabId === "dashboard" || tabId === "map-page") {
        setTimeout(() => {
          if (map) map.invalidateSize();
        }, 150);
      }
    });
  });

  // Setup dashboard redirects
  document.getElementById('jump-to-dashboard-map').addEventListener('click', () => {
    document.querySelector('[data-tab="dashboard"]').click();
  });
  document.getElementById('jump-to-dashboard-chat').addEventListener('click', () => {
    document.querySelector('[data-tab="dashboard"]').click();
  });
}

// 8. Disaster Scenario Switching System
function setupDisasterSelector() {
  const selectEl = document.getElementById('disaster-select');
  selectEl.addEventListener('change', (e) => {
    activeDisasterKey = e.target.value;
    activeDisaster = disasterDatabase[activeDisasterKey];
    
    loadActiveDisaster();
  });
}

function loadActiveDisaster() {
  // Update Ticker
  document.getElementById('alert-ticker').textContent = activeDisaster.alerts;
  
  // Update Weather
  document.getElementById('weather-text').textContent = activeDisasterKey.toUpperCase() + " STATUS";
  document.getElementById('weather-temp').textContent = activeDisaster.weatherTemp + " | " + activeDisaster.weatherText;
  
  // Update Stat ribbon
  document.getElementById('dashboard-threat-level').textContent = activeDisaster.threatLevel;
  document.getElementById('dashboard-threat-meta').textContent = activeDisaster.threatMeta;
  
  // Calculate and update active counts
  const totalShelters = activeDisaster.shelters.length;
  const avgOccupancy = Math.round(activeDisaster.shelters.reduce((acc, s) => acc + s.occupancy, 0) / totalShelters);
  document.getElementById('dashboard-shelter-count').textContent = `${totalShelters} Active`;
  document.getElementById('dashboard-shelter-count').nextElementSibling.textContent = `${avgOccupancy}% Avg Occupancy`;
  
  const blockedRoads = activeDisaster.roads.filter(r => r.status === "Blocked").length;
  document.getElementById('dashboard-road-count').textContent = `${blockedRoads} Blocked`;
  document.getElementById('dashboard-road-count').nextElementSibling.textContent = `${activeDisaster.roads.length} Total Hazards Tracked`;
  
  // Update Map
  initMap();
  
  // Update Chatbot suggestions
  renderChatQuickPrompts();
  
  // Reset Chat with warm greeting from AI Agent
  initChatAgentGreeting();
  
  // Re-render directories
  renderShelterDirectory();
  renderRoadDirectory();
  
  // If Low Bandwidth is active, rebuild text coordinate directory
  if (document.body.classList.contains('low-bandwidth')) {
    renderOfflineCoordinates();
  }
}

// 9. Low Bandwidth / Offline Mode Toggle
function setupLowBandwidthToggle() {
  const toggle = document.getElementById('low-bandwidth-toggle');
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('low-bandwidth');
      renderOfflineCoordinates();
    } else {
      document.body.classList.remove('low-bandwidth');
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 100);
    }
  });
}

function renderOfflineCoordinates() {
  const container = document.getElementById('offline-coordinates-list');
  let html = `<strong>OFFLINE CACHE ACTIVE (Coordinates Directory):</strong><br><br>`;
  
  html += `<strong>Active Shelters:</strong><br>`;
  activeDisaster.shelters.forEach(s => {
    html += `• ${s.name} - [Lat: ${s.lat.toFixed(4)}, Lng: ${s.lng.toFixed(4)}] - Occupancy: ${s.occupancy}% - Contact: ${s.contact}<br>`;
  });
  
  html += `<br><strong>Active Blockages:</strong><br>`;
  activeDisaster.roads.forEach(r => {
    html += `• ${r.name} - [Lat: ${r.lat.toFixed(4)}, Lng: ${r.lng.toFixed(4)}] - Status: ${r.status} - Details: ${r.desc}<br>`;
  });

  html += `<br><strong>Emergency Units:</strong><br>`;
  activeDisaster.hospitals.forEach(h => {
    html += `• ${h.name} - [Lat: ${h.lat.toFixed(4)}, Lng: ${h.lng.toFixed(4)}] - Wait time: ${h.waitTime} - Info: ${h.service}<br>`;
  });
  
  container.innerHTML = html;
}

// 10. SOS System
function setupSOSButton() {
  const sosBtn = document.getElementById('sos-trigger-btn');
  const cancelBtn = document.getElementById('cancel-sos-btn');
  const overlay = document.getElementById('sos-overlay');
  const timer = document.getElementById('sos-timer');
  const logPanel = document.getElementById('sos-log');
  
  let countdown = 5;
  let sirenObjs = null;
  
  sosBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    countdown = 5;
    timer.textContent = countdown;
    
    // Set Instructions
    const instructionsContainer = document.getElementById('sos-instructions-list');
    instructionsContainer.innerHTML = activeDisaster.sosGuidelines.map(line => `<li>${line}</li>`).join('');
    
    // Reset Log
    logPanel.innerHTML = `[00:00] Distress Beacon Initiated. Local GPS tracking authorized.<br>`;
    
    // Start synth audio siren
    sirenObjs = startSirenAudio();
    
    sosCountdownInterval = setInterval(() => {
      countdown--;
      timer.textContent = countdown;
      
      // Update simulation log
      if (countdown === 4) {
        logPanel.innerHTML += `[00:01] Acquiring satellite triangulation... GPS center estimated at [${activeDisaster.center[0].toFixed(4)}, ${activeDisaster.center[1].toFixed(4)}].<br>`;
      } else if (countdown === 2) {
        logPanel.innerHTML += `[00:03] Encrypting beacon ID & packaging local telemetry packet...<br>`;
      }
      
      if (countdown <= 0) {
        clearInterval(sosCountdownInterval);
        
        // Finalize SOS
        logPanel.innerHTML += `[00:05] 🚨 BROADCAST CONFIRMED. Distress coordinates pushed to nearby relief networks. Standby for contact.<br>`;
        timer.textContent = "SOS ACTIVE";
        timer.style.fontSize = "3.5rem";
        
        // Add SOS pin to map
        addSosMarkerToMap();
        
        // Autopost user's safety search record as "Needs Evacuation Help"
        safetyRegistry.unshift({
          id: "sa-" + Date.now(),
          name: "EMERGENCY BEACON USER",
          status: "Needs Assistance",
          notes: `Beacon active at [${activeDisaster.center[0].toFixed(4)}, ${activeDisaster.center[1].toFixed(4)}]`,
          timestamp: "Just Now"
        });
        renderSafetyRegistry();
      }
    }, 1000);
  });
  
  cancelBtn.addEventListener('click', () => {
    clearInterval(sosCountdownInterval);
    overlay.classList.remove('active');
    timer.style.fontSize = "7rem";
    
    // Stop audio oscillator
    if (sirenObjs) {
      try {
        sirenObjs.osc.stop();
        sirenObjs.mod.stop();
        audioCtx.close();
        audioCtx = null;
      } catch(e) {}
    }
  });
}

function addSosMarkerToMap() {
  if (!map) return;
  // Shift slightly from center to avoid overlapping other landmarks
  const sosCoords = [activeDisaster.center[0] + 0.005, activeDisaster.center[1] - 0.003];
  
  const icon = L.divIcon({
    html: `
      <div style="position:relative;">
        <div style="
          position: absolute;
          width: 32px;
          height: 32px;
          background: rgba(239, 68, 68, 0.4);
          border-radius: 50%;
          animation: pulse 1s infinite alternate;
        "></div>
        <div style="
          background-color: #ef4444;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid white;
          position: absolute;
          top: 8px;
          left: 8px;
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    className: "sos-beacon-marker"
  });
  
  const m = L.marker(sosCoords, { icon: icon })
    .bindPopup(`
      <div style="color: #333; font-family: sans-serif;">
        <h4 style="margin:0 0 5px 0; color:#ef4444;">🚨 ACTIVE DISTRESS</h4>
        <p style="margin:0; font-size:12px;">Emergency beacon signal reported. Rescue dispatch coordinates locked.</p>
      </div>
    `);
  m.category = "sos";
  m.addTo(map);
  mapMarkers.push(m);
  
  // Highlight on map
  map.setView(sosCoords, activeDisaster.zoom + 1);
  m.openPopup();
}

// 11. LifeBridge AI Chatbot Logic
function initChatAgentGreeting() {
  const container = document.getElementById('chat-messages-container');
  container.innerHTML = `
    <div class="message agent">
      Hello! I am LifeBridge AI, your emergency coordination agent. 
      I have loaded real-time details for the <b>${activeDisaster.name}</b> incident.
      <br><br>
      How can I assist you right now? Ask about:
      <ul>
        <li>Active shelter availability</li>
        <li>Current road blockages or safe detours</li>
        <li>Urgent first aid instructions</li>
      </ul>
      <span class="message-meta">LifeBridge Core Agent • Just Now</span>
    </div>
  `;
  container.scrollTop = container.scrollHeight;
}

function renderChatQuickPrompts() {
  const container = document.getElementById('chat-quick-prompts-container');
  container.innerHTML = activeDisaster.prompts.map(prompt => `
    <button class="quick-prompt-btn">${prompt}</button>
  `).join('');
  
  // Attach click listener
  const buttons = container.querySelectorAll('.quick-prompt-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      sendChatMessage(btn.textContent);
    });
  });
}

function setupChatInterface() {
  const sendBtn = document.getElementById('chat-send-btn');
  const input = document.getElementById('chat-input-field');
  
  sendBtn.addEventListener('click', () => {
    if (input.value.trim()) {
      sendChatMessage(input.value.trim());
      input.value = "";
    }
  });
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      sendChatMessage(input.value.trim());
      input.value = "";
    }
  });
}

function sendChatMessage(text) {
  const container = document.getElementById('chat-messages-container');
  
  // 1. Append User Message
  const userMsgHtml = `
    <div class="message user">
      ${text}
      <span class="message-meta">You • Just Now</span>
    </div>
  `;
  container.innerHTML += userMsgHtml;
  container.scrollTop = container.scrollHeight;
  
  // 2. Typing Indicator
  const typingId = "typing-" + Date.now();
  const typingHtml = `
    <div class="message agent" id="${typingId}">
      <span style="display:inline-block; animation: pulse 1s infinite;">Thinking... Analying active incident reports...</span>
    </div>
  `;
  container.innerHTML += typingHtml;
  container.scrollTop = container.scrollHeight;
  
  // 3. Generate response after timeout
  setTimeout(() => {
    const typingIndicator = document.getElementById(typingId);
    if (typingIndicator) {
      typingIndicator.remove();
    }
    
    const response = parseAndAnswer(text);
    const agentMsgHtml = `
      <div class="message agent">
        ${response}
        <span class="message-meta">LifeBridge Core Agent • Just Now</span>
      </div>
    `;
    container.innerHTML += agentMsgHtml;
    container.scrollTop = container.scrollHeight;
  }, 1000);
}

function parseAndAnswer(text) {
  const q = text.toLowerCase();
  
  // Check for Shelters
  if (q.includes("shelter") || q.includes("where can i go") || q.includes("evacuate")) {
    let response = `Based on the latest reports for the <b>${activeDisaster.name}</b>, here are the closest shelters matching availability:<br><br>`;
    activeDisaster.shelters.forEach(s => {
      response += `• <b>${s.name}</b> (${s.occupancy}% occupancy). ${s.supplies ? `<i>Needs: ${s.supplies}</i>.` : ""} Contact: ${s.contact}<br>`;
    });
    response += `<br>I've highlighted these shelters on the map layout with Green markers.`;
    return response;
  }
  
  // Check for Roads / Safety / Detours
  if (q.includes("road") || q.includes("route") || q.includes("transit") || q.includes("block") || q.includes("close")) {
    let response = `Here is the verified status of transportation routes in this zone:<br><br>`;
    activeDisaster.roads.forEach(r => {
      const statusIcon = r.status === "Blocked" ? "🔴" : "🟡";
      response += `${statusIcon} <b>${r.name}</b>: ${r.status}. (${r.desc})<br>`;
    });
    response += `<br>Please avoid the red blocked routes. Route detours have been calculated and staged on the map with Orange hazard markers.`;
    return response;
  }
  
  // First Aid instructions
  if (q.includes("first aid") || q.includes("bleed") || q.includes("wound") || q.includes("fracture") || q.includes("burn") || q.includes("injury")) {
    if (q.includes("bleed") || q.includes("wound")) {
      return `<b>First Aid for Bleeding:</b><br><br>
        1. Apply direct pressure to the wound with a clean cloth or sterile bandage.<br>
        2. Elevate the injured limb above heart level if possible.<br>
        3. Do not remove the bandage if it gets soaked; add more layers on top.<br>
        4. Seek professional medical aid. <b>${activeDisaster.hospitals[0].name}</b> is open with a wait time of ${activeDisaster.hospitals[0].waitTime}.`;
    }
    if (q.includes("burn")) {
      return `<b>First Aid for Burns (Thermal or Chemical):</b><br><br>
        1. Cool the burn immediately under cool, running clean water for 10-20 minutes.<br>
        2. Do not use ice, butter, or ointments on severe burns.<br>
        3. Remove clothing or jewelry near the burn unless stuck to skin.<br>
        4. Cover loosely with sterile gauze. Seek medical help at <b>${activeDisaster.hospitals[0].name}</b>.`;
    }
    return `<b>General First Aid Instructions:</b><br><br>
      • Ensure you are in a safe, secure structure away from rising waters or crumbling masonry.<br>
      • Keep wounds clean. Wash with clean water if available.<br>
      • Do not try to reset broken limbs; splint them in place with rigid materials.<br>
      • <b>Local Emergency Units:</b> ${activeDisaster.hospitals.map(h => `${h.name} (${h.waitTime} wait)`).join(', ')}`;
  }
  
  // Water safety
  if (q.includes("water") || q.includes("drink")) {
    return `<b>Drinking Water Safety:</b><br><br>
      • Do not drink tap water or local floodwater. Assume it is contaminated with bacteria or chemicals.<br>
      • Boil water vigorously for at least 1 full minute, or use chlorine/iodine tablets.<br>
      • Bottled water is currently available at <b>${activeDisaster.shelters[0].name}</b>.`;
  }
  
  // High Tide warning (specifically Mumbai Flood)
  if (q.includes("tide") || q.includes("mumbai") || q.includes("tide timing")) {
    return `<b>Mumbai High Tide Warning:</b><br><br>
      • High tide warning is in effect (expected height 4.8 meters).<br>
      • Drainage channels will be closed to prevent seawater backflow. Flash floods in Low-lying areas (Dadar, Sion, Kurla) will intensify during this time.<br>
      • Avoid going near marine areas or beaches (Gateway, Marine Drive, Juhu).`;
  }
  
  // Landslide safety (specifically Uttarakhand)
  if (q.includes("landslide") || q.includes("rockfall") || q.includes("mountain") || q.includes("hill")) {
    return `<b>Landslide & Rockfall Safety:</b><br><br>
      • If you hear a low rumbling sound from the hillsides, evacuate to safe open ground or transit camps immediately.<br>
      • Avoid mountain roads like NH-58; multiple active landslides are blocking valley routes.<br>
      • Do not pitch tents near mountain rivers or waterfall streams due to cloudburst risk.`;
  }

  // General fallbacks
  return `I understand you are asking about "${text}". As your disaster helper, I recommend checking the <b>Shelters & Roads</b> tab for detailed navigation indexes or clicking the <b>SOS Trigger</b> if you need immediate coordinate dispatch to field squads.`;
}

// 12. Supply Hub - Request & Offer Marketplace
function renderSupplyHub() {
  const container = document.getElementById('coordination-board-container');
  container.innerHTML = supplyListings.map(item => {
    let badgeClass = item.type;
    let titlePrefix = item.type === "request" ? "🚨 Request" : "🤝 Offer";
    if (item.status === "Matched") {
      badgeClass = "matched";
      titlePrefix = "✅ Matched";
    }
    
    return `
      <div class="glass-panel board-card ${item.type} ${item.status === 'Matched' ? 'matched' : ''}">
        <div class="board-card-header">
          <span class="board-card-badge">${titlePrefix}: ${item.category}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.timestamp}</span>
        </div>
        <p style="font-size:0.9rem; font-weight:500;">${item.desc}</p>
        <div style="font-size:0.8rem; color:var(--text-secondary); display:flex; justify-content:space-between; margin-top:4px;">
          <span>📍 Location: ${item.location}</span>
          <span style="color:${item.status === 'Matched' ? 'var(--color-success)' : 'var(--text-muted)'}; font-weight:bold;">${item.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

function setupSupplyHub() {
  renderSupplyHub();
  
  const submitBtn = document.getElementById('submit-supply-btn');
  submitBtn.addEventListener('click', () => {
    const type = document.getElementById('supply-post-type').value;
    const category = document.getElementById('supply-category').value;
    const desc = document.getElementById('supply-desc').value.trim();
    const loc = document.getElementById('supply-loc').value.trim();
    
    if (!desc || !loc) {
      alert("Please fill in the description and location fields.");
      return;
    }
    
    const newId = "su-" + Date.now();
    const newListing = {
      id: newId,
      type: type,
      category: category,
      desc: desc,
      location: loc,
      status: "Active",
      timestamp: "Just Now"
    };
    
    supplyListings.unshift(newListing);
    
    // Run automated Matchmaking logic
    runMatchmaker(newListing);
    
    // Clear forms
    document.getElementById('supply-desc').value = "";
    document.getElementById('supply-loc').value = "";
    
    renderSupplyHub();
  });
}

function runMatchmaker(newListing) {
  const logContainer = document.getElementById('matching-engine-logs');
  const matchTypeToFind = newListing.type === "request" ? "offer" : "request";
  
  // Find standard match by Category
  const match = supplyListings.find(item => 
    item.type === matchTypeToFind && 
    item.category === newListing.category && 
    item.status === "Active"
  );
  
  const timestamp = new Date().toLocaleTimeString();
  
  if (match) {
    // Perform Match
    match.status = "Matched";
    newListing.status = "Matched";
    
    logContainer.innerHTML = `[${timestamp}] 🤝 MATCH MATCHED: "${newListing.desc}" matched with "${match.desc}" at ${newListing.location}. Dispatch volunteer team.<br>` + logContainer.innerHTML;
    
    // Update dashboard matches count
    const matchCountEl = document.getElementById('dashboard-match-count');
    const currCount = parseInt(matchCountEl.textContent) || 0;
    matchCountEl.textContent = currCount + 1;
  } else {
    logContainer.innerHTML = `[${timestamp}] Published active ${newListing.type} for ${newListing.category} at ${newListing.location}. Scanning logs...<br>` + logContainer.innerHTML;
  }
}

// 13. Safety Registry Logic
function renderSafetyRegistry() {
  const container = document.getElementById('safety-registry-container');
  const searchVal = document.getElementById('safety-search').value.toLowerCase();
  
  const filtered = safetyRegistry.filter(item => 
    item.name.toLowerCase().includes(searchVal)
  );
  
  container.innerHTML = filtered.map(item => `
    <div class="glass-panel board-card matched" style="border-left-color: ${item.status.includes('Needs') ? 'var(--color-danger)' : 'var(--color-success)'}">
      <div class="board-card-header">
        <h4 style="font-family:var(--font-title); font-weight:600; font-size:0.95rem;">${item.name}</h4>
        <span class="board-card-badge" style="background:${item.status.includes('Needs') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)'}; color:${item.status.includes('Needs') ? 'var(--color-danger)' : 'var(--color-success)'};">${item.status}</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${item.notes}</p>
      <span style="font-size:0.7rem; color:var(--text-muted); text-align:right; display:block; margin-top:2px;">Logged: ${item.timestamp}</span>
    </div>
  `).join('');
}

function setupSafetyRegistry() {
  renderSafetyRegistry();
  
  // Submit Safety State
  const submitBtn = document.getElementById('submit-safety-btn');
  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('safety-name').value.trim();
    const status = document.getElementById('safety-status').value;
    const notes = document.getElementById('safety-notes').value.trim();
    
    if (!name) {
      alert("Please fill in your name to check in.");
      return;
    }
    
    safetyRegistry.unshift({
      id: "sa-" + Date.now(),
      name: name,
      status: status,
      notes: notes || "No additional status notes provided.",
      timestamp: "Just Now"
    });
    
    document.getElementById('safety-name').value = "";
    document.getElementById('safety-notes').value = "";
    
    renderSafetyRegistry();
  });
  
  // Search
  document.getElementById('safety-search').addEventListener('input', renderSafetyRegistry);
}

// 14. Volunteer Task Dispatch Board
function renderVolunteerBoard() {
  const container = document.getElementById('volunteer-tasks-container');
  container.innerHTML = volunteerTasks.map(task => {
    const isClaimed = task.status === "Claimed";
    
    return `
      <div class="glass-panel detail-card" style="opacity: ${isClaimed ? 0.75 : 1};">
        <div class="card-header">
          <span class="card-title">${task.title}</span>
          <span class="status-pill ${isClaimed ? 'success' : 'warning'}">${task.status}</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); flex:1;">${task.desc}</p>
        <div class="card-row">
          <span class="card-label">📍 Area:</span>
          <span class="card-val">${task.location}</span>
        </div>
        <div class="card-row">
          <span class="card-label">🎁 Reward:</span>
          <span class="card-val" style="color:var(--color-success);">${task.reward}</span>
        </div>
        ${isClaimed ? `
          <div style="font-size:0.8rem; color:var(--color-success); font-weight:600; text-align:center; padding:8px; border:1px dashed var(--color-success); border-radius:4px; margin-top:8px;">
            Claimed by ${task.claimedBy}
          </div>
        ` : `
          <button class="card-btn primary claim-task-btn" data-id="${task.id}" style="margin-top:8px;">Claim Task</button>
        `}
      </div>
    `;
  }).join('');
  
  // Attach claim listeners
  const claimBtns = container.querySelectorAll('.claim-task-btn');
  claimBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const taskId = btn.getAttribute('data-id');
      claimVolunteerTask(taskId);
    });
  });
}

function claimVolunteerTask(id) {
  const task = volunteerTasks.find(t => t.id === id);
  if (task) {
    task.status = "Claimed";
    task.claimedBy = "Local Volunteer (You)";
    
    // Add toast or log
    const logContainer = document.getElementById('matching-engine-logs');
    const timestamp = new Date().toLocaleTimeString();
    logContainer.innerHTML = `[${timestamp}] 🤝 Volunteer claimed task: "${task.title}" at ${task.location}.<br>` + logContainer.innerHTML;
    
    // Update dashboard matches count
    const matchCountEl = document.getElementById('dashboard-match-count');
    const currCount = parseInt(matchCountEl.textContent) || 0;
    matchCountEl.textContent = currCount + 1;
    
    renderVolunteerBoard();
  }
}

// 15. Shelters & Roads Directories
function renderShelterDirectory() {
  const container = document.getElementById('shelters-list-container');
  container.innerHTML = activeDisaster.shelters.map(shelter => {
    const color = shelter.occupancy > 90 ? "danger" : (shelter.occupancy > 70 ? "warning" : "success");
    return `
      <div class="glass-panel detail-card">
        <div class="card-header">
          <span class="card-title">${shelter.name}</span>
          <span class="status-pill ${color}">${shelter.occupancy > 90 ? 'Near Capacity' : 'Active Open'}</span>
        </div>
        
        <div class="progress-bar-wrapper">
          <div class="progress-info">
            <span>Shelter Occupancy Gauge</span>
            <span style="font-weight:bold;">${shelter.occupancy}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${shelter.occupancy}%; background-color: var(--color-${color});"></div>
          </div>
        </div>

        <div class="card-row">
          <span class="card-label">📞 Contact line:</span>
          <span class="card-val">${shelter.contact}</span>
        </div>
        <div class="card-row">
          <span class="card-label">📦 Staged requirements:</span>
          <span class="card-val" style="color:var(--color-warning);">${shelter.supplies}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderRoadDirectory() {
  const container = document.getElementById('roads-list-container');
  container.innerHTML = activeDisaster.roads.map(road => {
    const isBlocked = road.status === "Blocked";
    return `
      <div class="glass-panel detail-card">
        <div class="card-header">
          <span class="card-title">${road.name}</span>
          <span class="status-pill ${isBlocked ? 'danger' : 'warning'}">${road.status}</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary);">${road.desc}</p>
        <div style="font-size:0.8rem; display:flex; justify-content:space-between; border-top:1px solid var(--border-color); padding-top:8px; margin-top:4px;">
          <span style="color:var(--text-muted)">Co-ordinates: [${road.lat.toFixed(4)}, ${road.lng.toFixed(4)}]</span>
          <span style="font-weight:600; color:var(--color-${isBlocked ? 'danger' : 'warning'})">${isBlocked ? 'DO NOT ENTER' : 'PROCEED WITH CAUTION'}</span>
        </div>
      </div>
    `;
  }).join('');
}

function setupRoadReporting() {
  const btn = document.getElementById('submit-road-report-btn');
  btn.addEventListener('click', () => {
    const name = document.getElementById('report-road-name').value.trim();
    const status = document.getElementById('report-road-status').value;
    
    if (!name) {
      alert("Please enter a road or intersection location name.");
      return;
    }
    
    // Add offset from active disaster center to place on map
    const newRoad = {
      id: "r-user-" + Date.now(),
      name: name,
      type: "road",
      lat: activeDisaster.center[0] - 0.006 + Math.random() * 0.012,
      lng: activeDisaster.center[1] - 0.006 + Math.random() * 0.012,
      status: status,
      desc: `User submitted report: Road reported as ${status} due to hazard conditions.`
    };
    
    activeDisaster.roads.unshift(newRoad);
    
    // Clear field
    document.getElementById('report-road-name').value = "";
    
    // Refresh display
    renderRoadDirectory();
    renderMapMarkers();
    
    // Log in matchmaker
    const logContainer = document.getElementById('matching-engine-logs');
    const timestamp = new Date().toLocaleTimeString();
    logContainer.innerHTML = `[${timestamp}] ⚠️ HAZARD REPORTED: user flagged "${name}" as ${status.toUpperCase()}. Map marker loaded.<br>` + logContainer.innerHTML;
  });
}

// 16. App Launch Initialization
window.addEventListener('DOMContentLoaded', () => {
  // Navigation setup
  setupNavigation();
  
  // Disaster setup
  setupDisasterSelector();
  
  // Low Bandwidth
  setupLowBandwidthToggle();
  
  // SOS button trigger setup
  setupSOSButton();
  
  // Chat NLP interface setup
  setupChatInterface();
  
  // Supply hub coordination setup
  setupSupplyHub();
  
  // Safety checkin registry
  setupSafetyRegistry();
  
  // Volunteer board
  renderVolunteerBoard();
  
  // Road reporting
  setupRoadReporting();
  
  // Load default disaster dataset
  loadActiveDisaster();
});
