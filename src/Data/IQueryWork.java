package Data;

import java.sql.ResultSet;

public interface IQueryWork {
	public ResultSet getData(String sql);
	public String makeJson(ResultSet rs);
}
