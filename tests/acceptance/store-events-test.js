import { click, fillIn, find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | store events', function(hooks) {
  setupApplicationTest(hooks);

  let newRecordId;

  test('store-events', async function(assert) {
    assert.expect(5);
    await visit('/');

    await fillIn('input.title', 'My new post');
    await click('button.submit');

    assert.dom(find('ul.events li:last-child span.name')).hasText('create-record');
    newRecordId = find('ul.events li:last-child span.id').textContent
    await click(`ul.posts li.post-${newRecordId} button.publish`);
    assert.dom(find('ul.events li:last-child span.name')).hasText('update-record');
    assert.dom(find('ul.events li:last-child span.id')).hasText(newRecordId);
    await click(`ul.posts li.post-${newRecordId} button.delete`);
    assert.dom(find('ul.events li:last-child span.name')).hasText('delete-record');
    assert.dom(find('ul.events li:last-child span.id')).hasText(newRecordId);
  });
});
