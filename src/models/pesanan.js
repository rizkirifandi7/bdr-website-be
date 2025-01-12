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

			Pesanan.belongsTo(models.User, {
				as: "user",
				foreignKey: "id_user",
			});
		}
	}
	Pesanan.init(
		{
			id_user: DataTypes.INTEGER,
			nama_pelanggan: DataTypes.STRING,
			code_payment: DataTypes.STRING,
			tipe_payment: DataTypes.ENUM("Cash", "Transfer"),
			order_time: DataTypes.DATE,
			total: DataTypes.INTEGER,
			mode: DataTypes.ENUM("Dine In", "Pick Up", "Delivery"),
			status: DataTypes.ENUM("pending", "preparing", "completed", "canceled"),
			catatan: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Pesanan",
		}
	);
	return Pesanan;
};

