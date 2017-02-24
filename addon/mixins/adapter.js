import Ember from 'ember';

export default Ember.Mixin.create({
  storeEvents: Ember.inject.service(),

  createRecord(store, type, snapshot) {
    return this._super(...arguments).then((result) => {
      this.get('storeEvents').trigger('create-record', snapshot.record, result.id || snapshot.id);
      return result;
    });
  },

  deleteRecord(store, type, snapshot) {
    return this._super(...arguments).then((result) => {
      this.get('storeEvents').trigger('delete-record', snapshot.record, snapshot.id);
      return result;
    });
  },

  updateRecord(store, type, snapshot) {
    return this._super(...arguments).then((result) => {
      this.get('storeEvents').trigger('update-record', snapshot.record, snapshot.id);
      return result;
    });
  },
});
