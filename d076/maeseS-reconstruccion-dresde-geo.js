document.addEventListener("DOMContentLoaded", function () {
  // Crea el mapa y lo centra en las coordenadas del Mediterráneo Oriental
  var map = L.map("map").setView([51.0504, 13.7373], 5);

  // Añade la capa de OpenTopoMap al mapa
  L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Añade marcadores para puntos de interés cultural en las márgenes del Nilo
  var culturalPoints = [
    {
      lat: 29.9792,
      lng: 31.1342,
      popup:
        "<b>Las Pirámides de Giza</b><br>Uno de los monumentos más icónicos de Egipto.",
    },
    // Añade otros puntos aquí
  ];

  culturalPoints.forEach(function (point) {
    var marker = L.marker([point.lat, point.lng]).addTo(map);
    marker.bindPopup(point.popup);
  });

  // Añade marcadores para ciudades y puntos importantes
  var dresdeMarker = L.marker([51.0504, 13.7373]).addTo(map);
  dresdeMarker
    .bindPopup(
      "<b>Dresde</b><br>Arrasada durante la II Guerra Mundial por el ejército Aliado. Fue destruido el 30% de la ciudad."
    )
    .openPopup();

  // Estilo personalizado para la cuenca del Nilo
  var estiloCuenca = {
    color: "#7ec8e3", // Color más celeste para el borde
    weight: 2, // Borde más estrecho
    opacity: 0.65, // Hacer el borde semitransparente
  };

  // Carga y añade los datos de la cuenca del Nilo con estilo personalizado
  fetch("canopo/cuencaNilo.geojson")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      L.geoJSON(data, { style: estiloCuenca }).addTo(map); // Aplica el estilo definido
    });

  // Opcionalmente, si deseas aplicar un estilo diferente al curso completo del Nilo
  var estiloCursoNilo = {
    color: "#1A76D2",
    weight: 3,
    opacity: 0.8,
  };

  fetch("canopo/nileFullSimplified.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      L.geoJSON(data, { style: estiloCursoNilo }).addTo(map); // Aplica un estilo diferente al curso completo del Nilo
    });
});
