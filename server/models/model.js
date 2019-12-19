
const mongoose = require('mongoose'),

    ImageSchema = new mongoose.Schema({ //table
        type:{ //determine if this is an image so we can draw it.
            type:String,
            default: "image"
        },
        keyword: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        image_elements: {
            type: Array
        },
    },{timestamps:true})

    ElementSchema = new mongoose.Schema({ //every image is made of drawing elements
        type: {
            type: String, //"circle" "line" or "point"
            required: true,
        },
        color:{
            type: String,
            default:"black"
        },
        point_coordinate: { //array of the form [x,y]
            type: Array
        },
        line_begin:{ //array of the form [x,y]
            type: Array
        },
        line_end:{ //array of the form [x,y]
            type: Array
        },
        circle_origin:{ //array of the form [x,y]
            type: Array
        },
        circle_radius:{
            type: Number
        }
    },{timestamps:true})

    module.exports = {
        image: mongoose.model('Image', ImageSchema),
        Element: mongoose.model('Element', ElementSchema)
    }


