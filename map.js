document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  const icons = {
    droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28,28] }),
    droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28,28] }),
    jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28,28] }),
    balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28,28] }),
    airportGreen: L.icon({ iconUrl: 'icons/airport.png', iconSize: [28,28] }),
    militaryOrange: L.icon({ iconUrl: 'icons/soldier.png', iconSize: [28,28] }),
    othersBlue: L.icon({ iconUrl: 'icons/dot-square.png', iconSize: [28,28] })
  };

  const incidents = [
/* =========================
     B E L G I U M
 ========================= */

/* =========================
     C Z E C H I A 
 ========================= */

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

    { lat: 49.7439, lng: 15.3381, icon: icons.droneYellow, type:'drone', risk:'yellow', location:'others', date:'2025-09-10', details:"Czech drone sightings.", link:"#", country:"Czech 🇨🇿" },
    { lat: 40.7128, lng: -74.0060, icon: icons.jetRed, type:'jet', risk:'red', location:'others', date:'2025-10-12', details:"Jet over US airspace.", link:"#", country:"USA 🇺🇸" },
    { lat: 35.6895, lng: 139.6917, icon: icons.balloonBlue, type:'balloon', risk:'blue', location:'others', date:'2025-11-05', details:"Balloon over Japan.", link:"#", country:"Japan 🇯🇵" },
    { lat: 51.4700, lng: -0.4543, icon: icons.airportGreen, type:'airport', risk:'green', location:'airports', date:'2025-10-01', details:"Heathrow Airport.", link:"#", country:"UK 🇬🇧" }
  ];

  const markers = [];

  incidents.forEach(i => {
    const marker = L.marker([i.lat, i.lng], {icon:i.icon})
      .bindPopup(`<b><a href="${i.link}" target="_blank">${i.country}</a></b><br>
                  <b>Date:</b> ${i.date}<br>
                  <b>Type:</b> ${i.type}<br>
                  <b>Details:</b> ${i.details}`)
      .addTo(map);
    marker.meta = i;
    markers.push(marker);
  });

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

    markers.forEach(m => {
      const t = m.meta.type;
      const r = m.meta.risk;
      const l = m.meta.location;

      const typeMatch = (t==='drone' && showDrone) || (t==='jet' && showJet) || (t==='balloon' && showBalloon) || 
                        (t==='airport' && showAirports) || (t==='militarybases' && showMilitary) || (t==='others' && showOthers);
      const riskMatch = (r==='red' && showRed) || (r==='orange' && showOrange) || (r==='yellow' && showYellow) ||
                        (r==='green' && showGreen) || (r==='blue' && showBlue);

      if(typeMatch && riskMatch) map.addLayer(m);
      else map.removeLayer(m);
    });
  }

  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

});
