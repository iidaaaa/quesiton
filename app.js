const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })) //



// ejs を利用する
app.set("view engine", "ejs");

// localhost:8080/static で /publicディレクトリ配下の静的ファイルを利用できるようにする
//app.use("/static", express.static(__dirname + "/public"));
app.use(express.static('public'));

// ルーティング
// app.use("/", require("./routes/index.js"));
app.use("/", require("./routes/index.js"));
//app.use("/result", require("./routes/result.js"));

// ポート：8080
app.listen(8080);