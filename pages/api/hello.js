const mongoose = require('mongoose');
var Usersdata = require('./user');
var usersonedata = require('./userone');
var todo = require('./todo');

var profile = require('./profile');
var about = require('./about');







var account = require('./account');
var Balance = require('./balance');


 

export default function async (req, res) {

 mongoose.connect('mongodb://localhost:27017/myDatabases')
        .then(data=>{
           console.log("connecting successfully 123");
        })
        .catch(error=> {
           console.log("error");
        })
      


// const Account = new Account({	
//     name: "Md. Rajon",
//     email: "rajonhosaindhaka@gmail.com",
//     phone: "01776502017",
//     address: "barisal",
// })
// Account.save();



// const bal = new Balance({
//     amount: "200",
//      total: "40000"  
//  })


//  bal.save(function(err,result){
//      if (err){
//          console.log(err);
//      }
//      else{
//      	account.findOneAndUpdate({_id:"63aab090ba9f28b13e677b78" },{$push: {bal: result._id}}, function(err, ss){				
         	 
//          	 account.find({})
// 			.populate('bal')
// 			.exec((err, result)=>{
// 				if(err){
// 		    		res.status(200).json({ data: "error" })
// 				}else{

//           account.findOneAndUpdate({_id:result[1]._id },{$pull: {bal: result[1].bal[0]}}, function(err, result){					
// 		    		res.status(200).json({ data: result })
//           })
// 				}
// 		  });

 
//  		})
//      }
//  })


// account.find({ bal : { "$in" : ["63aab01a7de76f4cb79ff0e5", "63ac8ba4c8a87ca0c096c6d4"] }}, function(err, rsutl){
// let totalPopulation = [];
// rsutl.forEach((number) => {
//   totalPopulation.push(number._id);
// });

// console.log(totalPopulation);
  
//   res.status(200).json({ data : totalPopulation })
  
// });









// account.findOneAndUpdate({_id:"63aaa76cba9f28b13e677b5f" },{$pull: {bal: "63aab0147de76f4cb79ff0d1"}}, function(err, result){
//   if(err){    
//     res.status(200).json({ data: "not fund" })
//   }
//   if(result){
//     res.status(200).json({ data: result._id })    
//   }

// })



















// Account.find({})
// 	.populate('bal')
// 	.exec((err, rsutl)=>{
// 		if(err){
		
// 		}else{
// 		res.status(200).json({ data: rsutl })
// 		}
// })




 

 
 // todo.find({address:"paki"}, function (err, tod) {
	
// 	// usersonedata.findOneAndUpdate({_id:"63a9abee8a871accfe1a9b52"},{$push: {todos: tod[1]._id}}, function(err, ss){	
// 	// 	res.status(200).json({ data: "user_id" }) 
// 	// })

 	// usersonedata.update([{_id:"63a9ac008a871accfe1a9b53" }, {todos:tod[0]._id}, function(err, rsutl){
 	// 	console.log("rsutl");
 	// });



// push update right
// usersonedata.findOneAndUpdate({_id:"63a9ac008a871accfe1a9b53" },{$push: {todos: tod[0]._id}}, function(err, ss){	
// 	res.status(200).json({ data: "user_id" }) 
// })




 	 // 	.exec((err, result)=>{
 		// if(err){
   //   		res.status(200).json({ data: tod[0]._id})
 		// }else{
   //   		res.status(200).json({ data: result })
 		// }
   // });
 
 // })


// user.find({})
// .populate("")
// .exec((err, rsutl)=>{

// })



// usersonedata.find({})
// 	.populate('todos')
// 	.select({
// 		_id:0,
// 		_v:0
// 	})
// 	.limit(2)
// 	.exec((err, result)=>{
// 		if(err){
//     		res.status(200).json({ data: "error" })
// 		}else{
			
//     		res.status(200).json({ data: result })
// 		}
//   });



// account.find({})
// 	.populate('bal')
// 	.exec((err, result)=>{
// 		if(err){
//     		res.status(200).json({ data: "error" })
// 		}else{
			
//     		res.status(200).json({ data: result })
// 		}
//   });
 



}


