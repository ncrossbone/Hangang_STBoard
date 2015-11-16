package Data;

import java.sql.*;

/**
 * @FileName : OracleConnection.java
 * @Project : Suhyup_New
 * @Date : 2011. 9. 2.
 */
public class OracleConnection implements IConnection {

	/**
	 * @Method Name : getConnection
	 * @�ۼ��� : 2011. 9. 2.
	 * @�ۼ��� : leeyunsoo
	 * @�����̷� :
	 * @Method ���� :
	 * @return
	 */
	@Override
	public Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = null;
			String connectionURL = "jdbc:oracle:thin:@211.216.47.90:1521:orcl";
			conn = DriverManager.getConnection(connectionURL, "taceez",
					"station");

		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
}