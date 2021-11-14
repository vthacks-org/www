<template>
  <section id="details-section" class="section">
    <div id="detail-content" class="is-flex has-text-centered">
      <h1 class="contrast title is-1">
        Pre-Registration for VTHacks IX is open!
      </h1>

      <!--<p class="is-size-5">Feb 26-28, 2021</p>
      <p class="is-size-5">
        {{ statusMessage }}
      </p>
      -->
      <p class="is-size-5">
        Tentatively Scheduled for the weekend of February 26th
        <!-- <a href="https://forms.gle/S9vXkJdpDLJuf7ko7" target="_blank">here</a> -->
      </p>
      <p class="is-flex centered" style="justify-content: center">
        <button
          id="register-button"
          class="is-flex button is-link is-outlined"
          aria-haspopup="false"
          aria-controls="pre-register"
        >
          <a
            id="register-link"
            href="https://forms.gle/S9vXkJdpDLJuf7ko7"
            target="_blank"
          >
            Pre-Register now!
          </a>
        </button>
        <!-- <a href="https://forms.gle/S9vXkJdpDLJuf7ko7" target="_blank">here</a> -->
      </p>

      <!-- <p>Tenatively scheduled for the weekend of February 26th</p> -->
      <!-- <a id="plane-button" href="https://live.vthacks.com/" target="_blank"></a> -->
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
      statusMessage: 'VTHacks 9 is defaultDays days away!',
    }
  },
  created() {
    this.updateDaysLeft()
  },
  methods: {
    updateDaysLeft() {
      /* month is 0-11 for some reason where date is 1-31 */
      const startHour = new Date(2021, 1, 26, 16)
      const sameDay = new Date(2021, 1, 26)
      const endDate = new Date(2021, 1, 28, 14)
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
      const daysLeft = Math.floor((sameDay - currentDate) / 86400000) + 1
      this.statusMessage = this.statusMessage.replace('defaultDays', daysLeft)
      if (daysLeft === 1) {
        this.statusMessage = this.statusMessage.replace('days', 'day')
        return
      }
      if (daysLeft === 0) {
        this.statusMessage = 'VTHacks IX starts today!'
      }
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
  padding: 6vh 1vw;
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
  text-transform: none;
  mix-blend-mode: multiply;
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
</style>
