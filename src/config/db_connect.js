import mongose from "mongoose";

mongose.connect(process.env.STRING_CONEXAO_DB);

let db = mongose.connection;

export default db;