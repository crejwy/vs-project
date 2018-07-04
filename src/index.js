import './style.css';
import _ from 'lodash'
console.log(_.now());
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();    
  });
}

import App from "../App.vue";
new Vue({
  el:"#app",
  components:{App},
  data:{
    document:{
      pages:[{
        id:"firstpage",
        style:{
            width:'600px',
            height:'800px'
        },
        isActive:false,
        children_el:[]
      }],
      activepage:"firstpage"
    }
  },
  methods:{
    addpage:function(obj){
      this.document.pages.push(obj);
      this.document.activepage=obj.id;
    }
  }
});