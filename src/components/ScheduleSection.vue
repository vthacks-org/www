<template>
  <div id="schedule-section">
    <h1 class="futuristic pink" data-text="SCHEDULE">schedule</h1>
    <div class="seperator pink large"></div>

    <p class="warn-term"> $> WARN: This schedule is just preliminary. It will update more as we get closer to the hackathon</p>

    <div class="schedule-breakdown">
      <div class="neon-sign-padding"></div>
      <div class="neon-sign">
          <img id="neon-sign-on" src="../assets/neon_sign.svg"/>
          <img id="neon-sign-off" src="../assets/neon_sign_off.svg">
      </div>
      <div class="neon-sign-padding"></div>
      <div class="schedules">
        <ul class="schedule">
          <div class="container">
            <div class="date"> Fri </div>
            <div class="seperator blue small"></div>
            <li v-for="event in events" v-if="event.date == 'Friday'" class="schedule-item">
              <div class="time"> {{event.start}}></div>
              <div class="title"> {{event.title}}</div>
            </li>
          </div>
        </ul>

        <ul class="schedule">
          <div class="container">
            <div class="date"> Sat  </div>
            <div class="seperator blue small"></div>
              <li v-for="event in events" v-if="event.date == 'Saturday'" class="schedule-item">
                <div class="time"> {{event.start}}></div>
                <div class="title"> {{event.title}}</div>
              </li>
          </div>
        </ul>

        <ul class="schedule">
        <div class="container">
          <div class="date"> Sun   </div>
          <div class="seperator blue small"></div>
          <li v-for="event in events" v-if="event.date == 'Sunday'" class="schedule-item">
            <div class="time"> {{event.start}}></div>
            <div class="title"> {{event.title}}</div>
          </li>
        </div>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleSection',
  data() {
    return {
      events: [
        /* Friday */
        {
          title: 'Setup',
          description: '',
          date: 'Friday',
          start: '4:00 PM',
          end: '8:00 PM',
        },
        {
          title: 'Check-in Opens',
          description: '',
          date: 'Friday',
          start: '6:00 PM',
          end: '',
        },
        {
          title: 'Dinner',
          description: '',
          date: 'Friday',
          start: '6:00 PM',
          end: '7:00 PM',
        },
        {
          title: 'Opening Ceremony',
          description: '',
          date: 'Friday',
          start: '7:30 PM',
          end: '8:30 PM',
        },
        {
          title: 'Team Formation',
          description: '',
          date: 'Friday',
          start: '8:30 PM',
          end: '9:00 PM',
        },
        {
          title: 'Hacking Begins',
          description: '',
          date: 'Friday',
          start: '9:00 PM',
          end: '',
        },
        /* Saturday */
        {
          title: 'Midnight Snack',
          description: '',
          date: 'Saturday',
          start: '12:00 AM',
          end: '1:00 AM',
        },
        {
          title: 'Breakfast',
          description: '',
          date: 'Saturday',
          start: '7:00 AM',
          end: '9:30 AM',
        },
        {
          title: 'Lunch',
          description: '',
          date: 'Saturday',
          start: '12:00 PM',
          end: '1:00 PM',
        },
        {
          title: 'Dinner',
          description: '',
          date: 'Saturday',
          start: '7:00 PM',
          end: '8:00 PM',
        },
        /* Sunday */
        {
          title: 'Midnight Snack',
          description: '',
          date: 'Sunday',
          start: '12:00 AM',
          end: '1:00 AM',
        },
        {
          title: 'Breakfast',
          description: '',
          date: 'Sunday',
          start: '7:00 AM',
          end: '9:30 AM',
        },
        {
          title: 'Hacking Ends',
          description: '',
          date: 'Sunday',
          start: '9:00 AM',
          end: '',
        },
        {
          title: 'Expo',
          description: '',
          date: 'Sunday',
          start: '11:00 AM',
          end: '1:00 PM',
        },
        {
          title: 'Lunch (open)',
          description: '',
          date: 'Sunday',
          start: '11:00 AM',
          end: '1:30 PM',
        },
        {
          title: 'Closing Ceremony',
          description: '',
          date: 'Sunday',
          start: '1:30 PM',
          end: '2:30 PM',
        },
        {
          title: 'Clean Up',
          description: '',
          date: 'Sunday',
          start: '2:30 PM',
          end: '6:00 PM',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
  @import '../styles/colors';
  @import '../styles/vars';
  @import '../styles/headers';

  #schedule-section {
    width: 100%;
    padding: 24px 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: purple;
  }

  .schedule-breakdown{
    margin-top: 20px;
    display: flex;

    /* All Mobile Sizes (devices and browser) */
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    flex-direction: row;

    .date {
      display: inline-block;
      color: $neon-blue;
      @media only screen and (max-width: 767px) {
        font-size: 4vw;
      }
      font-size: 2vw;
      font-family: 'Titillium Web', sans-serif;
    }

    .schedules{
      flex-grow: 1;
      display: flex;

      ul.schedule {
        font-family: $font-VT232;
        padding: 0;
        flex-grow: 1;
        display: flex;

        .container {
          align-items: center;
          margin: 0 auto;
        }
        .schedule-item {
          padding-bottom: 20px;
        }
        .time {
          font-family: $font-2P;
          color: $neon-pink;
          /* All Mobile Sizes (devices and browser) */
          @media only screen and (max-width: 767px) {
            font-size: 2vw;
          }
          font-size: 1.1vw;
        }
        .title {
          margin-top: -2px;
          @media only screen and (max-width: 767px) {
            font-size: 2.5vw;
          }
          font-size: 1.3vw;
          color: grey;
        }
      }
    }

  }

  .warn-term {
    font-family: $font-VT232;
    color: yellow;
    word-wrap: normal;
    align-self: center;
    padding: 15px;
  }

  .neon-sign {
    flex-grow: 2;
    position: relative;
    min-height: 250px;
    img {
      width: 100%;
      height: 100%;
      align-self: center;
    }
    #neon-sign-off {
      position: absolute;
      top: 0;
      animation: animation2 3s infinite;
    }
    #neon-sign-on {
      position: absolute;
      top: 0;
      animation: animation1 3s infinite;
    }
  }

  @keyframes animation1 {
    0% { opacity: 0; }
    60% { opacity: 0; }
    65% { opacity: 0.95; }
    70% { opacity: 0.85;}
    85% { opacity: 0; }
    95% { opacity: .95}
    100% { opacity: 0;}
  }

  @keyframes animation2 {
    0% { opacity: 0.5; }
    60% { opacity: 0.5; }
    65% { opacity: 0; }
    70% { opacity: 0;}
    85% { opacity: 0.5; }
    95% { opacity: 0;}
    100% { opacity: 0.5;}
  }
</style>

