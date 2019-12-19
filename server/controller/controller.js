const models = require("../models/model.js"); 

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	models.image.find()
            .then(response => { res.json({"results":response}); })
            .catch(err => res.json(err));
    },
    getGroup: function(req, res){
        models.image.find( { keyword : req.params.keyword } )
            .then(message => res.json( { results : message } ))
            .catch(err => res.json(err));
    },
    newPost: function(req,res){
        // const new_models.image = new models.image();
        // new_models.image.title = req.body.title;
        // new_models.image.description = req.body.description;
        //new_models.image.save();
        console.log(`Json: ${req.body.name}`);
        models.image.create(req.body) //{runValidators:true,useFindAndModify:false}) wtf does that do?
            .then(message => res.json({results:message}))
            .catch(err => res.json(err));
    },
    displayImage: function(req, res){
        models.image.findOne( { _id:req.params.id } )
        .then(message => res.json({results:message}))
        .catch(err => res.json(err));
    },
    destroy: function(req,res){
        models.image.deleteOne({_id:req.params.id})
            .then(message => res.json({results:message}))
            .catch(err => res.json(err));
    },
    update: function(req, res){
        //console.log(req.body);
        console.log("-------------------------------------------");
        models.image.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true,useFindAndModify:false} )
            .then(message => res.json({results:message}))
            .catch(err => res.json(err));
    }
}; 