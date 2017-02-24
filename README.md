# ember-store-events

Provides events for Ember store actions.


## Setup

Add the provided mixin to application adapter:
```js
// adapters/application.js
import DS from 'ember-data';
import EventedAdapterMixin from 'ember-store-events/mixins/adapter';

export default DS.JSONAPIAdapter.extend(EventedAdapterMixin, {
});

```
or to specific model adapter:
```js
// adapters/post.js
import ApplicationAdapter from './application';
import EventedAdapterMixin from 'ember-store-events/mixins/adapter';

export default ApplicationAdapter.extend(EventedAdapterMixin, {
});

```


## Usage

Inject the service and subscribe to events:
```js
// routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  storeEvents: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    this.get('storeEvents').on('update-record', (record, id) => {
      window.alert(`record ${record.constructor.modelName} with id ${id} updated`);
    });
  },

});

```

Addon provides 3 events `create-record`, `delete-record` and `update-record`,
all of which passing 2 arguments: `record` and `id`.
