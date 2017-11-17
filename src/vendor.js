import Vue from 'vue'
import Loading from './common/Loading.vue'
import Modal from './common/Modal.vue'
import { loadingWrapper } from './utils'

Vue.component('o-loading', Loading)
Vue.component('o-modal', Modal)

/* plugin for automatically binding ${name}Error and ${name}Loading values to async methods
 Usage:
 export default {
   loading: ['getFromApi']
   methods: {
     getFromApi() {
       return this.$store.dispatch('getFromAPI')  // function must return promise!
     }
   },
 }

 Now data contains getFromApiLoading and getFromApiError synced with last call of a method
 */
Vue.mixin({
  beforeCreate () {
    const loadingMethodsList = this.$options.loading
    if (loadingMethodsList) {
      const additionalData = {}
      for (const k of loadingMethodsList) {
        const method = this.$options.methods[k]
        const loadingVar = `${k}Loading`
        const errorVar = `${k}Error`
        if (!method) {
          throw new Error(`Not found method ${k}`)
        }
        additionalData[loadingVar] = false
        additionalData[errorVar] = null
        this.$options.methods[k] = function () {
          const result = method.apply(this, arguments)
          if (result && result.then) {
            return loadingWrapper.call(this, result, { loadingVar, errorVar })
          }
          return result
        }
      }

      const oldData = this.$options.data
      this.$options.data = function () {
        const data = oldData ? oldData.apply(this, arguments) : {}
        return { ...additionalData, ...data }
      }
    }
  }
})
