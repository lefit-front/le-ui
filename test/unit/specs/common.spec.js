import { mount } from 'avoriaz';
import lemo from '../../../src';
import config from '../../../src/config'

describe('lemo components test', () => {
  let keys = Object.keys(config)
  keys.map((key, index) => {
    let props = {}
    it(config[key].name, () => {
      config[key].props.map((prop, index) => {
        props[prop.name] = prop.required ? prop.example : prop.default
      })
      const wrapper = mount(lemo[key], {
        propsData: props
      });
      // console.log(config[key].name);
      // console.log(`isVueComponent: ${wrapper.isVueComponent}`);
      // console.log(`hasClass: ${wrapper.hasClass(config[key].class)}`);
      // console.log(config[key].class);
      // console.log(config[key].props);
      expect(wrapper.isVueComponent).to.equal(true);
      expect(wrapper.hasClass(config[key].class)).to.equal(true);
      let componentsProps = wrapper.propsData()
      config[key].props.map((prop, index) => {
        // console.log(prop.name);
        expect(componentsProps[prop.name]).to.equal(prop.required ? prop.example : prop.default)
      })
    });
  })
});
