<template>
  <div id="app">
    <section>
      <div class="container">
        <h2>&lt;a&gt;: The Anchor element</h2>
        <A />
        <A state="hover" />
        <A state="focus" />
        <A state="active" />
        <A state="muted" />
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
