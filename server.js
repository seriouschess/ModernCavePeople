
const express = require("express"); //using/import statement
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
require("./server/config/db.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');

require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => { //angular routes
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, () => console.log("listening on port 8000"));