const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    Students: {
        type: Array,
        required:true
    },
    guides: {
        type:Array,
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
    duration: {
        type: Number,
        required:true
    },
    Start_date: {
        type: Date,
        required:true
    },
    category: {
        type: String,
        required:true,
        enum: ['AI in healthcare', 'Computer vision', 'Micro & Nano electronics', 'Network and security', 'speech language & text processing', 'IOT, web services, cloud ontology']
    }
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
