import { App } from 'vue'
import { createVuetify } from 'vuetify/dist/vuetify.js'

import 'vuetify/dist/vuetify.min.css';

export default function(app: App) {
  const vuetify = createVuetify(app.config.globalProperties.$owd.vuetify)

  app.use(vuetify)
}