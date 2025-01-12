"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order_Bahan extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Order_Bahan.belongsTo(models.User, {
				foreignKey: "id_user",
				as: "user",
			});

			Order_Bahan.hasMany(models.Order_Bahan_Detail, {
				foreignKey: "id_order_bahan",
				as: "order_bahan_detail",
			});
		}
	}
	Order_Bahan.init(
		{
			id_user: DataTypes.INTEGER,
			total_harga: DataTypes.INTEGER,
			status: DataTypes.STRING,
			feedback: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Order_Bahan",
		}
	);
	return Order_Bahan;
};

