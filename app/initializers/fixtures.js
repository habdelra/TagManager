import loadHeirarchyFixtures from '../models/heirarchy-fixtures';
import loadCategoryFixtures  from '../models/category-fixtures';
import loadTagFixtures       from '../models/tag-fixtures';

export default {
  name: 'fixtures',

  initialize: function() {
    loadHeirarchyFixtures();
    loadCategoryFixtures();
    loadTagFixtures();
  }
};
