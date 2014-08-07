Template.gallery_upload.rendered = function () {
  $('.uploadForm').append($.cloudinary.unsigned_upload_tag(
    'sn7bdcye',
    { cloud_name: 'meteorgallery' },
    { multiple: true }
  ))
  .bind('cloudinarydone', function(e, data) {
    var photo = {cloudinary: data.result};
    Galleries.update(Session.get('galleryId'), {$push: {photos: photo}});
  })
  .bind('cloudinaryprogress', function(e, data) {
    Session.set('uploadProgress', Math.round((data.loaded * 100.0) / data.total));
  });
};

Template.gallery_upload.helpers({
  photos: function () {
    var gallery = Galleries.findOne(Session.get('galleryId'));
    return gallery.photos;
  },
  uploadProgress: function () {
    return Session.get('uploadProgress');
  }
});
