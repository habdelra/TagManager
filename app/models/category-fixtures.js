import Category from './category';

export default function() {
  Category.reopenClass({
    FIXTURES: [
      { id: '100', name: 'Arithmetic', heirarchy: '1' },
      { id: '101', name: 'English', heirarchy: '1' },
      { id: '102', name: 'Economics', heirarchy: '1' },

      { id: '103', name: 'Difficulty', heirarchy: '2' }
    ]
  });
}
