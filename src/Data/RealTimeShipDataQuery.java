/**
 * 
 */
package Data;

import java.sql.*;

/**
 * @FileName : RealTimeShipDataQuery.java
 * @Project : Suhyup_New
 * @Date : 2011. 9. 2.
 * @�ۼ��� : leeyunsoo
 * @�����̷� :
 * @���α׷� ���� :
 */
public class RealTimeShipDataQuery implements IQueryWork {

	/*
	 * (non-Javadoc)
	 * 
	 * @see Data.IQueryWork#getData(java.lang.String)
	 */
	public ResultSet getData(String sql) {
		// TODO Auto-generated method stub
		Statement st = null;
		Connection conn = null;
		ResultSet rs = null;
		IConnection oracleConnection = null;
		try {
			oracleConnection = new OracleConnection();
			conn = oracleConnection.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
		}

		return rs;
	}

	/**
	 * @Method Name  : makeJson
	 * @�ۼ���   : 2011. 9. 2. 
	 * @�ۼ���   : leeyunsoo
	 * @�����̷�  :
	 * @Method ���� :
	 * @param rs
	 * @return
	 */
	public String makeJson(ResultSet rs) {
		ResultSetMetaData md = null;
		StringBuilder result = null;
		try {
			md = rs.getMetaData();
			int countnum = 0;
			countnum = md.getColumnCount();
			String[] columnNames = new String[countnum];

			for (int a = 0; a < countnum; a++) {
				columnNames[a] = md.getColumnName(a + 1);
			}

			result = new StringBuilder();
			int loopCount = 0;

			
			while (rs.next()) {
				if (loopCount != 0) {
					result.append(',');
				}

				for (int a = 0; a < md.getColumnCount(); a++) {
					if (a != 0) {
						result.append(',');
					} else {
						result.append('{');
					}

					result.append("\"" + columnNames[a] + "\":");
					result.append("\"" + rs.getString(a + 1) + "\"");
				}
				result.append('}');
				loopCount++;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		JsonClass jsonClass = JsonClass.getJsonClass();
		String jsonString = jsonClass.makeJsonData(result.toString());
		
		return jsonString;
	}
}
