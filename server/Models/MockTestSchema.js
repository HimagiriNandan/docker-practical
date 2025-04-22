const mongoose = require('mongoose');

// Define the schema for individual questions
const questionSchema = new mongoose.Schema({
  question: { type: String, required:false},
  question_image: { type: String, default: '' },
  options: {
    a: { type: String, required: false },
    a_image_link: { type: String, required: false },
    b: { type: String, required: false },
    b_image_link: { type: String, required: false },
    c: { type: String, required: false },
    c_image_link: { type: String, required: false },
    d: { type: String, required: false },
    d_image_link: { type: String, required: false }
  },  // Assuming options are an array of strings
  correctOption: { type: String, required: false },  // Assuming a single correct option is a string
  selectedOption: { type: String, default: '' },  // Default empty selected option
  explanation: { type: String, default: '' },
  explanation_image: { type: String, default: '' }
});

// Define the schema for each section (e.g., Physics, Chemistry, Maths)
const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the section (e.g., 'Physics', 'Chemistry', 'Maths')
  questions: { type: [questionSchema], required: true }  // Array of questions
});

// Define the main schema for the mock test
const mockTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  totalMarks: { type: Number, required: true },
  scoredMarks: { type: Number, required: true },
  sections: { type: [sectionSchema], required: true },  // Array of sections
  timer: { type: Number, required: true }  // Timer in minutes
});

// Create the model for MockTestSchema
const MockTest = mongoose.model('MockTest', mockTestSchema);

module.exports = MockTest;