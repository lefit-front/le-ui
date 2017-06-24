// es6 polyfill
import 'core-js/fn/array/find-index';

import Button from './components/button';
import Popup from './components/Popup';
import MessageBox from './components/message-box';
import Icon from './components/icon';
import Tag from './components/tag';
import Radio from './components/radio';
import CheckList from './components/check-list';
import locale from './locale';

import BaseList from './components/base-list';
import TabBar from './components/tab-bar';
import NavBar from './components/nav-bar';
import HandBar from './components/hand-bar';
import Money from './components/money';
import Loading from './components/loading';
const lemo = {
  Button,
  Popup,
  MessageBox,
  BaseList,
  TabBar,
  Icon,
  Tag,
  NavBar,
  HandBar,
  Money,
  Loading,
  Radio,
  CheckList
};

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(lemo).forEach((key) => {
    Vue.component(key, lemo[key]);
  });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(lemo, {install}); // eslint-disable-line no-undef
