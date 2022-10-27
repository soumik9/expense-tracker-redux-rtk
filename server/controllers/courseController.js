const User = require('../models/userSchema');
const Course = require('../models/courseSchema');

const index = async (req, res) => {
    try {
        // copying req query
        const queryObject = { ...req.query };
        const queries = {};

        // excluding fileds
        const excludeFileds = ['sort', 'page', 'limit'];
        excludeFileds.forEach(filed => delete queryObject[filed]);

        // sorting flexiblity
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        // database query
        const courses = await Course.find(queryObject).sort(queries.sortBy);
        const total = courses.length;
        res.send({ total, message: 'Successfully loaded data', success: true, courses });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

// const single = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const courses = await Course.findOne({ _id: id });
//         res.send({ message: 'Successfully loaded data', success: true, courses });
//     } catch (error) {
//         res.status(500).send({ error: error.message, message: 'Server side error', success: false });
//     }
// }


const create = async (req, res) => {
    try {
        const course = new Course(req.body);
        const result = await Course.save();

        if (!result._id) return res.status(500).send({ message: 'Error', success: false });

        //push Course id to user 
        // await User.findOneAndUpdate({ _id: req.body.createdBy }, {
        //     $push: { createdCourses: result._id }
        // }, { new: true })

        res.send({ course, message: 'Successfully created Course', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
}

// const update = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const verifyCourse = await Course.findOne({ _id: id });

//         if (!verifyCourse) return res.status(404).send({ message: 'Course not exists', success: false });

//         const updatedData = await Course.findOneAndUpdate({ _id: id }, {
//             $set: req.body
//         }, { runValidators: true });

//         res.json({ message: "Course successfully updated", success: true });

//     } catch (error) {
//         res.status(500).send({ error: error.message, message: 'Failed to update Course', success: false });
//     }
// }


module.exports = { 
    index, 
    // single, 
    create, 
    // update 
}