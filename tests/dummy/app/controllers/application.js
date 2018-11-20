import Controller from '@ember/controller';

export default Controller.extend({
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
