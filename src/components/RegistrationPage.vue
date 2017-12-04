<template>
  <div class="registration-page">
    <div class="scanlines"></div>
    <div class="window back-window">
      <div class="titlebar">
        bash &mdash; crashoverride@gibson
      </div>
      <div class="window-content">
        <div id="typed-strings">
          <p> there's a rabbit in the system. sending a flu shot <br/>
              grabbing matrix references <br/>
              trying really hard to be funny <br/>
          </p>
        </div>
        <span id="bot-typer"></span>
      </div>


      <div class="spacer"></div>
    </div>

      <div class="window centered-form front-window">
        <div class="titlebar">
          bash &mdash; {{first.toLowerCase()}}@user
        </div>
        <div class="window-content">
          <form id="registration-form">
            <TerminalInput id="firstName" label="firstName" placeholder="Zero" v-model="first"></TerminalInput>
            <TerminalInput id="lastName" label="lastName" placeholder="Cool" v-model="last"></TerminalInput>
            <TerminalInput id="email" label="email" placeholder="acidburn@gibson.hack" v-model="email"></TerminalInput>
            <TerminalCheckbox id="checkbox" label="Check it" v-model="isChecked"></TerminalCheckbox>
            <button id="submit-button" type="button" name="Submit" v-on:click.prevent="handleSubmit"></button>

          </form>
          <div style="color: lime">
            {{first}}, {{last}}, {{email}},{{isChecked}}
          </div>
        </div>
        <div class="spacer"></div>
      </div>

      <!-- <div class="bot-typer">There's a rabbit in the system. Sending a flu shot</div> -->
  </div>

</template>

<script>
import $ from 'jquery';
import Typed from 'typed.js';
import TerminalInput from './TerminalInput.vue';
import TerminalCheckbox from './TerminalCheckbox.vue';


export default {
  name: 'RegistrationPage',
  mounted() {
    this.typed = new Typed(this.$el.querySelector('#bot-typer'), {
      stringsElement: this.$el.querySelector('#typed-strings'),
      loop: false,
    });
  },
  components: {
    TerminalInput,
    TerminalCheckbox,
  },
  data() {
    return {
      first: '',
      last: '',
      email: '',
      isChecked: false,
    };
  },
  methods: {
    handleSubmit() {
      const url = 'https://script.google.com/macros/s/AKfycbxUhbMrYVzFM-KC99u0miIY4ksIuvO_XSnfsLt-QuEcFOvhuFs/exec';
      $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        data: {
          'first_name': this.first,
          'last_name': this.last,
          'email': this.email,
          'is_checked': this.isChecked,
        },
        success: function(response){
          console.log(response);
        },
      });

      // Submit resume file
      const drive = 'https://script.google.com/macros/s/AKfycbyuIuRQATz2XTOq5-LuTCKBZ-hWVIRNygPeo69kKZfpi3Ud6riv/exec';
      const fileinput= this.$el.querySelector('#file');
      var formData = new FormData();
      formData.append('file', fileinput.files[0]);

      console.log(fileinput.files[0]);
      $.ajax({
        url: drive,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response){
          console.log(response);
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
  @import '../styles/form-colors.scss';

  .registration-page {
    background-color: black;
    width: 100vw;
    height: 100vh;
    font-family: 'VT323', monospace;

    display: flex;
    align-items: center;
    justify-content: center;

    .centered-form{
      align-self: center;
    }
  }

  #bot-typer {
    color: lime;
  }

  .scanlines {
    z-index: 15;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgba(255,255,255,0) 50%,
      rgba(0,0,0,0.2) 70%,
      rgba(0,0,0,0.6));
    background-size: 100% 0.3rem;
    pointer-events: none;
  }

  .window {
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 1);
    min-width: 800px;
    min-height: 50%;
    background: black;

    & > .window-content {
      margin: 20px;
    }

    &.back-window {
      z-index: 0;
      position: absolute;
      top: 10%;
      left: 2%;
      width: 400px;
      height: 400px;
    }

    &.front-window {
      z-index: 5;
    }

    .titlebar {
      background-color: grey;
      height: 44px;
      padding: 16px;
      box-sizing: border-box;
      text-align: center;
      font-size: 20px;
    }
    .spacer {
      height: 400px;
    }
  }

</style>