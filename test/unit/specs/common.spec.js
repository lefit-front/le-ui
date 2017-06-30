import { mount } from 'avoriaz';
import lemo from '../../../src';
import config from '../../../src/config'

describe('lemo components test', () => {
  it('create and check props', () => {
    let keys = Object.keys(config)
    keys.map((key, index) => {
      let props = {}
      config[key].props.map((prop, index) => {
        props[prop.name] = prop.required ? prop.example : prop.default
      })
      const wrapper = mount(lemo[key], {
        propsData: props
      });
      expect(wrapper.isVueComponent).to.equal(true);
      expect(wrapper.hasClass(config[key].class)).to.equal(true);
      let componentsProps = wrapper.propsData()
      config[key].props.map((prop, index) => {
        expect(componentsProps[prop.name]).to.equal(prop.required ? prop.example : prop.default)
      })
    })
  });
});
