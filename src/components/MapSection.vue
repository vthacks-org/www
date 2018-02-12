<template>
  <div id="map-section">
    <div id="event-map"></div>
  </div>
</template>

<script>
import Vue from 'vue';

const VueGoogleMaps = require('vue2-google-maps');
const mapStyles = require('../styles/map-styles.json');

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQ8IdkusrshH5dyceej5S2C-FCewgnaAQ',
  },
});

export default {
  name: 'MapSection',
  mounted() {
    VueGoogleMaps.loaded.then(() => {
      const styledMapType = new google.maps.StyledMapType(mapStyles, { name: 'VTHacks' });
      const map = new google.maps.Map(document.getElementById('event-map'), {
        center: { lat: 37.232971, lng: -80.422820 },
        zoom: 18,
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map'],
        },
        gestureHandling: 'cooperative',
      });
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
      const marker = new google.maps.Marker({
        position: { lat: 37.232971, lng: -80.422820 },
        icon: {
          url: 'static/vthacks-favicon.png',
          scaledSize: new google.maps.Size(30, 30),
          anchor: new google.maps.Point(10, 10),
        },
        title: 'VTHacks V',
        map,
      });
      const markerWindow = new google.maps.InfoWindow({
        content: `
          <div>
            <strong>VTHacks V</strong><br>
            435 Turner St NW,<br>
            Blacksburg, VA 24060<br>
            <a href="#" style="background-color: initial; color: #427fed;">View on Google Maps</a>
          </div>`,
      });
      marker.addListener('click', () => {
        markerWindow.open(map, marker);
      });
      markerWindow.open(map, marker);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
#map-section {
  width: 100%;
}
#event-map {
  display: block;
  height: 400px;
}

@media (max-width: 480px) {
  #event-map {
    height: 300px;
  }
}
</style>
