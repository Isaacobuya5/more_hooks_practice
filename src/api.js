const uuid = require('uuid');

 const fetchAPIsTodos = () => {
    return new Promise((resolve) => setTimeout(() => resolve([
        {
          id: uuid.v4(),
          title: 'Write hooks book',
          completed: true
        },
        {
            id: uuid.v4(),
            title: 'Promote my book',
            completed: false
          }
    ]), 1000));
}

module.exports = fetchAPIsTodos;