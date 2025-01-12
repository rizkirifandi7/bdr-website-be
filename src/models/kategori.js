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

			Kategori.belongsTo(models.User, {
				foreignKey: "id_user",
				as: "user",
			});
		}
	}
	Kategori.init(
		{
			id_user: DataTypes.INTEGER,
			nama_kategori: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Kategori",
		}
	);
	return Kategori;
};

