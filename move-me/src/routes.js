import Priser from './components/Priser.vue';
import Home from './components/Home.vue';
import OffertWarning from './components/OffertWarning.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/priser', component: Priser },
  { path: '/offert', component: OffertWarning }
]