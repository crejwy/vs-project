var BaseStyle={    
    background:"white",
    width:"auto",
    height:"auto",
    opacity:1,
    border:'none'
};

var PositionStyle=Object.assign({},BaseStyle,{
    top:"auto",
    right:"auto",
    bottom:"auto",
    left:"auto",
    position:"relative",
    margin:"auto",
    padding:"auto"
});
var Page={
    style:Object.assign({},BaseStyle,{
        width:"600px",
        height:"800px",
        padding:"20px"
    })
};

var Text={
    style:Object.assign({},BaseStyle,PositionStyle),
    text:"please init something"
};
var Image={
    style:Object.assign({},BaseStyle,PositionStyle),
    src:"./fa.ico"
};
var Input={
    style:Object.assign({},BaseStyle,PositionStyle)
};
var Table={
    style:{
        top:"auto",
        right:"auto",
        bottom:"auto",
        left:"auto",
        position:"relative",
        margin:"auto",
        background:"white",
        opacity:1,
        border:'none'
    }
};

function CatchPage(name){
    let object;
    switch(name){
        case 'page':object=_.cloneDeep(Page);break;
        case 'text':object=_.cloneDeep(Text);break;
        case 'image':object=_.cloneDeep(Image);break;
        case 'table':object=Object.assign({},Table);break;
        // case 'page':object=Object.assign({},Page);break;
    }
    return  object;
}
export default{
    CatchPage
};