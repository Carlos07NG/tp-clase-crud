const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		return res.render('index',{
			productsVisited : products.filter(product=> product.category === "visited"),
			products,
			toThousand
		})
	},
	search: (req, res) => {
		// Do the magic
		const {keywords} = req.query;
		return res.render('results',{
			products : products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase())),
			keywords,
			toThousand
		})
	},
};

module.exports = controller;
