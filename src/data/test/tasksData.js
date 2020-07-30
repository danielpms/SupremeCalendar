export default () => ({
  data: [
    { key: '1', type: 'Title', values: 'Wednesday 26th of July' },
    { key: '2', type: 'Task', values:
      { title: 'Date with my love',
        sHour: '09:00h',
        eHour: '10:00h',
        cColor: 'pink',
        templateContent: [
          {
            key: 't1',
            type: 'textBox',
            title: 'Description',
            content: 'Today Im going to Date with Sofia in Big Als and watch film in my house.',
          },
          {
            key: 't2',
            type: 'textBox',
            title: 'Notes',
            content: 'This is a notes field text example.',
          },
        ],
      },
    },
    { key: '3', type: 'Task', values: { title: 'Meeting in Barcelona', sHour: '14:00h', eHour: '14:30h', cColor: 'olivedrab' }},
    { key: '4', type: 'Task', values: { title: 'Bake a Cake for my Ducks Birthday', sHour: '17:00h', eHour: '19:00h', cColor: 'skyblue' }},
  ],
});
