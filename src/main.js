import Vue from "vue"
import App from "./App.vue"

import "./unity/unity.css"

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount("#app")
