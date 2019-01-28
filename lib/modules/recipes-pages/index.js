module.exports = {
	extend: 'apostrophe-pieces-pages',
	options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          },
          'apostrophe-images': {},
          'recipes': {},
        }
      }
}
