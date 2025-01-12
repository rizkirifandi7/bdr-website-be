"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Reservasi extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Reservasi.init(
		{
			nama_pelanggan: DataTypes.STRING,
			kontak: DataTypes.STRING,
			tanggal_reservasi: DataTypes.DATE,
			jumlah_orang: DataTypes.STRING,
			ruangan: DataTypes.STRING,
			catatan: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Reservasi",
		}
	);
	return Reservasi;
};

