"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Item_Pesanan extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Item_Pesanan.belongsTo(models.Pesanan, {
				foreignKey: "id_pesanan",
				as: "pesanan",
			});

			Item_Pesanan.belongsTo(models.Menu, {
				foreignKey: "id_menu",
				as: "menu",
			});
		}
	}
	Item_Pesanan.init(
		{
			id_pesanan: DataTypes.INTEGER,
			id_menu: DataTypes.INTEGER,
			jumlah: DataTypes.INTEGER,
			subtotal: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Item_Pesanan",
			paranoid: true,
		}
	);
	return Item_Pesanan;
};

