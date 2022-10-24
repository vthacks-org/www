<!-- <html> -->
<template>
  <section id="team-section" class="section">
    <!-- <iframe
      src="https://tally.so/embed/nrjZ0M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      style="background: white"
      height="698"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="VTHacks X Registration"
    ></iframe> -->
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
          committees: 'Sponsorship Lead',
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
          name: 'Shardul Dhongade',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'shardul_mtt.jpg',
        },
        {
          name: 'Ramaraja Ramanujan',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'ram_mtt.jpg',
        },
        {
          name: 'Atin Kolli',
          gradYear: 2024,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'atin_mtt.jpg',
        },
        {
          name: 'Jay Katyan',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Logistics, Graphics',
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
          name: 'Griffin Ogura',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'griffin_mtt.jpg',
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
          name: 'Kuhu Pandit',
          gradYear: 2026,
          major: 'Computer Science',
          committees: 'Sponsorship, PR',
          pic: 'kuhu_mtt.jpeg',
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
          name: 'Raaghav Om',
          gradYear: 2026,
          major: 'Computer Engineering',
          committees: 'Sponsorship, Logistics',
          pic: 'raaghav_mtt.jpg',
        },
        {
          name: 'Luke DiGiovanna',
          gradYear: 2025,
          major: 'Computer Science',
          committees: 'Web Dev',
          pic: 'luke_mtt.jpg',
        },
        {
          name: 'Veda Hegde',
          gradYear: 2024,
          major: 'Computer Science, Mathematics',
          committees: 'Sponsorship, Logistics',
          pic: 'veda_mtt.jpg',
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
  background-position: bottom;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

#team-content {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 2rem;
}

.title {
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  padding-bottom: 1rem;
}

.team-member {
  background: hsla(259, 65%, 31%, 0.3);
  width: 300px;
  justify-self: center;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  border-width: 1px;
  color: white;
  font-size: 17px;
  box-shadow: 1px 1px 1px black;
  // border: 1px solid red;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  p {
    margin-bottom: 0;
    color: white;

    strong {
      color: white;
    }
  }
}

.committee-tag {
  width: '';
}
</style>
