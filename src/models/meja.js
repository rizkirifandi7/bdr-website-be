"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Meja extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Meja.init(
		{
			nomor_meja: DataTypes.STRING,
			qr_url: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Meja",
		}
	);
	return Meja;
};

