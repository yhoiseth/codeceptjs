Vue.component('task-list', {
  template: '<ul><task v-for="task in tasks">{{ task.description }}</task></ul>',
  data() {
    return {
      tasks: [
        {
          description: 'Go out',
          complete: true,
        },
        {
          description: 'Go in',
          complete: false,
        },
        {
          description: 'Let me begin',
          complete: true,
        },
      ],
    };
  },
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root',

});
