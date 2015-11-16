package Data;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import Data.query.Common;
import util.ConvertImage;

public class GeoDataQuery implements IQueryWork {
	private Connection conn = null;
	private String measure = null;
	
	public void setMeasure(String measure){
		this.measure = measure;
	}
	
	@Override 
	public ResultSet getData(String sql) {
		// TODO Auto-generated method stub
		Statement st = null;
		conn = null;
		ResultSet rs = null;
		IConnection postgresConnection = null;
		try {
			postgresConnection = new PostgresConnection();
			conn = postgresConnection.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
		}

		return rs;
	}

	@Override
	public String makeJson(ResultSet rs) {
		// TODO Auto-generated method stub
		ResultSetMetaData md = null;
		long startTime = System.currentTimeMillis();
		long endTime = System.currentTimeMillis();
		float duringTime = (endTime - startTime) / 1000;
		JSONArray jsonArray = new JSONArray();
		JSONObject jsonObject = null;
		String result = "";
		ConvertImage convertImage = new ConvertImage();
		String imageUrl = null;

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
			
			jsonObject = new JSONObject(result);
			JSONObject tempJsonObject = null;
			jsonArray = jsonObject.getJSONArray("features");
			Common common = new Common();
			String nowChartbarColor;
			for(int a = 0; a < jsonArray.length(); a++){
				tempJsonObject = jsonArray.getJSONObject(a).getJSONObject("properties");
				nowChartbarColor = common.getMarkerImageAndChartColor(Float.parseFloat(tempJsonObject.get("COL_DD_DT").toString()), measure, true);
				String chartType = "cht=bhs";
				String values =  tempJsonObject.get("COL_YR_DT") + "," + tempJsonObject.get("COL_MM_DT") + "," + tempJsonObject.get("COL_DD_DT");
				String range = "&amp;chds=a";
				String chartColor = "&amp;chco=FFC6A5|FFFF42|" + nowChartbarColor;
				String chartAxis = "&amp;chxt=x,y&amp;chxl=1:|" + URLEncoder.encode("현재", "UTF-8") + "|" + URLEncoder.encode("전월", "UTF-8") + "|" + URLEncoder.encode("전년", "UTF-8") + "";
				String background = "&amp;chf=bg,s,65432100";
				String chmNames = "&amp;chm=N,000000,0,-1,12";
				String chxsNames = "&amp;chxs=0N,000000"+"|"+"1N,000000";
				String chbhNames = "&amp;chbh=r,0.5";
				
				String charturl = "http://chart.apis.google.com/chart?" + chartType + "&amp;chd=t:" + values + "&amp;chs=170x100" + chartColor + chartAxis + range + background + chmNames + chxsNames + chbhNames;
				String statusImagePath = "";
				
				if("".equals(tempJsonObject.get("COL_DD_DT").toString())){
					statusImagePath = "zzz";
				}else{
					statusImagePath = common.getMarkerImageAndChartColor(Float.parseFloat(tempJsonObject.get("COL_DD_DT").toString()), measure, false);
				}
				imageUrl = convertImage.svgExportImage(charturl, tempJsonObject.get("MMP_NM").toString() + "(" + tempJsonObject.get("MW_NM").toString() + ")_"+tempJsonObject.get("SOO").toString(), statusImagePath);

				jsonArray.getJSONObject(a).getJSONObject("properties").put("imagePath", new Common().getWebsiteUrl() + "/hangang/resources/download/" + imageUrl);
			}
		} catch (Exception e) {
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

		result = "{\"d\":[" + jsonObject.toString() + "]}";
//		System.out.println("end");
		return result;
	}
}
