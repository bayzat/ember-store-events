import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | store events');

let newRecordId;

test('store-events', function(assert) {
  assert.expect(5);
  visit('/');

  fillIn('input.title', 'My new post');
  click('button.submit');

  andThen(() => {
    assert.equal(find('ul.events li:last-child span.name').text(), 'create-record');
    newRecordId = find('ul.events li:last-child span.id').text()
  });

  andThen(() => {
    click(`ul.posts li.post-${newRecordId} button.publish`);
  })

  andThen(() => {
    assert.equal(find('ul.events li:last-child span.name').text(), 'update-record');
    assert.equal(find('ul.events li:last-child span.id').text(), newRecordId);
  })

  andThen(() => {
    click(`ul.posts li.post-${newRecordId} button.delete`);
  })

  andThen(() => {
    assert.equal(find('ul.events li:last-child span.name').text(), 'delete-record');
    assert.equal(find('ul.events li:last-child span.id').text(), newRecordId);
  })
});
