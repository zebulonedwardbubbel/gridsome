// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
  console.log(window.history.scrollRestoration);
}

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    // if ((from.name == 'project' && to.name == 'project') || ((from.name == 'work' && to.name == 'project'))) {
    //   return window.scrollHeight
    // }
    // return {x: 0, y: 0}
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
}