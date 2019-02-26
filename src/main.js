import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import iView from "iview";
// import VueRouter from "vue-router";
import axios from "./axios";
import VueAxios from "vue-axios";
import store from "./store/store";
import VueQuillEditor from "vue-quill-editor";

import "./styles/common.css";
// import "iview/dist/styles/iview.css";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";

import Comments from '@/comments'
// import CommentService from '@/request/comments/comment'
// import ReplyService from '@/request/comments/reply'

Vue.use(Comments);

import base from "./base";
Vue.use(base);

Vue.use(VueAxios, axios);
Vue.use(iView);
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
