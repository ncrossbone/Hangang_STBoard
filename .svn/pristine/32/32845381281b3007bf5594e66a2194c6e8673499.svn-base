/**
 * 
 */
package Data;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @FileName  : CommonUpdateQuery.java
 * @Project     : Suhyup_New
 * @Date         : 2011. 9. 7. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 :
 */
public class CommonDataHandleQuery implements IDataHandleQueryWork{

	/* (non-Javadoc)
	 * @see Data.IUpdateQueryWork#updateQuery(java.lang.String)
	 */
	public int updateQuery(String sql) {
		// TODO Auto-generated method stub
		int resultNum = 0;
		Connection conn = null;
		Statement st = null;
		OracleConnection oracleConnection = null;
		
		try {
			oracleConnection = new OracleConnection();
			conn = oracleConnection.getConnection();
			st = conn.createStatement();
			resultNum = st.executeUpdate(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
		}

		return resultNum;
	}
	
}
