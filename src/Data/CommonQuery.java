/**
 * 
 */
package Data;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @FileName  : CommonQuery.java
 * @Project     : Suhyup_New
 * @Date         : 2011. 9. 6. 
 * @�ۼ���      : leeyunsoo
 * @�����̷� :
 * @���α׷� ���� :
 */
public class CommonQuery implements IQueryWork {
	private Connection conn = null;
	/* (non-Javadoc)
	 * @see Data.IQueryWork#getData(java.lang.String)
	 */
	public ResultSet getData(String sql) {
		// TODO Auto-generated method stub
		Statement st = null;
		ResultSet rs = null;
		OracleConnection oracleConnection = null;
		try {
			oracleConnection = new OracleConnection();
			conn = oracleConnection.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
//			try {
//				conn.close();
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
		}

		return rs;
	}
	
	/**
	 * @Method Name  : makeJson
	 * @�ۼ���   : 2011. 9. 6. 
	 * @�ۼ���   : leeyunsoo
	 * @�����̷�  :
	 * @Method ���� :
	 * @param rs
	 * @return
	 */
	//@Deprecated
	public String makeJson(ResultSet rs) {
		ResultSetMetaData md = null;
		long startTime = System.currentTimeMillis();
		long endTime = System.currentTimeMillis();
		float duringTime = (endTime - startTime) / 1000;
		JSONArray jsonArray = new JSONArray();
		JSONObject jsonObject = null;
		
		try {
			md = rs.getMetaData();
			int countnum = 0;
			countnum = md.getColumnCount();
			String[] columnNames = new String[countnum];

			for (int a = 0; a < countnum; a++) {
				columnNames[a] = md.getColumnName(a + 1);
			}
			
			String value = "";
			
//			result = new StringBuilder();
			int loopCount = 0;
			
			while (rs.next()) {
				jsonObject = new JSONObject();
				for (int a = 0; a < countnum; a++) {
					value = rs.getString(a + 1);
					if (value != null && value.indexOf(".") == 0) {
						value = Float.toString(rs.getFloat(a + 1));
					}else{
						value = rs.getString(a + 1);
					}
					if(value != null){
						jsonObject.put(columnNames[a], value.trim());
					}else{
						jsonObject.put(columnNames[a], "");
					}
				}
				jsonArray.put(jsonObject);
				loopCount++;
			}

//			System.out.println(loopCount);
			endTime = System.currentTimeMillis();
			duringTime = (endTime - startTime);
//			
			jsonObject = null;
			jsonObject = new JSONObject();

			jsonObject.put("d", jsonArray);

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		String jsonString = jsonObject.toString();
		return jsonString;
	}
	
	public String makeJson1(ResultSet rs) {
		ResultSetMetaData md = null;
		StringBuilder result = null;
		long startTime = System.currentTimeMillis();
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

//					result.append("\"" + columnNames[a] + "\":");
					result.append('\"');
					result.append(columnNames[a]);
					result.append("\":");
					if(rs.getString(a + 1) != null){
//						result.append("\"" + rs.getString(a + 1).trim() + "\"");
						result.append('\"');
						result.append(rs.getString(a + 1).trim());
						result.append('\"');
					}else{
						result.append("\"\"");
					}
				}
				result.append('}');
				loopCount++;
			}
			long endTime = System.currentTimeMillis();
			float duringTime = (endTime - startTime) / 1000;
			//System.out.println(duringTime);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				conn.close();
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
