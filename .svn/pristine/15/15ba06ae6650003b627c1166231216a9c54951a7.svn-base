package Data;

import java.sql.ResultSet;


public class Controller {

	public ResultSet getData(String sql, IQueryWork iQueryWork){
		ResultSet resultSet = iQueryWork.getData(sql);
		
		return resultSet;
	}
	
	public int handleData(String sql, IDataHandleQueryWork iUpdateQueryWork){
		int resultNum = iUpdateQueryWork.updateQuery(sql);
		
		return resultNum;
	}
}
