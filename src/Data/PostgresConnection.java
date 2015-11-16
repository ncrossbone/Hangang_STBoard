package Data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PostgresConnection implements IConnection {

	@Override
	public Connection getConnection() {
		// TODO Auto-generated method stub
		//String url = "jdbc:postgresql://cetech.iptime.org:2000/hangang_geospacial_data";
		//String url = "jdbc:postgresql://cetech.iptime.org:2022/woo";
		//String url = "jdbc:postgresql://192.168.0.150:5432/woo";
		String url = "jdbc:postgresql://112.217.167.123:35432/woo";
		String usr = "postgres";
		String pwd = "postgres";
		Connection conn = null;

		try {
			Class.forName("org.postgresql.Driver");
			conn = DriverManager.getConnection(url, usr, pwd);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// -- 1

		return conn;
	}

}
