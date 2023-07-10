import mongose from "mongoose";

mongose.connect("mongodb+srv://devCarlosAlexandre:trabalho1037@alura.vddlgwp.mongodb.net/?retryWrites=true&w=majority");

let db = mongose.connection;

export default db;