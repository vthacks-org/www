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
          title: 'Why is the moon sometimes out during the day?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti',
        },
        {
          title: 'What is the meaning of life?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti',
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
