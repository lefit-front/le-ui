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
      <Button>
      </Button>
    `);
    expect(vm.$el.querySelectorAll('.le-button-text').length).to.equal(1);

    vm.$nextTick(_ => {
      // console.log(vm.$el.querySelector('.ivu-breadcrumb-item-separator').innerHTML);
      expect(vm.$el.querySelector('.le-button-text').innerHTML).to.equal('按钮');
      done();
    });
  });
});
