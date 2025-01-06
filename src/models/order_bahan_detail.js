"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order_Bahan_Detail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Order_Bahan_Detail.belongsTo(models.Order_Bahan, {
				foreignKey: "id_order_bahan",
				as: "order_bahan",
			});

			Order_Bahan_Detail.belongsTo(models.Bahan_Baku, {
				foreignKey: "id_bahan_baku",
				as: "bahan_baku",
			});
		}
	}
	Order_Bahan_Detail.init(
		{
			id_order_bahan: DataTypes.INTEGER,
			id_bahan_baku: DataTypes.INTEGER,
			jumlah: DataTypes.INTEGER,
			harga: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Order_Bahan_Detail",
		}
	);
	return Order_Bahan_Detail;
};

