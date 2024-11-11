"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Kategori extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Kategori.hasMany(models.Menu, {
				foreignKey: "id_kategori",
				as: "menu",
			});
		}
	}
	Kategori.init(
		{
			nama_kategori: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Kategori",
			paranoid: true,
		}
	);
	return Kategori;
};

