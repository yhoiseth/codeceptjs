Vue.component('message', {
  props: [
    'title',
    'body',
  ],
  data() {
    return {
      show: true,
    };
  },
  template: `
    <article class="message" v-if="this.show">
        <div class="message-header">
            <p>{{ title }}</p> <button aria-label="delete" @click="hideModal" class="delete"></button>
          </div> 
          <div class="message-body">
              {{ body }}
        </div>
    </article>  
  `,
  methods: {
    hideModal() {
      this.show = false;
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root',

});
