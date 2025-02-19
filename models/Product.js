// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			validate: {
				// checks to see that input is any numer (int/float)
				isDecimal: true,
			},
		},
		stock: {
			type: DataTypes.INTEGER,
			// does allowNull need to be there if defaultValue is 10?
			allowNull: false,
			defaultValue: 10,
			validate: {
				isNumeric: true,
			},
		},
		category_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "category",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
);

module.exports = Product;
