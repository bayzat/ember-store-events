import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost() {
      const title = this.get('newPostTitle');
      this.set('newPostTitle', '');
      this.store.createRecord('post', { title }).save();
    },

    deletePost(post) {
      post.destroyRecord();
    },

    togglePublishPost(post) {
      post.toggleProperty('isPublished');
      post.save();
    },
  },
});
