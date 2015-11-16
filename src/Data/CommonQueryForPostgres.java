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

public class CommonQueryForPostgres implements IQueryWork {
	private Connection conn = null;

	/*
	 * (non-Javadoc)
	 * 
	 * @see Data.IQueryWork#getData(java.lang.String)
	 */
	public ResultSet getData(String sql) {
		// TODO Auto-generated method stub
		Statement st = null;
		ResultSet rs = null;
		IConnection connection = null;
		try {
			connection = new PostgresConnection();
			conn = connection.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {

		}

		return rs;
	}

	// @Deprecated
	public String makeJson(ResultSet rs) {
		ResultSetMetaData md = null;
		long startTime = System.currentTimeMillis();
		long endTime = System.currentTimeMillis();
		float duringTime = (endTime - startTime) / 1000;
		JSONArray jsonArray = new JSONArray();
		JSONObject jsonObject = null;
		String result = "";

		// String jsonString = "";

		try {
			md = rs.getMetaData();
			int countnum = 0;
			countnum = md.getColumnCount();
			String[] columnNames = new String[countnum];

			for (int a = 0; a < countnum; a++) {
				columnNames[a] = md.getColumnName(a + 1);
			}

			String value = "";

			int loopCount = 0;

			while (rs.next()) {
				result += rs.getString("result") + ",";
				jsonArray.put(rs.getString("result"));
				loopCount++;
			}

			result = result.substring(0, result.length() - 1);

//			System.out.println(result);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		result = "{\"d\":[" + result + "]}";

		return result;
	}
}
