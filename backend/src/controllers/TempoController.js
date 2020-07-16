const Tempo = require('../models/Tempo');

module.exports = {
	async index(req, res) {
		const tempos = await Tempo.find();

		return res.json(tempos);
	},

	async store(req, res) {
		const { tempo } = req.body;

		let retorno = Tempo.create({
			tempo
		});

		return res.json(retorno);
	}
};
