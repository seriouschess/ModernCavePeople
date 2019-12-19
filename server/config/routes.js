
const controller = require("../controller/controller.js");

module.exports = function(app){
    app.get('/api', (req,res) => { //all Images
        controller.index(req,res);
    })

    app.get('/api/get_keyword/:keyword', (req,res) => { //all Images
        controller.getGroup(req,res);
    })

    app.post('/api/new', (req, res) => { //add Image
        controller.newPost(req,res);
    })

    app.get('/api/:id', (req, res) => {
        controller.displayImage(req, res);
    })

    app.get('/api/remove/:id/', (req, res) => { //delete Image
        controller.destroy(req, res);
    })

    app.put('/api/edit/:id/', (req, res) => { //update Image
        console.log("############################");
        controller.update(req,res);
    })
}