import Heirarchy from './heirarchy';

export default function() {
  Heirarchy.reopenClass({
    FIXTURES: [
      { id: '1', name: 'Learning Objectives' },
      { id: '2', name: 'Difficulty' }
    ]
  });
}
