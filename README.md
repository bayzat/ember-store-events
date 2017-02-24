# ember-store-events

Provides events for Ember store actions.

## Installation
```sh
ember install ember-store-events
```

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

### Service

The `storeEvents` is just an empty service extending `Ember.Evented` mixin.
You can inject it where it's needed and subscribe to events triggered by the adapter:
`create-record`, `delete-record` and `update-record`.
Every event is triggered with two arguments: `record` and `id`.
