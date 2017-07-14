// es6 polyfill
import 'core-js/fn/array/find-index';

import MessageBox from './components/message-box';
import Icon from './components/icon';
import Tag from './components/tag';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import CheckList from './components/check-list';
import Week from './components/week';
import Progress from './components/progress';
import LeView from './components/view';
import Card from './components/card';
import Item from './components/item';
import Rate from './components/rate';

import LeButton from './components/button';
import BaseList from './components/base-list';
import Popup from './components/Popup';
import TabBar from './components/tab-bar';
import NavBar from './components/nav-bar';
import HandBar from './components/hand-bar';
import Money from './components/money';
import Loading from './components/loading';
import Empty from './components/empty';
import Picker from './components/picker';

import locale from './locale';

const le = {
  LeButton,
  Popup,
  MessageBox,
  BaseList,
  TabBar,
  Icon,
  Tag,
  NavBar,
  HandBar,
  Money,
  Progress,
  LeView,
  Card,
  Item,
  Rate,
  Loading,
  Radio,
  Checkbox,
  CheckList,
  Empty,
  Week,
  Picker
};

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(le).forEach((key) => {
    Vue.component(le[key].name, le[key]);
  });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(le, {install}); // eslint-disable-line no-undef
