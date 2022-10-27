const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Course name field is required'] 
    },
    code: { 
        type: String, 
        trim: true,
        required: [true, 'Course code field is required'] 
    },
    credit: { 
        type: Number, 
        trim: true,
        required: [true, 'Course credit field is required'] 
    },
    session: { 
        type: String, 
        required: [true, 'Course session field is required'] 
    },
    sessionType: {
        type: String,
        required: [true, "Please confirm session type"],
        enum: {
            values: ['spring', 'summer', 'fall'],
            message: "role value can not be {VALUE}, must be spring/summer/fall"
        }
    },
    teacher: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    student: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
}, { timestamps: true });

const Course = new mongoose.model("Course", courseSchema);
module.exports = Course