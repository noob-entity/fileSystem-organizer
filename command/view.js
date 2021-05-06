let fs=require("fs");
let path=require("path");
function printFlat(src){
    let isFile=fs.lstatSync(src).isFile();
    if(isFile){
        console.log(src,"*");
    } else{
        console.log(src);
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let child=path.join(src,childrens[i]);
            printFlat(child);
        }
    }
   }
   function printtree(src,indent){
    let isFile=fs.lstatSync(src).isFile();
    if(isFile){
        console.log(indent,path.basename(src),"*");
    } else{
        console.log(indent,path.basename(src));
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let child=path.join(src,childrens[i]);
            printtree(child,indent+"\t");
        }
    }
   }
function viewHelper(dirName,mode){
    if(mode=="tree"){
        printtree(dirName,"");
    }
    else if(mode=="flat"){
        printFlat(dirName);
    }
    else{
        console.log("wrong mode type help");
    }
}
module.exports={
    fn:viewHelper
}