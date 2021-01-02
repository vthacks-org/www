<template>
  <section id="details-section" class="section">
    <div id="detail-content" class="is-flex has-text-centered">
      <h1 class="title is-1">VTHacks 8</h1>
      <p>Feb 26-28, 2021</p>
      <p>
        {{ statusMessage }}
      </p>
      <p>
        Due to COVID-19 this year we are hosting VTHacks 8 completely online.
      </p>
    </div>
    <!--    <div class="where">-->
    <!--      <div class="where-title">Virginia Tech</div>-->
    <!--      <div class="where-location">February 26-28, 2021</div>-->
    <!--      <div class="where-location">Surge Space Building</div>-->
    <!--      <div class="where-location">-->
    <!--        435 Turner St NW,<br />Blacksburg VA 24060-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: 'DetailsSection',
  data() {
    return {
      statusMessage: 'VTHacks 8 is defaultDays days away!',
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
        this.statusMessage = 'Welcome to VTHacks 8!'
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
        this.statusMessage = 'VTHacks 8 starts today!'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/theme';

#detail-content {
  justify-content: center;
  flex-direction: column;
}
</style>
