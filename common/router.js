Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.map(function() {
  this.route('gallery_form', {path: '/'});
  this.route('gallery_overview', {
    waitOn: function () {
      return Meteor.subscribe('galleries');
    }
  });
  this.route('gallery_upload', {
    path: 'gallery/:title/upload',
    waitOn: function () {
      return Meteor.subscribe('gallery',this.params.title);
    },
    data: function () {
      var gallery = Galleries.findOne({title: this.params.title});
      if (gallery) {
        Session.set('galleryId', gallery._id);
      }
      return gallery;
    }
  });
});
