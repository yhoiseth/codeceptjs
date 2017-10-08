Vue.component('modal', {
  template: `
    <div class="modal" v-bind:class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p>
                    Some text right here.
                </p>
            </div>
  
        </div>
        <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>  
  `,
  data() {
    return {
      isActive: true,
    };
  },
});

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
    <article class="message" v-show="this.show">
        <div class="message-header">
            <p>{{ title }}</p> <button aria-label="delete" @click="show = false" class="delete"></button>
          </div> 
          <div class="message-body">
              {{ body }}
        </div>
    </article>  
  `,
  methods: {
    // hideModal() {
    //   this.show = false;
    // }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root',

});
