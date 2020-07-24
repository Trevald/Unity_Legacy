<template>
  <div id="app">
    <section>
      <div class="container">
        <h2 class="alternative">&lt;a&gt; <em>The Anchor element</em></h2>
        <A />
        <A state="hover" />
        <A state="focus" />
        <A state="active" />
        <A state="muted" />
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="alternative">&lt;h1&gt; - &lt;h6&gt; <em>The Headings</em></h2>
        <H2 />
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="alternative">&lt;input&gt; <em>Input</em></h2>
        <div
          class="layout vertical"
          style="display: flex; flex-direction: column"
        >
          <label for="input-1">Firstname</label>
          <input
            type="text"
            id="input-1"
            placeholder="Today is the greatest"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import A from "./components/tags/A";
import H2 from "./components/tags/H2";

export default {
  name: "App",
  components: {
    A,
    H2
  }
};
</script>
