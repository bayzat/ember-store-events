import Ember from 'ember';

export default Ember.Route.extend({
  storeEvents: Ember.inject.service(),

  model() {
    return this.store.findAll('post');
  },

  setupController(controller, model) {
    const eventsArray = Ember.A();
    controller.setProperties({ model, eventsArray });
    this.get('storeEvents').on('create-record', (record, id) => {
      controller.get('eventsArray').pushObject({ name: 'create-record', record, id });
    });
    this.get('storeEvents').on('delete-record', (record, id) => {
      controller.get('eventsArray').pushObject({ name: 'delete-record', record, id });
    });
    this.get('storeEvents').on('update-record', (record, id) => {
      controller.get('eventsArray').pushObject({ name: 'update-record', record, id });
    });
  },
});
