<template> 
  <div class="TerminalCheckbox">
    <input
      :id="id"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"/>
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'TerminalCheckbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: ['id', 'label', 'checked'],
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<!-- SCSS is a CSS preprocessor. Check out http://sass-lang.com/ -->
<style lang="scss" scoped>
  @import '../styles/form-colors.scss';
  @import url('https://fonts.googleapis.com/css?family=VT323');

  .TerminalCheckbox {
    padding: 5px;
  }

  label {
    color: $terminal-text-color;
    font-size: $terminal-font-size - 10px;
  }

  input[type="checkbox"]{
    opacity: 0;
    color: $terminal-text-color;
    display: block;
    height: 0;
    width: 0;
    & + label {
      &:before{
        position: relative;
        top: 0px;
        margin-right: 0.5em;
        content: '[ ]';
      }
    }

    &:checked + label {
      &:before{
        content:'[V]';
      }
    }
  }

</style>