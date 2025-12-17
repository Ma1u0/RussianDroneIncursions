document.addEventListener('DOMContentLoaded', () => {
  // Initialize map
  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  // Initialize MarkerCluster group
  const markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  // Icons
  const icons = {
    droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28,28] }),
    droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28,28] }),
    jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28,28] }),
    balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28,28] }),
    airportGreen: L.icon({ iconUrl: 'icons/airport.png', iconSize: [28,28] }),
    militaryOrange: L.icon({ iconUrl: 'icons/soldier.png', iconSize: [28,28] }),
    othersBlue: L.icon({ iconUrl: 'icons/dot-square.png', iconSize: [28,28] })
  };

  // Incident data
  const incidents = [

 /* =========================
       B E L G I U M
    ========================= */
    
   /* =========================
       C Z E C H I A
    ========================= */
    {
    lat: 49.74390,
    lng: 15.33811,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sightings ', // shown in popup
    date: '2025',
    details: "On September 10th, the Czech army reported an growing number of drone sightings over it's military bases; no further details were provided",
    link: "https://www.reuters.com/business/aerospace-defense/russias-suspected-hybrid-war-puts-european-air-defences-test-2025-11-05/",
    country: "Czech Republic 🇨🇿"
  },

 /* =========================
       D E N M A R K
    ========================= */

 /* =========================
       E S T O N I A
    ========================= */

     /* =========================
       F I N L A N D
    ========================= */

     /* =========================
       F R A N C E
    ========================= */

     /* =========================
       G E R M A N Y
    ========================= */
    
   /* =========================
       I R E L A N D
    ========================= */
    {
    lat: 53.42829,
    lng: -6.24727,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '01 Dec 2025, shortly before 23:00',
    details: "Four military grade drones flew near the airport when Zelensky´s plane was supposed to land; the lights were on therefore authorities assume that it was only supposed to be a disruption of the landing<br>The drones were likely launched near Howth, from where they first flew above a naval vessel and then towards the location where Zelensky´s plane was supposed to be but his plane was slightly ahead of schedule<br><br>Authorities believe the drones were quadcopters",
    link: "https://www.thejournal.ie/drones-dublin-ireland-hybrid-warfare-russia-6893104-Dec2025/",
    country: "Dublin Airport, Ireland 🇮🇪"
  },

     /* =========================
       L I T H U A N I A
    ========================= */

     /* =========================
        N E T H E R L A N D S
    ========================= */

     /* =========================
       N O R W A Y
    ========================= */

     /* =========================
        P O L A N D
    ========================= */

     /* =========================
       R O M A N I A
    ========================= */

 /* =========================
       S P A I N
    ========================= */

    {
    lat: 39.55322,
    lng: 2.72903,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '19 Oct 2025, 19:00 - ~19:30',
    details: "Multiple pilots reported a drone which resulted in  the airport being closed; police unsuccessfully used their own drone to localize the drone",
    link: "https://www.ondacero.es/emisoras/baleares/mallorca/noticias/aeropuerto-palma-opera-normalidad-cerrar-este-domingo-trafico-aereo-avistamiento-dron_2025102068f5e4db76c80d35b5f0b84e.html",
    country: "Palma de Mallorca Airport, Spain 🇪🇸"
  },

   {
    lat: 38.28757,
    lng: -0.55278,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '27 Oct 2025, 20:53 - ~23:00',
    details: " A drone has been seen sighted near the runway; the perpatrator hasn't been found",
    link: "https://elpais.com/espana/comunidad-valenciana/2025-10-28/un-dron-cerca-de-la-pista-de-despegue-obliga-a-cerrar-el-aeropuerto-de-alicante-durante-casi-dos-horas.html",
    country: "Alicante Airport, Spain 🇪🇸"
  },
     /* =========================
       S W E D E N  
    ========================= */

     /* =========================
       T U R K E Y
    ========================= */

   {
    lat: 42.87107,
    lng: 34.51879,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '15 Sep 2025',
    details: " Turkish F-16 fighters shot down an out-of-control unidentified UAV",
    link: "https://www.trtworld.com/article/efc330793d51",
    country: "Black Sea, Türkiye 🇹🇷"
  },
    
    { lat: 40.7128, lng: -74.0060, icon: icons.jetRed, type:'jet', risk:'red', place:'others',year:'2026', date:'2025-10-12', details:"Jet over US airspace.", link:"#", country:"USA 🇺🇸" },
    { lat: 35.6895, lng: 139.6917, icon: icons.balloonBlue, type:'balloon', risk:'blue', place:'others',year:'2026', date:'2025-11-05', details:"Balloon over Japan.", link:"#", country:"Japan 🇯🇵" },
    { lat: 51.4700, lng: -0.4543, icon: icons.airportGreen, type:'airport', risk:'green', place:'airport',year:'2025', date:'2025-10-01', details:"Heathrow Airport.", link:"#", country:"UK 🇬🇧" }
  ];

  const markers = [];

  // Add markers to cluster
  incidents.forEach(i => {
    const marker = L.marker([i.lat, i.lng], { icon: i.icon })
      .bindPopup(`
        <b><a href="${i.link}" target="_blank">${i.country}</a></b><br>
        <b>Date/Time:</b> ${i.date}<br>
        <b>Type:</b> ${i.popupType}<br>
        <b>Details:</b> ${i.details}
      `);
    marker.meta = i;
    markers.push(marker);
    markerCluster.addLayer(marker); // Add to cluster instead of map
  });

  // Filter function
  function applyFilters() {
    const showDrone = document.querySelector('#filters input[value="drone"]').checked;
    const showJet = document.querySelector('#filters input[value="jet"]').checked;
    const showBalloon = document.querySelector('#filters input[value="balloon"]').checked;
    const showRed = document.querySelector('#filters input[value="red"]').checked;
    const showOrange = document.querySelector('#filters input[value="orange"]').checked;
    const showYellow = document.querySelector('#filters input[value="yellow"]').checked;
    const showGreen = document.querySelector('#filters input[value="green"]').checked;
    const showBlue = document.querySelector('#filters input[value="blue"]').checked;
    const showAirports = document.querySelector('#filters input[value="airports"]').checked;
    const showMilitary = document.querySelector('#filters input[value="militarybases"]').checked;
    const showOthers = document.querySelector('#filters input[value="others"]').checked;
    const show25 = document.querySelector('#filters input[value="2025"]').checked;
    const show26 = document.querySelector('#filters input[value="2026"]').checked;

    markers.forEach(m => {
      const t = m.meta.type;
      const r = m.meta.risk;
      const p = m.meta.place;
      const y = m.meta.year;

      const typeMatch = (t==='drone' && showDrone) || (t==='jet' && showJet) || (t==='balloon' && showBalloon);
      const riskMatch = (r==='red' && showRed) || (r==='orange' && showOrange) || (r==='yellow' && showYellow) ||
                        (r==='green' && showGreen) || (r==='blue' && showBlue);
      const placeMatch = (p==='airport' && showAirports) || (p==='militarybases' && showMilitary) || (p==='others' && showOthers);
      const yearMatch = (y==='2025' && show25) || (y==='2026' && show26);

      if(typeMatch && riskMatch && placeMatch && yearMatch) markerCluster.addLayer(m);
      else markerCluster.removeLayer(m);
    });
  }

  // Add event listeners for filters
  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
});
