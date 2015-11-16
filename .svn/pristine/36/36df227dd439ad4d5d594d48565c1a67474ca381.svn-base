package Data;

import java.util.Hashtable;
import java.util.Set;

/**
 * @FileName  : JsonClass.java
 * @Project     : Suhyup_New
 * @Date         : 2011. 9. 2. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 :
 */
public class JsonClass {
	public static JsonClass getJsonClass(){
		JsonClass jsonClass = new JsonClass();
		
		return jsonClass;
	}
	
	
	public String makeJsonData(String content){
		String resultString = "";
		resultString = "{\"d\":[" + content.trim() + "]}";
		
		return resultString;
	}
	
	public String makeJsonData(Hashtable<String, String> data){
		Set<String> keys = data.keySet();
		int count = 0;
		String resultString = "";
		resultString = "{\"";
		
		for (String key : keys) {
			if(count != 0){
				resultString += ",";
			}
			resultString += key + "\":[" + data.get(key) + "]";
		}
		resultString += "}";
		
		return resultString;
	}
}
