import _ from "lodash";
import './style.css';

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
    pages:[{
      id:"firstpage",
      style:{
          width:'600px',
          height:'800px'
      },
      children_el:[]
    }] 
  },
  methods:{
    addpage:function(){
      this.pages.push({
        id:new Date().getTime(),
        style:{
            width:'600px',
            height:'800px'
        },
        children_el:[]
      });
    }
  }
});