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
      <leuv-button type="primary">正常</leuv-button>
    `);
    expect(vm.$el.querySelectorAll('.leuv-button-text').length).to.equal(1);

    vm.$nextTick(_ => {
      console.log(vm.$el.querySelector('.leuv-button-text').innerHTML);
      expect(vm.$el.querySelector('.leuv-button-text').innerHTML).to.equal('正常');
      done();
    });
  });
});
