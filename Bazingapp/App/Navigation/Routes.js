import { Transitions } from '../Themes/'

// I18n
import I18n from '../I18n/I18n.js'

export default new class Routes {

  // Here are the "Containers" in our app (e.g. Screens).
  //
  // These routes are implemented as getter functions
  // because I like the simple calling notation, but
  // they're lazily evaluated to prevent recursion
  // when the screens themselves use this Routes file.

    get ListViewCompromises () {
      return {
        title: 'Promessas do GDF',
        component: require('../Containers/ListViewCompromises').default,
        leftButton: 'HAMBURGER'
      }
    }
    get ItemViewCompromise () {
      return {
        title: 'Promessas 1 do GDF',
        component: require('../Containers/ItemViewCompromise').default,
        leftButton: 'HAMBURGER'
      }
    }

    get DetailCompromise () {
      return {
        title: 'Detalhe',
        component: require('../Containers/DetailCompromise').default,
        leftButton: 'BACK'
      }
    }

    get TabsScreen () {
      return {
        title: 'Explorar',
        component: require('../Containers/TabsScreen').default,
        leftButton: 'HAMBURGER'
      }
    }

  get MapviewExample () {
    return {
      title: 'Mapview Example',
      component: require('../Containers/MapviewExample').default,
      leftButton: 'BACK'
    }
  }

  get LoginScreen () {
    return {
      title: I18n.t('login'),
      component: require('../Containers/LoginScreen').default,
      customConfiguration: Transitions.modal,
      rightButton: 'FORGOT_PASSWORD',
      leftButton: 'BACK'
    }
  }

  get LoadImage () {
    return {
      title: 'Load Image',
      component: require('../Containers/LoadImage').default,
      customConfiguration: Transitions.modal,
      leftButton: 'BACK'
    }
  }

}
