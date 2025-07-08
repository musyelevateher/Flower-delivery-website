const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId; // Password is required only if googleId is not present
        }
    },
    googleId: {
        type: String, // Stores the unique Google account ID for OAuth users
        default: null
    },
    cartData: {
        type: Object,
        default: {}
    }
}, { minimize: false });
module.exports = mongoose.model('User', userSchema);