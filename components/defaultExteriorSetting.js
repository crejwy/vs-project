var Base={
    style:{
        background:"",
        width:"",
        height:""
    }
};
var Page={
    style:{
        background:"white",
        width:"600px",
        height:"800px"
    }
};

var Text={
    style:{
        margin:"",
        padding:"",
        background:"",
        width:"",
        height:"",
        position:""
    },
    text:"please init something"
};

function CatchPage(name){
    let object;
    switch(name){
        case 'page':object=Object.assign({},Page);break;
        case 'text':object=Object.assign({},Text);break;
        // case 'page':object=Object.assign({},Page);break;
        // case 'page':object=Object.assign({},Page);break;
    }
    return  object;
}
export default{
    CatchPage
};