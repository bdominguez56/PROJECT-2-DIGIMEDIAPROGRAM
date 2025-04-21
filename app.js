let data = [
  {
    name: 'Bryton',
    age: '21'
  },
  {
    name: 'Stephan',
    age: '22'
  },
  {
    name: 'Sam',
    age: '23'
  },
  {
    name: 'Lorenzo',
    age: '24'
  },
  {
    name: 'Loriana',
    age: '25'
  },
  {
    name: 'British',
    age: '26'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
