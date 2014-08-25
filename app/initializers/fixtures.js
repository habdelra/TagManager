import loadHierarchyFixtures from '../models/hierarchy-fixtures';
import loadProductFixtures   from '../models/product-fixtures';
import loadTagFixtures       from '../models/tag-fixtures';

export default {
  name: 'fixtures',

  initialize: function() {
    loadHierarchyFixtures();
    loadProductFixtures();
    loadTagFixtures();
  }
};
