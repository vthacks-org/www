<template>
  <section id="details-section" class="section">
    <div id="detail-content" class="is-flex has-text-centered">
      <h1 class="contrast title is-1">Registration for VTHacks IX is open!</h1>

      <p class="is-size-5 countdown">
        Register to attend VTHacks IX, February 25 - 27th, 2022
        <!-- <a href="https://forms.gle/9nCe4389KENDdNYw7" target="_blank">here</a> -->
      </p>
      <p class="is-size-5">{{ statusMessage }}</p>
      <!-- <p class="is-flex centered" style="justify-content: center">
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

      <!-- <p>Tenatively scheduled for the weekend of February 26th</p> -->
      <a id="plane-button" href="https://live.vthacks.com/" target="_blank"
        ><img src="~/assets/plane.svg" alt="Plane button"
      /></a>
    </div>
    <!--    <div class="content">-->
    <!--      <h3 class="title is-3">Virginia Tech</h3>-->
    <!--      <h4 class="title is-4">February 26-28, 2021</h4>-->
    <!--      <h4 class="title is-4">Surge Space Building</h4>-->
    <!--      <h4 class="title is-4">-->
    <!--        435 Turner St NW,<br />Blacksburg VA 24060-->
    <!--      </h4>-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: 'DetailsSection',
  data() {
    return {
      statusMessage:
        'defaultDays days, defaultHours hours, defaultMinutes minutes, defaultSeconds seconds until VTHacks IX!',
      defaultStatusMessage:
        'defaultDays days, defaultHours hours, defaultMinutes minutes, defaultSeconds seconds until VTHacks IX!',
    }
  },
  created() {
    this.updateDaysLeft()
  },
  methods: {
    updateDaysLeft() {
      /* month is 0-11 for some reason where date is 1-31 */
      const startHour = new Date(2022, 1, 25, 17)
      const endDate = new Date(2022, 1, 27, 14)
      const currentDate = new Date()

      /* if vthacks is happening or past: */
      if (endDate - currentDate < 0) {
        this.statusMessage = `Thanks for coming!
        Stay up to date by following us on social media!`
        return
      } else if (endDate - currentDate > 0 && startHour - currentDate < 0) {
        this.statusMessage = 'Welcome to VTHacks IX!'
        return
      }

      /* +1 because it the current day isn't included */
      const daysLeft = Math.floor(
        (startHour - currentDate) / (1000 * 60 * 60 * 24)
      )
      const hoursLeft = Math.floor(
        ((startHour - currentDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
        this.statusMessage = 'VTHacks IX starts today!'
      }
      setTimeout(() => this.updateDaysLeft(), 1000)
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
  margin-top: 0.5vh;
  color: white;
  background-color: $peach;
  width: fit-content;
  border-color: $peach;
  border-radius: 0.25rem;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;
}

#register-link {
  color: white;
  // background-color: $peach;
  // width: fit-content;
}

.contrast {
  color: $peach;
}

// .btn-content {
//   // font-size: 1.5rem;
//   display: flex;
//   justify-content: center;
//   justify-self: center;
//   align-self: center;
//   align-content: center;
// }

@media (max-width: $min-width) {
  // .title {
  //   color: $peach;
  // }
}

.countdown {
  width: 620px;
}
</style>
