import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('m_barang', {
    kd_barang: {
        type: DataTypes.STRING
    },
    nm_barang: {
        type: DataTypes.STRING
    },
    stok: {
        type: DataTypes.STRING
    },
    harga: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
})

export default Product;