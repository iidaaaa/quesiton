const router = require("express").Router();
const glob = require("glob");
const fs = require("fs");

var data = new Date()



router.get('/', function(req, res) {

    const query = req.query.p;
    const files = glob.sync("public/media/*");
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    var shuffle_files = shuffle(files);
    

    res.render('index.ejs', {
      title: "title",
      files_name: shuffle_files,
      glob: glob
    });
  
});

router.post('/', function(req, res, next){

    var newData = req.body
    console.log(newData);
    var Month = (data.getMonth()+1).toString();
    var Date = (data.getDate()).toString();
    var Hour = (data.getHours()).toString();
    var Min = (data.getMinutes()).toString();
    var Sec = (data.getSeconds()).toString();






    var write_data = JSON.stringify(newData);
    console.log(write_data);
    fs.writeFileSync(Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec + '_out.txt', write_data);
    res.render('thank.ejs');

})

module.exports = router;