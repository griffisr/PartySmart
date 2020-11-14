function readSingleFile(evt) {
    var f = evt.target.files[0];
    if (f) {
     var r = new FileReader();
       r.onload = function(e) {
       var contents = e.target.result;
        alert( "Got the file.n"
         +"name: " + f.name + "n"
         +"type: " + f.type + "n"
         +"size: " + f.size + " bytesn"
         + "starts with: " + contents.substr(1, contents.indexOf("n"))
        );
      }
      r.readAsText(f);
     } else {
      alert("Failed to load file");
     }
    }
    // this parts gets the file and keeps an eye for changes
    document.getElementById('inp').addEventListener('change', readSingleFile,false);
