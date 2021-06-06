let fs=require("fs");
let path=require("path");
let types = {
  media: ["mp4", "mkv","mp3"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"]
}
module.exports = types;
function isFileOrNot(src) {
  return fs.lstatSync(src).isFile();
}
function readContent(src) {
  return fs.readdirSync(src);
}
function copyFile(src, desFolder) {

  if (fs.existsSync(desFolder) == false) {
      fs.mkdirSync(desFolder);
  }
  
  let fileName = path.basename(src)
  // console.log("dest ", path.join(desFolder, fileName))
  // exist
  // access
  // organized folder 
  fs.copyFileSync(src, path.join(desFolder, fileName));
}
function getdestName(src) {
  let ext = src.split(".").pop();
  for (let key in types) {
      for (let i = 0; i < types[key].length; i++) {
          if (ext == types[key][i]) {
              return key;
          }
      }
  }
  return "others";

}
function organize(src, dest) {
  // file ->
  let isFile = isFileOrNot(src);
  if (isFile == true) {
      // copy to organized files folder -> segregate 
      // identify 
      // get foldername in which i have to put my file
      let folderName = getdestName(src);
      console.log(folderName, " -> ", src);
      // src/organized_files/media
      copyFile(src, path.join(dest, folderName));
  }
  else {
      // folder -> recursion
      // print
      // content read from os
      let fDirnames = readContent(src);
      // recursion 
      // console.log(fDirnames);
      for (let i = 0; i < fDirnames.length; i++) {
          let child = fDirnames[i];
          //    good practice??
          // let dirNamepath = src + "\\" + child;
          let dirNamepath = path.join(src, child);
          organize(dirNamepath, dest)
      }
  }
}
    function organizeFiles(src){
      // create organize file folder in src
      let destFolderPath = path.join(src, "organized_files");
      console.log(destFolderPath);
      if (fs.existsSync(destFolderPath) == false) {
          fs.mkdirSync(destFolderPath);
      }
      // deep copy all the files in organize file folder
      organize(src, destFolderPath);
  }
  // path of the folder which we want to organize
  // node mycli.js organize "f-path"
  
  function organizefn(src) {
      // create organize files folder 
      if (src == undefined) {
          src = process.cwd();
      }
      console.log(src);
      organizeFiles(src);

}


module.exports={
  fn:organizefn
}