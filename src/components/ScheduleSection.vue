<template>
  <div id="schedule-section">
    <h1 class="futuristic" data-text="SCHEDULE">schedule</h1>
    <div class="seperator pink large"></div>

    <p class="warn-term"> $> WARN: This schedule is just preliminary. It will update more as we get closer to the hackathon</p>
    <div class="schedule-breakdown">
      <div class="neon-sign">
          <img id="neon-sign-on" src="../assets/neon_sign.svg"/>
          <img id="neon-sign-off" src="../assets/neon_sign_off.svg">
      </div>
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

  #schedule-section {
    width: 100vw;
    height: 100vh;
    min-height: 400px;
    background-color: #000;
    display: flex;
    flex-direction: column;
  }

  .schedule-breakdown{
    margin-top: 20px;
    display: flex;
    flex-direction: row;

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
          font-size: 15px;
        }
        .title {
          margin-top: -2px;
          font-size: 20px;
          color: grey;
        }
      }


  }

  .warn-term {
    font-family: $font-VT232;
    color: yellow;
    word-wrap: normal;
    align-self: center;
  }

  .neon-sign {
    flex-grow: 2;
    position: relative;

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

  /* This probably will be going soon */
  $font-size: 50px;
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:900');
  .futuristic {
    align-self: center;
    font-family: 'Titillium Web', sans-serif;
    text-transform: uppercase;
    // main background is gradient
    display: block;
    position: relative;
    font-size: $font-size;
    margin-bottom: 10px;
    background: $pink-gradient;
    background-blend-mode: multiply;
    background-size: 10px $font-size;
    background-repeat: repeat;
    line-height: 1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    // Shadows
    &::after {
      background: none;
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      text-shadow: 1px -1px 0 rgba(255,255,255,0.5),
                   3px 1px 3px rgba(255,0,255,0.85),
                   -3px -2px 3px rgba(0,0,255,0.85),
                   1px -2px 0 rgba(255,255,255,0.8);
      z-index: -2;
    }

  }

  .seperator {
    align-self: center;
    border-style: solid;
    margin-bottom: 15px;
    border-bottom: 1px;

    &.pink {
      border-color: $neon-pink;
      background-color: $neon-pink;
    }
    &.blue {
      border-color: $neon-blue;
      background-color: $neon-blue;
    }

    &.small {
      width: 20px;
    }
    &.large {
      width: 70px;
    }

  }

  .date {
    display: inline-block;
    color: $neon-blue;
    font-size: 30px;
    font-family: 'Titillium Web', sans-serif;
  }

</style>

