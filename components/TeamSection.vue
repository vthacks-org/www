<template>
  <section id="team-section">
    <div class="content has-text-centered">
      <h1 class="title is-1">Fall 2022 Team</h1>
    </div>
    <div id="team-content" class="content has-text-centered">
      <div v-for="member of team" :key="member.name" class="team-member">
        <img v-lazy-load :src="'/meet-the-team/' + member.pic" />
        <p>
          <strong>{{ member.name }}</strong>
        </p>
        <p class="committee-tag">Committee(s): {{ member.committees }}</p>
        <p>{{ member.major }} {{ member.gradYear }}</p>
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
          name: 'Krish Ganotra',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Director, Internal Operations',
          pic: 'krish_mtt.jpg',
        },
        {
          name: 'Zane Hasnain',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Director, External Operations',
          pic: 'zane_mtt.jpg',
        },
        {
          name: 'Patrick Riley',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Senior Advisor',
          pic: 'patrick_mtt.jpg',
        },
        {
          name: 'Anika Thatavarthy',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Sponsorship lead',
          pic: 'anika_mtt.jpg',
        },
        {
          name: 'Michael Peters',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Logistics Lead',
          pic: 'michael_mtt.jpg',
        },
        {
          name: 'Vinit Anishkumar Masrani',
          gradYear: 2023,
          major: 'Computer Science',
          committees: 'Logistics, UX',
          pic: 'vinit_mtt.jpg',
        },
        {
          name: 'Katie Weyrich',
          gradYear: 2023,
          major: 'Graphic Design',
          committees: 'Graphics Lead',
          pic: 'katie_mtt.jpg',
        },
        {
          name: 'Shardul Dhongade',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev, Logistics',
          pic: 'shardul_mtt.jpg',
        },
        {
          name: 'Jay Katyan',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Logistics',
          pic: 'jay_mtt.jpeg',
        },
        {
          name: 'Justice Jackson',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Logistics, UX',
          pic: 'justice_mtt.jpeg',
        },
        {
          name: 'Kuhu Pandit',
          gradYear: 2026,
          major: 'Computer Science',
          committees: 'Sponsorship, PR',
          pic: 'kuhu_mtt.jpeg',
        },
        {
          name: 'Griffin Ogura',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'griffin_mtt.jpg',
        },
        {
          name: 'Ramaraja Ramanujan',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'ram_mtt.jpg',
        },
        {
          name: 'Hannah Nguyen',
          gradYear: 2026,
          major: 'Computer Science',
          committees: 'Graphics',
          pic: 'hannah_mtt.jpg',
        },
        {
          name: 'Farooq Khan',
          gradYear: 2026,
          major: 'Computer Science',
          committees: 'Sponsorship, Logistics',
          pic: 'farooq_mtt.jpg',
        },
        {
          name: 'Diya Wadhera',
          gradYear: 2025,
          major: 'BIT',
          committees: 'Graphics, UX',
          pic: 'diya_mtt.jpg',
        },
        {
          name: 'Rakesh Pillai',
          gradYear: 2025,
          major: 'Computer Engineering',
          committees: 'Web Dev',
          pic: 'rakesh_mtt.jpg',
        },
        {
          name: 'Raaghav Om',
          gradYear: 2026,
          major: 'Computer Engineering',
          committees: 'Sponsorship, Logistics',
          pic: 'raaghav_mtt.jpg',
        },
        {
          name: 'Atin Kolli',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev, Logistics',
          pic: 'atin_mtt.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../sass/theme';

#team-section {
  padding-top: 3vw;
  background: #19112a;
  flex-direction: column;
  align-items: center;
}

#team-content {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 2rem;
}

.team-member {
  background-color: $peach;
  width: 300px;
  justify-self: center;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  border-color: $peach;
  border-width: 1px;
  border-style: solid;
  color: $dark-blue;
  font-size: 17px;
  font-family: $font-mono;
  // border: 1px solid red;
}

.team-member > img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px $dark-blue solid;
}

.team-member > p {
  margin-bottom: 0;
  color: $dark-blue;
}

.team-member > p > strong {
  color: $dark-blue;
}

.committee-tag {
  width: '';
}

h1 {
  // display: none; // Remove to show sponsor text
  color: $peach;
  font-family: $bnr22;
}
</style>
