<template>
  <div id="schedule-section">
    <h1 class="futuristic pink" data-text="SCHEDULE">schedule</h1>
    <div class="seperator pink large"></div>

    <div class="schedule-breakdown">
      <!-- <div style="flex: 1"></div>
      <div class="neon-sign">
          <img id="neon-sign-on" src="../assets/neon_sign.svg"/>
          <img id="neon-sign-off" src="../assets/neon_sign_off.svg">
      </div>
      <div style="flex: 1"></div> -->
      <div class="schedules">
        <ul class="schedule">
          <div class="container">
            <div class="date"> Friday </div>
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

        <ul class="schedule">          <div class="container">
            <div class="date"> Saturday  </div>
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
          <div class="date"> Sunday   </div>
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
          start: '5:00 PM',
          end: '',
        },
        {
          title: 'Dinner',
          description: '',
          date: 'Friday',
          start: '5:30 PM',
          end: '7:00 PM',
        },
        {
          title: 'Opening Ceremony',
          description: 'MCB 100',
          date: 'Friday',
          start: '7:00 PM',
          end: '7:40 PM',
        },
        {
          title: 'Team Formation',
          description: 'MCB 100',
          date: 'Friday',
          start: '7:40 PM',
          end: '8:00 PM',
        },
        {
          title: 'Hacking Begins',
          description: '',
          date: 'Friday',
          start: '8:00 PM',
          end: '',
        },
        {
          title: 'MLH - CTF',
          description: 'Room 118C',
          date: 'Friday',
          start: '8:00 PM',
          end: '9:00 PM',
        },
        {
          title: 'Google Workshop',
          description: 'Room 118C',
          date: 'Friday',
          start: '8:15 PM',
          end: '9:15 PM',
        },
        {
          title: 'CoStar Workshop',
          description: 'Room 118C',
          date: 'Friday',
          start: '9:30 PM',
          end: '10:30 PM',
        },
        {
          title: 'Beginner Workshop',
          description: 'Room 103A',
          date: 'Friday',
          start: '10:45 PM',
          end: '11:15 PM',
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
          title: 'Morning Yoga',
          description: 'Room 103A',
          date: 'Saturday',
          start: '8:30 AM',
          end: '9:30 AM',
        },
        {
          title: 'VT Helping PAWS (Therapy Dogs)',
          description: 'Room 103A',
          date: 'Saturday',
          start: '10:00 AM',
          end: '11:00 AM',
        },
        {
          title: 'Carmax Workshop',
          description: 'Room 118C',
          date: 'Saturday',
          start: '11:00 AM',
          end: '12:00 PM',
        },
        {
          title: 'Lunch',
          description: '',
          date: 'Saturday',
          start: '12:00 PM',
          end: '1:30 PM',
        },
        {
          title: 'Capital One Workshop',
          description: 'Room 118C',
          date: 'Saturday',
          start: '1:45 PM',
          end: '2:45 PM',
        },
        {
          title: 'Pong Tournament',
          description: 'Room 103A',
          date: 'Saturday',
          start: '3:00 PM',
          end: '4:00 PM',
        },
        {
          title: 'Beginner Workshop',
          description: 'Room 103A',
          date: 'Saturday',
          start: '4:15 PM',
          end: '4:45 PM',
        },
        {
          title: 'MLH - Werewolf',
          description: 'Room 118C',
          date: 'Saturday',
          start: '5:00 PM',
          end: '6:00 PM',
        },
        {
          title: '80\'s Music Bingo',
          description: 'Room 103A',
          date: 'Saturday',
          start: '6:00 PM',
          end: '7:00 PM',
        },
        {
          title: 'Dinner',
          description: '',
          date: 'Saturday',
          start: '7:00 PM',
          end: '8:00 PM',
        },
        {
          title: 'Smash Tournament (with VT Smash)',
          description: '',
          date: 'Saturday',
          start: '7:30 PM',
          end: '10:30 PM',
        },
        {
          title: 'Devpost Initial Submission',
          description: '',
          date: 'Saturday',
          start: '9:00 PM',
          end: '',
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
          end: '9:00 AM',
        },
        {
          title: 'Hacking Ends',
          description: '',
          date: 'Sunday',
          start: '8:00 AM',
          end: '',
        },
        {
          title: 'Expo',
          description: '',
          date: 'Sunday',
          start: '10:30 AM',
          end: '12:30 PM',
        },
        {
          title: 'Lunch',
          description: '',
          date: 'Sunday',
          start: '11:00 AM',
          end: '1:30 PM',
        },
        {
          title: 'Closing Ceremony',
          description: 'MCB 100',
          date: 'Sunday',
          start: '1:30 PM',
          end: '2:30',
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
    font-family: 'Inconsolata', monospace;
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
        font-size: 2em;
      }
      font-size: 1.75em;
      font-family: 'Inconsolata', monospace;
    }

    .schedules{
      flex-grow: 4;
      display: flex;
      justify-content: center;
      margin: 8px;

      @media only screen and (max-width: 767px) {
        padding: 20px;
        flex-direction: column;
      }

      ul.schedule {
        font-family: 'Inconsolata', monospace;
        padding: 0;
        flex-grow: 1;
        display: flex;
        list-style-type: none;
        max-width: 25%;
        margin: 0 auto;

        @media only screen and (max-width: 767px) {
          margin: 10px; // Things get squished on mobile now
          max-width: 100%;

          .schedule-item {
            .time, .title, .description {
              font-size: 1em;
            }
          }
        }
        .container {
          align-items: center;
          margin: 0 auto;

          @media only screen and (max-width: 767px) {
            margin: 0;
          }
        }
        .schedule-item {
          padding-bottom: 20px;
        }
        .time {
          font-family: 'Inconsolata', monospace;
          color: $neon-pink;
          font-size: 1.2em;
          line-height: 1.2em;
        }
        .title {
          margin-top: -2px;
          font-size: 1.2em;
          color: grey;
        }
        .description {
          margin-top: -2px;
          font-size: 1.2em;
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

