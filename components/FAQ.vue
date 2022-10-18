<template>
  <section id="faq-section" class="section is-medium">
    <h1 class="title">Frequently Asked Questions</h1>
    <div class="accordion">
      <div
        v-for="(question, index) in questions"
        :key="question.title"
        class="accordion-item"
      >
        <button
          id="accordion-button"
          ref="item"
          aria-expanded="false"
          @click="toggleQuestions(index)"
        >
          <span class="accordion-title">{{ question.title }}</span
          ><span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            {{ question.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: 'What is VTHacks? What is a hackathon?',
          answer:
            'VTHacks is an annual event where participants from around the globe come together and spend 36 hours learning and creating a project they are passionate about with their friends',
        },
        {
          title: 'Who can attend?',
          answer:
            'All current undergraduate, graduate, and high school students at least 18 years of age may attend VTHacks. No coding experience necessary! Non-STEM majors, first time hackers, and beginner coders are welcome and encouraged to join us!',
        },
        {
          title: 'Do I need a team?',
          answer:
            "If you are planning to compete for a prize, you may be in a team of 1-4 people. If you don't have one yet, no worries! We will have a team formation workshop before hacking begins.",
        },
        {
          title: 'Is there any cost?',
          answer:
            'VTHacks is free for all participants! This includes free food throughout the weekend, T-shirts, swag, and more!',
        },
        {
          title: 'Do I need to know how to program?',
          answer:
            'No! We have workshops running throughout the weekend to help you learn everything you need to know.',
        },
        {
          title: "Isn't hacking illegal?",
          answer:
            'In the context of a hackathon, "hacking" is to build a project over the length of the event. We are excited to welcome you as a hacker at VTHacks!',
        },
        {
          title: 'Any other questions',
          answer:
            'Contact us at hacker@vthacks.com if you have any questions, concerns, or feedback',
        },
      ],
    }
  },
  methods: {
    toggleQuestions(index) {
      this.$refs.item.forEach((item, openedIndex) => {
        if (
          index === openedIndex &&
          item.getAttribute('aria-expanded') !== 'true'
        ) {
          item.setAttribute('aria-expanded', 'true')
        } else {
          item.setAttribute('aria-expanded', 'false')
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
@import '../sass/theme';

.section {
  background: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

//code source here: https://codepen.io/kathykato/pen/MoZJom?editors=0110
.accordion {
  button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: white;
    font-size: 1.15rem;
    font-weight: 700;
    border: none;
    background: none;
    outline: none;

    &:hover,
    &:focus {
      cursor: pointer;
      color: lightblue;

      &::after {
        cursor: pointer;
        color: lightblue;
        border: 1px solid lightblue;
      }
    }

    .accordion-title {
      padding: 1em 1.5em 1em 0;
    }

    .icon {
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 0;
      width: 22px;
      height: 22px;
      border: 1px solid;
      border-radius: 22px;

      &::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 5px;
        width: 10px;
        height: 2px;
        background: currentColor;
      }

      &::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 9px;
        width: 2px;
        height: 10px;
        background: currentColor;
      }
    }
  }

  .accordion-content {
    opacity: 0;
    max-height: 0;
    overflow: auto;
    transition: opacity 200ms linear, max-height 200ms linear;
    will-change: opacity, max-height;

    p {
      font-size: 1rem;
      font-weight: 500;
      margin: 2em 0;
    }
  }

  button[aria-expanded='true'] {
    color: white;

    .icon {
      &::after {
        width: 0;
      }
    }

    + .accordion-content {
      opacity: 1;
      max-height: 200px;
      transition: all 200ms linear;
      will-change: opacity, max-height;
    }
  }

  .accordion-item {
    border-bottom: 1px solid lightgray;

    button[aria-expanded='true'] {
      border-bottom: 1px solid lightblue;
    }
  }
}
</style>
