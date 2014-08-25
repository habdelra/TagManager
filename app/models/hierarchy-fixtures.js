import Hierarchy from './hierarchy';

export default function() {
  Hierarchy.reopenClass({
    FIXTURES: [
      { id: '100', name: 'Arithmetic', product: '1' },
      { id: '101', name: 'English', product: '1' },
      { id: '102', name: 'Economics', product: '1' },

      { id: '103', name: 'Difficulty', product: '2' }
    ]
  });
}
