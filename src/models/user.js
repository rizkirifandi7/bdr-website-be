"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Menu, {
				foreignKey: "id_user",
				as: "menu",
			});

			User.hasMany(models.Order_Bahan, {
				foreignKey: "id_user",
				as: "order_bahan",
			});
		}
	}
	User.init(
		{
			nama: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.ENUM("admin", "pegawai", "adminhome"),
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};

