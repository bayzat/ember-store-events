import ApplicationAdapter from './application';
import EventedAdapterMixin from 'ember-store-events/mixins/adapter';

export default ApplicationAdapter.extend(EventedAdapterMixin, {
});
