import { App } from 'vue'
import { createVuetify } from 'vuetify/dist/vuetify.js'

import 'vuetify/dist/vuetify.min.css';

export default function(app: App) {
  app.use(createVuetify(app.config.globalProperties.$owd.vuetify))
}