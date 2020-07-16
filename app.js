const express=require('express');
const ProductData=require('./src/model/Productdata.js');
var ObjectId=require('mongoose').Types.ObjectId;
const cors=require('cors');
var bodyparser=require('body-parser');


var app=new express();
app.use(cors());
app.use(bodyparser.json())



app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    ProductData.find()
        .then(function(products){
            res.send(products);
    // ProductData.find((err,products)=>{
    //     if(!err){res.send(products);}
    //     else(console.log("error while loading data"+JSON.stringify(err,undefined,2)));
    
        });
});


app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    console.log(req.body);
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        discription:req.body.product.releaseDate,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        ImageUrl:req.body.product.ImageUrl,
    }
    var product=new ProductData(product);
    product.save();
});

app.put('update/:id',function(req,res){
res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        discription:req.body.product.releaseDate,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        ImageUrl:req.body.product.ImageUrl,
    };
    ProductData.findByIdAndUpdate(req.params.id,{$set:product},{new:true});
});

app.delete('/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    ProductData.findByIdAndRemove(req.params.id);
});






app.listen(3000,function(){
    console.log('listning to port 3000');
    
});