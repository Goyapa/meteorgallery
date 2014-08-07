PhotoSchema = new SimpleSchema({
  cloudinary: {
    type: Object,
    blackbox: true
  }
});

GallerySchema = new SimpleSchema({
  title: {
    type: String
  },
  photos: {
    type: [PhotoSchema],
    defaultValue: []
  }
});

Galleries = new Meteor.Collection('galleries');
Galleries.attachSchema(GallerySchema);
