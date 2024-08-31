const {Schema, model} = require('mongoose');

const QrSchema = new Schema({
        userId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
        url: {
            type: String,
            required: true,
            trim: true,
        },

        qr: {
            type: String,
            trim: true,
        },





})

const Qr = model('Qr', QrSchema)

module.exports = Qr;