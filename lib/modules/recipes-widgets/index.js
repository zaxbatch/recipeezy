// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  extend: 'apostrophe-pieces-widgets',
  filters: {
      projection: {
        slug: 1,
        title: 1,
        type: 1,
        tags: 1,
        prepTime: 1,
        thumbnail: 1
      }
    }
};
