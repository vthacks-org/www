<template>
  <div class="map-section">
    <div id="event-map"></div>
  </div>
</template>

<script>
const mapStyles = require('../styles/map-styles.json');

export default {
  name: 'MapSection',
  mounted() {
    const styledMapType = new google.maps.StyledMapType(mapStyles, { name: 'VTHacks' });
    const map = new google.maps.Map(document.getElementById('event-map'), {
      center: { lat: 37.2329557, lng: -80.4229729 },
      zoom: 18,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
          'styled_map'],
      },
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
.map-section {
  width: 100vw;
}
#event-map {
  display: block;
  height: 400px;
}
</style>
