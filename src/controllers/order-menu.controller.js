const { Pesanan, Item_Pesanan, Menu, Kategori, User } = require("../models");

const dotenv = require("dotenv");
dotenv.config();

const getPesanan = async (req, res) => {
	try {
		const pesanan = await Pesanan.findAll({
			include: [
				{
					model: User,
					as: "user",
					attributes: ["nama", "email", "role"],
				},
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		return res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getAllPesananByUserId = async (req, res) => {
	try {
		const user = req.user;

		const pesanan = await Pesanan.findAll({
			where: { id_user: user.id },

			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		return res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getAllPesananByIdUser = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findAll({
			where: { id_user: id },

			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		return res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getPesananInformation = async (req, res) => {
  try {
    const orders = await Pesanan.findAll({
      where: { status: 'completed' },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["nama", "email", "role"],
        },
        {
          model: Item_Pesanan,
          as: "item_pesanan",
          attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
          include: [
            {
              model: Menu,
              as: "menu",
              include: [
                {
                  model: Kategori,
                  as: "kategori",
                  attributes: ["nama_kategori"],
                },
              ],
            },
          ],
        },
      ],
      order: [['order_time', 'ASC']]
    });

    // Group orders by mitra
    const mitraData = {};

    orders.forEach(order => {
      const mitraId = order.id_user;
      if (!mitraData[mitraId]) {
        mitraData[mitraId] = {
          id_mitra: mitraId,
          nama_mitra: order.user.nama,
          orders: [],
          dailySales: {},
          monthlySales: {},
          totalPenjualan: 0
        };
      }
      
      const date = new Date(order.order_time);
      const dateStr = date.toISOString().split('T')[0];
      const monthStr = dateStr.substring(0, 7);
      
      mitraData[mitraId].orders.push(order);
      mitraData[mitraId].totalPenjualan += Number(order.total);
      mitraData[mitraId].dailySales[dateStr] = (mitraData[mitraId].dailySales[dateStr] || 0) + Number(order.total);
      mitraData[mitraId].monthlySales[monthStr] = (mitraData[mitraId].monthlySales[monthStr] || 0) + Number(order.total);
    });

    // Format output for each mitra
    const mitraStats = Object.values(mitraData).map(mitra => {
      const months = Object.keys(mitra.monthlySales).sort();
      const currentMonth = months[months.length - 1];
      const previousMonth = months[months.length - 2];

      const monthlyChange = previousMonth
        ? ((mitra.monthlySales[currentMonth] - mitra.monthlySales[previousMonth]) / 
           mitra.monthlySales[previousMonth] * 100).toFixed(2)
        : 0;

      return {
        id_mitra: mitra.id_mitra,
        nama_mitra: mitra.nama_mitra,
        total_penjualan: mitra.totalPenjualan,
        penjualan_harian: mitra.dailySales,
        penjualan_bulanan: mitra.monthlySales,
        perubahan_bulanan: `${monthlyChange}%`,
        jumlah_pesanan: mitra.orders.length
      };
    });

    return res.status(200).json({
      status: true,
      message: "Data pesanan berhasil didapatkan",
      data: mitraStats
    });

  } catch (error) {
    return res.status(500).json({
      status: false, 
      message: error.message
    });
  }
};

const getPesananById = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getPesananByCodePayment = async (req, res) => {
	try {
		const { code_payment } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { code_payment },
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createPesanan = async (req, res) => {
	try {
		const user = req.user;
		const {
			tipe_payment,
			mode,
			total,
			items,
			code_payment,
			nama_pelanggan,
			status,
			catatan,
		} = req.body;

		const pesanan = await Pesanan.create({
			id_user: user.id,
			nama_pelanggan,
			code_payment,
			tipe_payment,
			mode,
			total,
			order_time: Date.now(),
			status: status || "pending",
			catatan,
		});

		const itemsToCreate = items.map((item) => ({
			...item,
			id_pesanan: pesanan.id,
			id_menu: item.id_menu,
			jumlah: item.quantity,
			subtotal: item.harga * item.quantity,
		}));

		await Item_Pesanan.bulkCreate(itemsToCreate);

		res.status(201).json({
			status: true,
			message: "Pesanan berhasil ditambahkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updatePesanan = async (req, res) => {
	try {
		const { id } = req.params;
		const { id_meja, status } = req.body;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.update({
			id_meja,
			order_time: Date.now(),
			status,
		});

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil diubah",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deletePesanan = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.destroy();

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getPesananInformation,
	getPesanan,
	getPesananById,
	getAllPesananByUserId,
	getAllPesananByIdUser,
	createPesanan,
	updatePesanan,
	deletePesanan,
	getPesananByCodePayment,
};
