/**
 * 
 */
package Data;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Hashtable;

import org.hsqldb.jdbc.jdbcResultSet;
import org.json.*;

/**
 * @FileName  : CommonQuery.java
 * @Project     : Suhyup_New
 * @Date         : 2011. 9. 6. 
 * @�ۼ���      : leeyunsoo
 * @�����̷� :
 * @���α׷� ���� :
 */
public class CommonQuery2 implements IQueryWork {
	private Connection conn = null;
	/* (non-Javadoc)
	 * @see Data.IQueryWork#getData(java.lang.String)
	 */
	public ResultSet getData(String sql) {
		// TODO Auto-generated method stub
		Statement st = null;
		ResultSet rs = null;
		int r = 0;
		IConnection connection = null;
		try {
			connection = new PostgresConnection();
			conn = connection.getConnection();
			st = conn.createStatement();
			r = st.executeUpdate(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {

		}

		return rs;
	}
	@Override
	public String makeJson(ResultSet rs)
	{
		// TODO Auto-generated method stub
		return null;
	}
}