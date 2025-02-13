"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Feedback extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Feedback.init(
		{
			nama: DataTypes.STRING,
			nomor_hp: DataTypes.STRING,
			kritik: DataTypes.TEXT,
			saran: DataTypes.TEXT,
			rating_menu: DataTypes.INTEGER,
			rating_pelayanan: DataTypes.INTEGER,
			rating_restoran: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Feedback",
		}
	);
	return Feedback;
};

