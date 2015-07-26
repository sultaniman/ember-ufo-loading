import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('ufo-loading', 'Integration | Component | ufo loading', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    {{ufo-loading}}
  `);

  assert.equal(this.$().text().trim().indexOf('Loading...') >= 0, true);
  assert.equal(this.$().find('.ufo-loading').length > 0, true);
});
