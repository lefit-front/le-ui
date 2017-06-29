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
      <lemo-button type="normal">
      正常
      </lemo-button>
    `);
    expect(vm.$el.querySelectorAll('.lemo-button-text').length).to.equal(1);

    vm.$nextTick(_ => {
      console.log(vm.$el.querySelector('.lemo-button-text').innerHTML);
      expect(vm.$el.querySelector('.lemo-button-text').innerHTML).to.equal('正常');
      done();
    });
  });
});
