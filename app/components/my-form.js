import Ember from 'ember';

export default Ember.Component.extend({
  obj: { text: '' },

  incomplete: Ember.computed('obj.text', function() {
    return Ember.isEmpty(this.get('obj.text'));
  })
});
