<template>
  <section id="team-section">
    <div id="team-content" class="content has-text-centered">
      <div v-for="member of team" :key="member.name" class="team-member">
        <img v-lazy-load :src="'/meet-the-team/' + member.pic" />
        <p>{{ member.name }}</p>
        <p>{{ member.major }} {{ member.gradYear }}</p>
        <p class="committee-tag">Committee(s): {{ member.committees }}</p>
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
          name: 'Patrick Riley',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Director',
          pic: 'peter_mtt.jpg',
        },
        {
          name: 'Zane Hasnain',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Co-Director',
          pic: 'zane_mtt.jpg',
        },
        {
          name: 'Peter Murphy',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Public Relations, Executive',
          pic: 'peter_mtt.jpg',
        },
        {
          name: 'Jacob Miller',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Web Dev Co-Lead',
          pic: 'jacob_mtt.jpg',
        },
        {
          name: 'Brian Wieder',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Web Dev Co-Lead',
          pic: 'brian_mtt.jpg',
        },
        {
          name: 'Parvesh Samayamanthula',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Sponsorship',
          pic: 'parvesh_mtt.jpg',
        },
        {
          name: 'Shardul Dhongade',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Logistics, Sponsorship',
          pic: 'shardul_mtt.jpg',
        },
        {
          name: 'Katie Weyrich',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Graphics Lead',
          pic: 'katie_mtt.jpg',
        },
        {
          name: 'Krish Ganotra',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Logistics, Sponsorship',
          pic: 'krish_mtt.jpg',
        },

        {
          name: 'Anika Thatavarthy',
          gradYear: 2024,
          major: 'General Engineering',
          committees: 'Sponsorship, UX',
          pic: 'anika_mtt.jpg',
        },
        {
          name: 'Mehak Kamal',
          gradYear: 2022,
          major: 'Computer Science',
          committees: 'Sponsorship',
          pic: 'mehak_mtt.jpg',
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 3vw;
}
.team-member > img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
.committee-tag {
  width: '';
}
</style>
