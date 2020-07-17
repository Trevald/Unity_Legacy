<template>
  <p>
    <a
      href="#"
      :class="className"
      @click.prevent="doNothing"
    >This is {{text}} state </a>
  </p>
</template>

<script>
export default {
  name: "A",

  props: {
    state: String
  },

  computed: {
    className() {
      switch (this.state) {
        case "focus":
          return "is-focus";
        case "active":
          return "is-active";
        case "hover":
          return "is-hover";
        default:
          return "";
      }
    },
    text() {
      switch (this.state) {
        case "focus":
          return "text link in focus";
        case "active":
          return "text link in active";
        case "hover":
          return "text link in hover";
        default:
          return "text link in idle";
      }
    }
  },

  methods: {
    doNothing() {
      return;
    }
  }
};
</script>