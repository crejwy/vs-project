import _ from "lodash"
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
   var btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   element.style.display='inline';
   element.style.zIndex='2';
   element.style.position='absolute';
   element.appendChild(btn);

  return element;
}
document.body.appendChild(component());


import App from "../App.vue"
// import Vue from "vue"
new Vue({
  el:"#app",
  // template:"<App :pages='pages'/>",
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
  }
})