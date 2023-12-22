const { DataTypes } = require('sequelize');
const { applicationModel } = require('./application');
let bodyParser = require('body-parser');
const cors = require('cors')



const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

const host = '127.0.0.1';
const port = 7000;

app.post('/contacts',function(req,res){
  let application ={
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  }
  application = applicationModel.build(application);
  application.save();
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.send(application);
})





app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
