import oracledb from "oracledb";

oracledb.initOracleClient(); // if required (Windows)

const dbConfig = {
  user: "postgres",
  password: "YOUR_PASS",
  connectionString: "localhost:1521/orcl",
};

export async function getConnection() {
  return await oracledb.getConnection(dbConfig);
}
