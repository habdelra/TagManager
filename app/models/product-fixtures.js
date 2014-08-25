import Product from './product';

export default function() {
  Product.reopenClass({
    FIXTURES: [
      { id: '1', name: 'Learning Objectives' },
      { id: '2', name: 'Difficulty' }
    ]
  });
}
