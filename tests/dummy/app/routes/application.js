import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  storeEvents: service(),

  model() {
    return this.store.findAll('post');
  },

  setupController(controller, model) {
    const eventsArray = A();
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
