<template>
  <div id="schedule-section">
    <h1 class="futuristic pink" data-text="SCHEDULE">schedule</h1>
    <div class="seperator pink large"></div>

    <div class="schedule-breakdown">
      <div style="flex: 1"></div>
      <div class="neon-sign">
          <img id="neon-sign-on" src="../assets/neon_sign.svg"/>
          <img id="neon-sign-off" src="../assets/neon_sign_off.svg">
      </div>
      <div style="flex: 1"></div>
      <div class="schedules">
        <ul class="schedule">
          <div class="container">
            <div class="date"> Fri </div>
            <div class="seperator blue small"></div>
            <li v-for="event in events" v-if="event.date == 'Friday'" class="schedule-item">
              <div class="time">
                {{event.start}}
                <span v-if="event.end">-<span class="nowrap">{{event.end}}</span></span>
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
                  <span v-if="event.end">-<span class="nowrap">{{event.end}}</span></span>
                </div>
                <div class="title"> {{event.title}}</div>
                <div v-if="event.description" class="description"> {{event.description}}</div>
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
              <span v-if="event.end">-<span class="nowrap">{{event.end}}</span></span>
            </div>
            <div class="title"> {{event.title}}</div>
            <div v-if="event.description" class="description"> {{event.description}}</div>
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
          description: 'Marco & Luca',
          date: 'Friday',
          start: '6:30 PM',
          end: '',
        },
        {
          title: 'Opening Ceremony',
          description: 'MCB 100',
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
          title: 'Intro to Data Analytics" by J. B. Hunt',
          description: 'Room 118C',
          date: 'Friday',
          start: '9:30 PM',
          end: '10:30 PM',
        },
        {
          title: '"Future of Data Analytics" by MicroStrategy',
          description: 'Room 118C',
          date: 'Friday',
          start: '10:35 PM',
          end: '11:35 PM',
        },
        {
          title: 'Beginner GitHub Workshop by VT GitHub Organization',
          description: 'Room 118C',
          date: 'Friday',
          start: '11:40 PM',
          end: '12:10 PM',
        },
        /* Saturday */
        {
          title: 'Midnight Snack',
          description: 'Campus Cookies',
          date: 'Saturday',
          start: '12:00 AM',
          end: '',
        },
        {
          title: 'Breakfast',
          description: 'Idego Coffee & Carol Lee Donuts',
          date: 'Saturday',
          start: '7:00 AM',
          end: '',
        },
        {
          title: 'NodeJS Workshop by Kenny Worden',
          description: '',
          date: 'Saturday',
          start: '10:00 AM',
          end: '11:00 AM',
        },
        {
          title: 'Lunch',
          description: 'Zeppoli\'s',
          date: 'Saturday',
          start: '12:00 PM',
          end: '',
        },
        {
          title: 'Smash Bros Tournament by MicroStrategy',
          description: 'Room 118C',
          date: 'Saturday',
          start: '4:00 PM',
          end: '5:30 PM',
        },
        {
          title: 'Dinner',
          description: 'Chinese Kitchen',
          date: 'Saturday',
          start: '7:00 PM',
          end: '',
        },
        /* Sunday */
        {
          title: 'Midnight Snack',
          description: 'Next Door Bakeshop & Gobblecakes',
          date: 'Sunday',
          start: '12:00 AM',
          end: '',
        },
        {
          title: 'Breakfast',
          description: 'Idego Coffee & Other',
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
          description: 'Zeppoli\'s',
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
      flex-grow: 4;
      display: flex;
      justify-content: center;
      margin: 8px;

      ul.schedule {
        font-family: $font-VT232;
        padding: 0;
        flex-grow: 1;
        display: flex;
        list-style-type: none;
        max-width: 250px;
        margin: 0 auto;

        @media only screen and (max-width: 767px) {
          margin: 10px; // Things get squished on mobile now
        }
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
            font-size: .6em;
          }
          @media only screen and (min-width: 1600px) {
            font-size: 1.0em;
          }
          font-size: 1.1vw;
          line-height: 1.2em;
        }
        .title {
          margin-top: -2px;
          @media only screen and (max-width: 767px) {
            font-size: .9em;
          }
          @media only screen and (min-width: 1600px) {
            font-size: 1.25em;
          }
          font-size: 1.15em;
          color: grey;
        }
        .description {
          margin-top: -2px;
          // @media only screen and (max-width: 767px) {
          //   font-size: .9em;
          // }
          @media only screen and (max-width: 767px) {
            font-size: .85em;
          }
          font-size: 1.1em;
          color: $neon-blue;
        }
      }
    }

  }

  .nowrap {
    display: inline-block;
    white-space: nowrap;
    padding-left: 10px;
  }

  .neon-sign {
    flex-grow: 5;
    position: relative;
    min-width: 250px;
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

