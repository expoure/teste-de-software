import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ordenacao', function(hooks) {
  setupTest(hooks);

  test('orderning', function(assert) {
    let service = this.owner.lookup('service:ordenacao');
    let array = [40000,30000,70000,80000,50000,60000,20000,70000,90000];
    const arrayTest = service.order(array);
    assert.equal(arrayTest, 1);
  });

  test('less than four elements', function(assert) {
    let service = this.owner.lookup('service:ordenacao');
    let array = [40000,30000,70000];
    const arrayTest = service.order(array);
    assert.equal(arrayTest, 0);
  });

  test('more than ten elements', function(assert) {
    let service = this.owner.lookup('service:ordenacao');
    let array = [40000,30000,70000,80000,50000,60000,20000,70000,90000, 40000, 89547];
    const arrayTest = service.order(array);
    assert.equal(arrayTest, 0);
  });
});
