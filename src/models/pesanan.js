"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Pesanan extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Pesanan.hasMany(models.Item_Pesanan, {
				as: "item_pesanan",
				foreignKey: "id_pesanan",
			});

			Pesanan.belongsTo(models.Meja, {
				as: "meja",
				foreignKey: "id_meja",
			});
		}
	}
	Pesanan.init(
		{
			id_meja: DataTypes.INTEGER,
			order_time: DataTypes.DATE,
			total: DataTypes.INTEGER,
			mode: DataTypes.ENUM("Dine In", "Pick Up", "Delivery"),
			status: DataTypes.ENUM("pending", "completed", "canceled"),
		},
		{
			sequelize,
			modelName: "Pesanan",
		}
	);
	return Pesanan;
};

