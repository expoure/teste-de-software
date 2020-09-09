import { module, test, skip } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | matematica', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('matematica', {});
    assert.ok(model);
  });

  test('soma', function(assert) {
    const Matematica = this.owner.lookup('service:store').modelFor('matematica');
    const matematica = new Matematica();
    assert.equal(5, matematica.soma(3,2), "A soma está correta");
  });
});
