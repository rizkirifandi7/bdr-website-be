"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Bahan_Baku extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Bahan_Baku.hasMany(models.Order_Bahan_Detail, {
				foreignKey: "id_bahan_baku",
				as: "order_bahan_detail",
			});
		}
	}
	Bahan_Baku.init(
		{
			nama_bahan: DataTypes.STRING,
			jumlah: DataTypes.STRING,
			harga: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Bahan_Baku",
		}
	);
	return Bahan_Baku;
};

