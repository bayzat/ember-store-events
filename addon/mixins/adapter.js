import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  storeEvents: service(),

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
