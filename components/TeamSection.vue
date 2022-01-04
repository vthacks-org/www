<template>
  <section id="team-section">
    <div id="team-content" class="content has-text-centered">
      <div v-for="member of team" :key="member.name" class="team-member">
        <img v-lazy-load :src="'/meet-the-team/' + member.pic" />
        <p>{{ member.name }}</p>
        <p>{{ member.major }} {{ member.gradYear }}</p>
        <p>Committee(s): {{ member.committees }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MeetTheTeam',
  data() {
    return {
      team: [
        {
          name: 'Jacob Miller',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Web Dev Co-Lead',
          pic: 'jacob_mtt.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../sass/theme';
#team-content {
  background: $midnight;
}
.team-member > img {
  width: 250px;
  height: 250px;
}
</style>
