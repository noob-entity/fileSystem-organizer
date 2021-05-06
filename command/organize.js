let fs=require("fs");
let path=require("path");
let types = {
  media: ["mp4", "mkv","mp3"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"]
}
module.exports = types;
    function organizedir(src){
    let dir = path.join(src,"organized");

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    organizedir(src,dir);
    

}
function organize(src,dest){
  let isFile=fs.lstatSync(src).isFile();
  if(isFile){
    console.log(src);
  }
  else{
    console.log(src);
    let fdirnames= readcontent(src);
    for(let i=0;i<fdirnames.length;i++){
      let child=fdirnames[i];
      let dirNamepath =path.join(src,child);
      organize(dirNamepath,dest);
    }
  }
}

module.exports={
  fn:organizefn
}