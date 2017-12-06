<template>
  <div class="TerminalInput">
    <label :for="id">{{label}}></label>
    <input
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'TerminalInput',
  props: {
    id: '',
    label: '',
    placeholder: '',
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
  @import '../styles/form-colors';
  @import '../styles/vars';

  .TerminalInput {
    padding: 5px;
  }

  input, label{
    color: $terminal-text-color;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    letter-spacing: 2px;
    font-family: $font-VT232;
    font-size: $terminal-font-size;
  }

  label {
    margin-right: 15px;
  }

  input {
    min-width: 350px;
  }

  /* Curse you autofill */
  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px $terminal-background inset;
  }

  input:-webkit-autofill {
      -webkit-text-fill-color: $terminal-text-color !important;
  }
</style>
