import Tag from './tag';

export default function() {
  Tag.reopenClass({
    FIXTURES: [
      { id: '1000', name: 'Adding', status: 'approved', hierarchy: '100' },
      { id: '1001', name: 'Subtracting', status: 'approved', hierarchy: '100' },
      { id: '1002', name: 'Multiplying', status: 'approved', hierarchy: '100' },
      { id: '1003', name: 'Division', status: 'approved', hierarchy: '100' },
      { id: '1004', name: 'Ratios', status: 'unapproved', hierarchy: '100' },
      { id: '1005', name: 'Fractions', status: 'unapproved', hierarchy: '100' },

      { id: '1100', name: 'Nouns', status: 'approved', hierarchy: '101' },
      { id: '1101', name: 'Adjectives', status: 'approved', hierarchy: '101' },
      { id: '1102', name: 'Adverbs', status: 'approved', hierarchy: '101' },
      { id: '1103', name: 'Verbs', status: 'unapproved', hierarchy: '101' },
      { id: '1104', name: 'Prepositions', status: 'unapproved', hierarchy: '101' },

      { id: '1200', name: 'Supply and Demand', status: 'approved', hierarchy: '102' },
      { id: '1201', name: 'Free Market', status: 'approved', hierarchy: '102' },
      { id: '1203', name: 'Money and Stuff', status: 'unapproved', hierarchy: '102' },

      { id: '1300', name: 'Easy', status: 'approved', hierarchy: '103' },
      { id: '1301', name: 'Medium', status: 'approved', hierarchy: '103' },
      { id: '1302', name: 'Hard', status: 'approved', hierarchy: '103' },
      { id: '1304', name: 'Blood Coming Out of My Ears', status: 'approved', hierarchy: '103' },
    ]
  });
}
