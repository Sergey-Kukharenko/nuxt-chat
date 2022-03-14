import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
const options = { path: '/socket.io/' };

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: 'http://localhost:3000',
      options,
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
