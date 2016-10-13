import { test } from 'qunit';
import moduleForAcceptance from 'bug/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('test 1', function(assert) {
  visit('/');

  fillIn('input[type=text]', "Algo");

  andThen(function() {
    assert.equal(currentRouteName(), "index");
  });
});

test('test 2', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('input[type=submit]').is(':disabled'));
  });

  fillIn('input[type=text]', "Algo");

  andThen(function() {
    assert.ok(!find('input[type=submit]').is(':disabled'));
  });
});
