<template>
  <div id="schedule-section">
    <h1 class="futuristic pink" data-text="SCHEDULE">schedule</h1>
    <div class="seperator pink large"></div>

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
              <div class="time">
                {{event.start}}
                <span v-if="event.end">- <span class="nowrap">{{event.end}}</span></span>
              </div>
              <div class="title"> {{event.title}}</div>
              <div v-if="event.description" class="description"> {{event.description}}</div>
            </li>
          </div>
        </ul>

        <ul class="schedule">
          <div class="container">
            <div class="date"> Sat  </div>
            <div class="seperator blue small"></div>
              <li v-for="event in events" v-if="event.date == 'Saturday'" class="schedule-item">
                <div class="time">
                  {{event.start}}
                  <span v-if="event.end">- <span class="nowrap">{{event.end}}</span></span>
                </div>
                <div class="title"> {{event.title}}</div>
              </li>
          </div>
        </ul>

        <ul class="schedule">
        <div class="container">
          <div class="date"> Sun   </div>
          <div class="seperator blue small"></div>
          <li v-for="event in events" v-if="event.date == 'Sunday'" class="schedule-item">
            <div class="time">
              {{event.start}}
              <span v-if="event.end">- <span class="nowrap">{{event.end}}</span></span>
            </div>
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
          end: '',
        },
        {
          title: 'Opening Ceremony',
          description: '',
          date: 'Friday',
          start: '8:00 PM',
          end: '',
        },
        {
          title: 'Team Formation',
          description: '',
          date: 'Friday',
          start: '8:45 PM',
          end: '',
        },
        {
          title: 'Hacking Begins',
          description: '',
          date: 'Friday',
          start: '9:00 PM',
          end: '',
        },
        {
          title: 'J. B. Hunt Tech Talk',
          description: 'Room 118C',
          date: 'Friday',
          start: '9:30 PM',
          end: '10:30 PM',
        },
        {
          title: 'MicroStrategy Tech Talk',
          description: '',
          date: 'Friday',
          start: '10:35 PM',
          end: '11:35 PM',
        },
        {
          title: 'Beginner GitHub Workshop by VT GitHub Organization',
          description: '',
          date: 'Friday',
          start: '11:40 PM',
          end: '12:10 PM',
        },
        /* Saturday */
        {
          title: 'Midnight Snack',
          description: '',
          date: 'Saturday',
          start: '12:00 AM',
          end: '',
        },
        {
          title: 'Breakfast',
          description: '',
          date: 'Saturday',
          start: '7:00 AM',
          end: '',
        },
        {
          title: 'NodeJS workshop by Kenny Worden',
          description: '',
          date: 'Saturday',
          start: '10:00 AM',
          end: '11:00 AM',
        },
        {
          title: 'Lunch',
          description: '',
          date: 'Saturday',
          start: '12:00 PM',
          end: '',
        },
        {
          title: 'Smash Bros Tournament by MicroStrategy',
          description: '',
          date: 'Saturday',
          start: '4:00 PM',
          end: '5:30 PM',
        },
        {
          title: 'Dinner',
          description: '',
          date: 'Saturday',
          start: '7:00 PM',
          end: '',
        },
        /* Sunday */
        {
          title: 'Midnight Snack',
          description: '',
          date: 'Sunday',
          start: '12:00 AM',
          end: '',
        },
        {
          title: 'Breakfast',
          description: '',
          date: 'Sunday',
          start: '7:00 AM',
          end: '',
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
          end: '',
        },
        {
          title: 'Lunch (open)',
          description: '',
          date: 'Sunday',
          start: '11:00 AM',
          end: '',
        },
        {
          title: 'Closing Ceremony',
          description: '',
          date: 'Sunday',
          start: '1:30 PM',
          end: '',
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
        font-size: 1.5em;
      }
      font-size: 2vw;
      font-family: 'Titillium Web', sans-serif;
    }

    .schedules{
      flex-grow: 1;
      display: flex;
      margin: 8px;

      ul.schedule {
        font-family: $font-VT232;
        padding: 0;
        flex-grow: 1;
        display: flex;
        list-style-type: none;
        max-width: 250px;

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
            font-size: .7em;
          }
          font-size: 1.1vw;
          line-height: 1.2em;
        }
        .title {
          margin-top: -2px;
          @media only screen and (max-width: 767px) {
            font-size: .9em;
          }
          font-size: 1.3vw;
          color: grey;
        }
        .description {
          margin-top: -2px;
          @media only screen and (max-width: 767px) {
            font-size: .9em;
          }
          font-size: 1.3vw;
          color: $neon-blue;
        }
      }
    }

  }

  .nowrap {
    white-space: nowrap;
  }

  .neon-sign {
    flex-grow: 3;
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
      animation: animation2 9s infinite;
    }
    #neon-sign-on {
      position: absolute;
      top: 0;
      animation: animation1 9s infinite;
    }
  }

  @keyframes animation1 {
    0% { opacity: .95; }
    95% { opacity: .95; }
    96% { opacity: 0; }
    97% { opacity: 0.85;}
    99% { opacity: 0; }
    100% { opacity: .95}
  }

  @keyframes animation2 {
    0% { opacity: 0; }
    95% { opacity: 0; }
    96% { opacity: 0.5; }
    97% { opacity: 0;}
    99% { opacity: 0.5; }
    100% { opacity: 0}
  }
</style>

