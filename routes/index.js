const router = require("express").Router();
const glob = require("glob");
const fs = require("fs");

var data = new Date()

router.get('/', function(req, res){
  res.render('start.ejs');
});

router.get('/next', function(req, res) {

    const query = req.query.p;
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // 
    file_random = glob.sync("public/media/*");
    var shuffle_file_random = shuffle(file_random)
    const files = glob.sync(shuffle_file_random[0] + '/*')
    var shuffle_files = shuffle(files);
    console.log(shuffle_files)
    //
    // const files = glob.sync("public/media/*");
    
    // var shuffle_files = shuffle(files);
    // console.log(shuffle_files)
    

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
  var Hour = (data.getHours() + 9).toString();
  var Min = (data.getMinutes()).toString();
  var Sec = (data.getSeconds()).toString();


  var write_data = JSON.stringify(newData);
  console.log(write_data);

  fs.appendFileSync('test.txt', write_data + '\n');
  console.log('test.txtに追記されました');


  //fs.writeFileSync(Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec + '_out.txt', write_data);
  res.render('thank.ejs');

})

module.exports = router;