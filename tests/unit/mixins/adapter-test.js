import Ember from 'ember';
import AdapterMixin from 'ember-store-events/mixins/adapter';
import { module, test } from 'qunit';

module('Unit | Mixin | adapter');

// Replace this with your real tests.
test('it works', function(assert) {
  let AdapterObject = Ember.Object.extend(AdapterMixin);
  let subject = AdapterObject.create();
  assert.ok(subject);
});
