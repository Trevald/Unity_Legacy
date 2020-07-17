<template>
  <div id="app">
    <section>
      <div class="container">
        <A />
        <A state="hover" />
        <A state="focus" />
        <A state="active" />
      </div>
    </section>
  </div>
</template>

<script>
import A from "./components/tags/A";

export default {
  name: "App",
  components: {
    A
  }
};
</script>
