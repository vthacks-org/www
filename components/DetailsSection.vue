<template>
  <section id="details-section" class="section">
    <div id="detail-content" class="is-flex has-text-centered">
      <!-- <h1 class="contrast title is-1">Thank you for an amazing VTHacks X!</h1>

      <p class="is-size-5 countdown">
        If you participated in VTHacks X, please fill out the
        <a href="https://tally.so/r/wgVNP3" target="_blank">Post Event Survey</a
        >!
      </p> -->
      <h1 class="contrast title is-1">VTHacks X Coming Soon!</h1>

      <p class="is-size-5 btn-content">
        Pre-register to attend VTHacks X, November 11 - 13th, 2022
        <button v-if="showButton === true" id="register-button">
          <a href="/registration">Register Here</a>
        </button>
        <span class="counter">{{ countdownTimer }}</span>
        <button v-if="showButton === false" id="register-button">
          <a href="/https://forms.gle/6y99NRvbpMdakjXf6" target="_blank"
            >Pre-Registration</a
          >
        </button>
      </p>
      <!--<p class="is-flex centered" style="justify-content: center">
        <button
          id="register-button"
          class="is-flex button is-link is-outlined"
          aria-haspopup="false"
          aria-controls="pre-register"
        >
          <a
            id="register-link"
            href="https://forms.gle/9nCe4389KENDdNYw7"
            target="_blank"
          >
            Register now!
          </a>
        </button>
        <a href="https://forms.gle/9nCe4389KENDdNYw7" target="_blank">here</a>
      </p> -->

      <!-- <p>November 11-13, 2022</p> -->
      <!-- <a id="plane-button" href="https://live.vthacks.com/" target="_blank"
        ><img src="~/assets/plane.svg" alt="Plane button"
      /></a> -->
    </div>
    <!-- <div class="content">
      <h3 class="title is-3">Virginia Tech</h3>
      <h4 class="title is-4">February 26-28, 2021</h4>
      <h4 class="title is-4">Surge Space Building</h4>
      <h4 class="title is-4">435 Turner St NW,<br />Blacksburg VA 24060</h4>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'DetailsSection',
  data() {
    return {
      statusMessage:
        'defaultDays days, defaultHours hours, defaultMinutes minutes, defaultSeconds seconds until Registration!',
      defaultStatusMessage:
        'defaultDays days, defaultHours hours, defaultMinutes minutes, defaultSeconds seconds until Registration!',
      countdownTimer: '',
      showButton: false,
    }
  },
  created() {
    this.updateDaysLeft()
    this.countdown()
  },
  methods: {
    updateDaysLeft() {
      /* month is 0-11 for some reason where date is 1-31 */
      const startHour = new Date(2022, 10, 1, 12)
      const endDate = new Date(2022, 9, 27)
      const currentDate = new Date()

      /* if vthacks is happening or past: */
      if (endDate - currentDate < 0) {
        this.statusMessage = currentDate
        return
      } else if (endDate - currentDate > 0 && startHour - currentDate < 0) {
        this.statusMessage = 'Welcome to VTHacks X!'
        return
      }
      /* +1 because it the current day isn't included */
      const daysLeft = Math.floor(currentDate.getDay() - startHour.getDay())
      const hoursLeft = Math.floor(
        currentDate.getHours() - startHour.getHours()
      )
      const minutesLeft = Math.floor(
        ((startHour - currentDate) % (1000 * 60 * 60)) / (1000 * 60)
      )
      const secondsLeft = Math.floor(
        ((startHour - currentDate) % (1000 * 60)) / 1000
      )
      this.statusMessage = this.defaultStatusMessage
      this.statusMessage = this.statusMessage.replace(
        'defaultDays',
        daysLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 1,
          useGrouping: false,
        })
      )
      this.statusMessage = this.statusMessage.replace(
        'defaultHours',
        hoursLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      )
      this.statusMessage = this.statusMessage.replace(
        'defaultMinutes',
        minutesLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      )
      this.statusMessage = this.statusMessage.replace(
        'defaultSeconds',
        secondsLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      )
      if (daysLeft === 1) {
        this.statusMessage = this.statusMessage.replace('days', 'day')
        return
      }
      if (daysLeft === 0) {
        // this.statusMessage = 'VTHacks X starts today!'
      }
      setTimeout(() => this.updateDaysLeft(), 1000)
    },

    countdown() {
      const deadline = new Date('oct 1, 2022 12:00:00').getTime()
      const t = deadline - new Date().getTime()

      // milliseconds to time conversions
      const days = Math.floor(t / (1000 * 60 * 60 * 24))
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((t % (1000 * 60)) / 1000)

      if (t < 0) {
        this.showButton = true
        this.countdownTimer = ''
      } else {
        // note there are spaces at the end of lines
        this.countdownTimer = `
      ${days} ${days === 1 ? 'day' : 'days'} 
      ${hours} ${hours === 1 ? 'hour' : 'hours'} 
      ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} 
      ${seconds} ${seconds === 1 ? 'second' : 'seconds'} 
      until Registration
      `
      }

      setTimeout(() => this.countdown(), 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

a {
  color: $peach;
}

#detail-content {
  justify-content: center;
  flex-direction: column;
}

#plane-button {
  padding: 8vh 1vw;
}

#register-button {
  margin-top: 1vh;
  background-color: #06bcc1;
  border-color: #06bcc1;
  padding: 20px 30px;
  border-radius: 0.25rem;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;

  a {
    color: white;
    font-size: 20px;
  }
}

#register-button:hover {
  background-color: adjust-hue($color: #06bcc1, $degrees: 5);
  border-color: adjust-hue($color: #06bcc1, $degrees: 5);
}

#register-link {
  color: white;
  // background-color: $peach;
  // width: fit-content;
}

.contrast {
  color: $peach;
}

.btn-content {
  // font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-self: center;
  align-items: center;

  .counter {
    font-weight: 600;
  }
}

@media (max-width: $min-width) {
  // .title {
  //   color: $peach;
  // }
}
</style>
