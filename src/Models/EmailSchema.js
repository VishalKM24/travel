const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a shortUrl'],
        unique: true,
        maxlength: [50, 'EMail cannot be more than 50 characters']
    }
})

module.exports = mongoose.models.Urls || mongoose.model('Urls', UrlSchema);