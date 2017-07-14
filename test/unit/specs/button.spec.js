import {
  createVue,
  destroyVM
} from '../util';

describe('Button.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', done => {
    vm = createVue(`
      <le-button type="primary">正常</le-button>
    `);
    expect(vm.$el.querySelectorAll('.le-button-text').length).to.equal(1);

    vm.$nextTick(_ => {
      console.log(vm.$el.querySelector('.le-button-text').innerHTML);
      expect(vm.$el.querySelector('.le-button-text').innerHTML).to.equal('正常');
      done();
    });
  });
});
