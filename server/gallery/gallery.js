Meteor.publish('galleries', function () {
  return Galleries.find();
});

Meteor.publish('gallery', function (title) {
  check(title, String);
  return Galleries.find({title: title}, {limit: 1});
});
