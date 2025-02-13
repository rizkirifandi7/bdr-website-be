"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Menu extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Menu.belongsTo(models.Kategori, {
				foreignKey: "id_kategori",
				as: "kategori",
			});

			Menu.hasMany(models.Item_Pesanan, {
				foreignKey: "id_menu",
				as: "item_pesanan",
			});

			Menu.belongsTo(models.User, {
				foreignKey: "id_user",
				as: "user",
			});
		}
	}
	Menu.init(
		{
			id_user: DataTypes.INTEGER,
			id_kategori: DataTypes.INTEGER,
			nama_menu: DataTypes.STRING,
			harga: DataTypes.INTEGER,
			deskripsi: DataTypes.TEXT,
			gambar: DataTypes.STRING,
			ispopuler: DataTypes.ENUM("populer", "tidak populer", "mitra"),
		},
		{
			sequelize,
			modelName: "Menu",
		}
	);
	return Menu;
};
