import EmberObject from '@ember/object';
import AdapterMixin from 'ember-store-events/mixins/adapter';
import { module, test } from 'qunit';

module('Unit | Mixin | adapter', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let AdapterObject = EmberObject.extend(AdapterMixin);
    let subject = AdapterObject.create();
    assert.ok(subject);
  });
});
