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
        // width:"",
        // height:"",
        position:"relative",
        border:'none'
    },
    text:"please init something"
};
var Image={
    style:{
        // margin:"",
        // padding:"",
        // background:"",
        width:"100px",
        height:"100px",
        position:"relative",
        border:'none'
    },
    src:"./fa.ico"
};
var Input={
    style:{
        margin:"",
        padding:"",
        background:"",
        width:"100px",
        height:"",
        border:'none',
        color:"",
        font:""
    }
};

function CatchPage(name){
    let object;
    switch(name){
        case 'page':object=_.cloneDeep(Page);break;
        case 'text':object=_.cloneDeep(Text);break;
        case 'image':object=_.cloneDeep(Image);break;
        // case 'page':object=Object.assign({},Page);break;
        // case 'page':object=Object.assign({},Page);break;
    }
    return  object;
}
export default{
    CatchPage
};