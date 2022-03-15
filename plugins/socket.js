import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: 'https://stoic-stonebraker-26d72b.netlify.app' || 'http://localhost:3000',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
