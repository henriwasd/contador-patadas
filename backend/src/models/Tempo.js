const { Schema, model } = require('mongoose');

const TempoSchema = new Schema({
    tempo: {
			type: Date,
			required: true
		}
}, {
    timestamps: true
});

module.exports = model('Tempo', TempoSchema);
