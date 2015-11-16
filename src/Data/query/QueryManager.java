/**
 * 
 */
package Data.query;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;

public class QueryManager {
	@SuppressWarnings("deprecation")
	public String getQueryString(int pageNum,  HttpServletRequest request){
		StringBuilder queryString = new StringBuilder();
		switch (pageNum) {
			case 1:
				System.out.println("1Query");
				queryString.append(" SELECT  ");
				queryString.append(" 'geog' as geometry_name, ");
				queryString.append(" 'bo.' || to_char(bo.gid, 'FM9999') as id, ");
				queryString.append("   ST_AsGeoJSON(ST_Transform(geometry(geog),900913)) as geoJson,  ");
				queryString.append("   \"POINT_DATA\".\"DATA_A\",  ");
				queryString.append("   \"POINT_DATA\".\"DATA_B\",  ");
				queryString.append("   \"POINT_DATA\".\"DATA_C\" ");
				queryString.append(" FROM  ");
				queryString.append("   public.\"POINT_DATA\",  ");
				queryString.append("   public.bo ");
				queryString.append(" WHERE  ");
				queryString.append("   bo.gid = \"POINT_DATA\".\"GID\" ");
				
				System.out.println("1 Query :"+queryString.toString());
				break;
				
			case 2:
				System.out.println("2Query");
				queryString.append(" SELECT  ");
				queryString.append(" 'geog' as geometry_name, ");
				queryString.append(" \"측정소명\" as pointName, ");
				queryString.append(" 'hacheon' || TO_CHAR(A.GID, 'FM9999') AS id, ");
				queryString.append(" ST_AsGeoJSON(ST_Transform(geometry(geog),900913)) as geoJson, ");
				queryString.append(" B.TODAY_DATA, ");
				queryString.append(" B.PREV_MONTH, ");
				queryString.append(" B.PREV_YEAR ");
				queryString.append("  ");
				queryString.append(" FROM ( ");
				queryString.append("  ");
				queryString.append(" SELECT     *   FROM     PUBLIC.HACHEONSU  WHERE      ");
				queryString.append(" \"측정소명\" in ('영월2', '충주댐', '달천4', '섬강4-1',      ");
				queryString.append(" '강천', '강상', '경안천5', '소양강2', '의암댐', '삼봉리',      ");
				queryString.append(" '팔당댐', '노량진', '가양', '임진강4', '안성천3')   ");
				queryString.append(" ) A, ");
				queryString.append(" HACHEON_POINT_DATA B ");
				queryString.append(" WHERE A.GID = B.GID ");
				
				System.out.println("2 Query :"+queryString.toString());
				break;
			case 3: 
				System.out.println("3Query");
				queryString.append(" SELECT  ");
				queryString.append(" ST_X(ST_AsText(geog)) as X, ");
				queryString.append(" ST_Y(ST_AsText(geog)) as Y, ");
				queryString.append(" A.\"측정소명\", ");
				queryString.append(" B.TODAY_DATA AS TODAYDATA, ");
				queryString.append(" B.PREV_MONTH AS PREVMONTH, ");
				queryString.append(" B.PREV_YEAR AS PREVYEAR");
				queryString.append(" FROM ");
				queryString.append(" (     ");
				queryString.append(" 	SELECT     *   FROM     PUBLIC.HACHEONSU  WHERE        ");
				queryString.append(" 	\"측정소명\" in ('영월2', '충주댐', '달천4', '섬강4-1',        ");
				queryString.append(" 	'강천', '강상', '경안천5', '소양강2', '의암댐', '삼봉리',        ");
				queryString.append(" 	'팔당댐', '노량진', '가양', '임진강4', '안성천3')     ");
				queryString.append(" ) A  ");
				
				queryString.append(" , HACHEON_POINT_DATA B ");
				queryString.append(" WHERE A.GID = B.GID ");
				
				System.out.println("3 Query :"+queryString.toString());
				break;
				
			case 4:
				System.out.println("4Query");
				queryString.append(" SELECT row_to_json(t) as result FROM ( ");
				queryString.append(" 	select 'FeatureCollection' AS type, ");
				queryString.append(" 	array_to_json(array_agg(row_to_json(a))) AS features from ");
				queryString.append(" 	( ");
				queryString.append(" 		SELECT    ");
				queryString.append(" 		'Feature' as type, ");
				queryString.append(" 		'bo.' || to_char(HACHEONSU.gid, 'FM9999') as id,     ");
				queryString.append(" 		ST_AsGeoJSON(ST_Transform(geometry(geog),900913))::json as geometry,   ");
				queryString.append(" 		'geog' as geometry_name,   ");
				queryString.append(" 		( ");
				queryString.append(" 			SELECT row_to_json(PROPERTY_TMP) from ( ");
				queryString.append(" 				SELECT  ");
				queryString.append(" 				DISTINCT ");
				queryString.append(" 				TODAY_DATA,      ");
				queryString.append(" 				PREV_MONTH,      ");
				queryString.append(" 				PREV_YEAR ");
				queryString.append(" 				FROM  ");
				queryString.append(" 				public.HACHEON_POINT_DATA ");
				queryString.append(" 				WHERE GID = HACHEONSU.GID ");
				queryString.append(" 			) AS PROPERTY_TMP ");
				queryString.append(" 		) AS PROPERTIES ");
				queryString.append(" 		FROM  ");
				queryString.append(" 		( ");
				queryString.append(" 			SELECT * FROM  ");
				queryString.append(" 			public.HACHEONSU ");
				queryString.append(" 			WHERE \"측정소명\" in ('영월2', '충주댐', '달천4', '섬강4-1',       '강천', '강상', '경안천5', '소양강2', '의암댐', '삼봉리',       '팔당댐', '노량진', '가양', '임진강4', '안성천3') ");
				queryString.append(" 		) AS HACHEONSU,     ");
				queryString.append(" 		public.HACHEON_POINT_DATA ");
				queryString.append(" 		WHERE     HACHEONSU.gid =  HACHEON_POINT_DATA.GID ");
				queryString.append(" 	) as a ");
				queryString.append(" ) as t ");

				System.out.println("4 Query :"+queryString.toString());
				break;
				
			case 5:
				System.out.println("5Query");
				String value = "";
				try {
					value = URLDecoder.decode(request.getParameter("col"), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				String spotGubun = request.getParameter("spotGubun");
				
				if("2".equals(spotGubun)){
					//일반지점
					spotGubun = " AND \"구분\" LIKE '%일반%'";
				}else if("3".equals(spotGubun)){
					//총량지점
					spotGubun = " AND \"구분\" LIKE '%총량%'";
				}else if("4".equals(spotGubun)){
					//중권역 대표지점
					spotGubun = " AND \"구분\" LIKE '%중권역%'";
				}else if("5".equals(spotGubun)){
					//주요지점
					spotGubun = " AND \"구분\" LIKE '%주요%'";
				}else if("6".equals(spotGubun)){
					//보지점
					spotGubun = " AND \"구분\" LIKE '%보%' AND \"구분\" <> '예보'";
				}else if("7".equals(spotGubun)){
					//예보지점
					spotGubun = " AND \"구분\" LIKE '%예보%'";
				}
				
				if(spotGubun == null){
					spotGubun = "";
				}
				
				queryString.append(" SELECT row_to_json(t) as result FROM (  ");
				queryString.append(" 	select 'FeatureCollection' AS type,  ");
				queryString.append(" 		array_to_json(array_agg(row_to_json(a))) AS features from  ");
				queryString.append(" 		(  ");
				queryString.append(" 			SELECT  ");
				queryString.append(" 			'Feature' as type, ");
				queryString.append(" 			ST_AsGeoJSON(ST_Transform(geometry(geog),900913))::json as geometry,  ");
				queryString.append(" 			'geog' as geometry_name, ");
				queryString.append(" 			( ");
				queryString.append(" 				SELECT row_to_json(PROPERTY_TMP) from ( ");
				queryString.append(" 					SELECT " + value + " from  ");
				queryString.append(" 					\"수질측정망_데이터\" ");
				queryString.append(" 					where \"측정소코드\" = sujil.\"측정소코드\" ");
				queryString.append(" 				) as PROPERTY_TMP ");
				queryString.append(" 			) AS PROPERTIES ");
				queryString.append("  ");
				queryString.append(" 			from ");
				queryString.append(" 			sujil ");
				queryString.append(" 			INNER JOIN ");
				queryString.append(" 			\"수질측정망_데이터\" AS DATA ");
				queryString.append(" 			ON sujil.\"측정소코드\" = DATA.\"측정소코드\" " + spotGubun);
				queryString.append(" 	) as a ");
				queryString.append(" ) as t ");
				
				System.out.println("5 Query :"+queryString.toString());
				break;
				
			case 6:
				System.out.println("6Query");
				value = "";
				try {
					value = URLDecoder.decode(request.getParameter("col"), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				queryString.append(" SELECT row_to_json(t) as result FROM (   ");
				queryString.append(" 	select 'FeatureCollection' AS type,   ");
				queryString.append(" 		array_to_json(array_agg(row_to_json(a))) AS features from   ");
				queryString.append(" 		(   ");
				queryString.append(" 			SELECT   ");
				queryString.append(" 			'Feature' as type,  ");
				queryString.append(" 			ST_AsGeoJSON(ST_Transform(geometry(geog),900913))::json as geometry,   ");
				queryString.append(" 			'geog' as geometry_name,  ");
				queryString.append(" 			(  ");
				queryString.append(" 				SELECT row_to_json(PROPERTY_TMP) from (  ");
				queryString.append(" 					SELECT " + value + " from   ");
				queryString.append(" 					\"자동측정망_데이터\"  ");
				queryString.append(" 					where \"측정코드\" = auto.\"측정소코드\"  ");
				queryString.append(" 				) as PROPERTY_TMP  ");
				queryString.append(" 			) AS PROPERTIES  ");
				queryString.append("   ");
				queryString.append(" 			from  ");
				queryString.append(" 			auto  ");
				queryString.append(" 			INNER JOIN  ");
				queryString.append(" 			\"자동측정망_데이터\" AS DATA  ");
				queryString.append(" 			ON auto.\"측정소코드\" = DATA.\"측정코드\"  ");
				queryString.append(" 	) as a  ");
				queryString.append(" ) as t ");

				System.out.println("6 Query :"+queryString.toString());
				break;
				
			case 7:
				System.out.println("7Query");
				value = "";
				try {
					value = URLDecoder.decode(request.getParameter("col"), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				queryString.append(" SELECT row_to_json(t) as result FROM (   ");
				queryString.append(" 	select 'FeatureCollection' AS type,   ");
				queryString.append(" 		array_to_json(array_agg(row_to_json(a))) AS features from   ");
				queryString.append(" 		(   ");
				queryString.append(" 			SELECT   ");
				queryString.append(" 			'Feature' as type,  ");
				queryString.append(" 			ST_AsGeoJSON(ST_Transform(geometry(geog),900913))::json as geometry,   ");
				queryString.append(" 			'geog' as geometry_name,  ");
				queryString.append(" 			(  ");
				queryString.append(" 				SELECT row_to_json(PROPERTY_TMP) from (  ");
				queryString.append(" 					SELECT " + value + " from   ");
				queryString.append(" 					\"조류측정망_데이터\"  ");
				queryString.append(" 					where \"측정코드\" = joryu.code  ");
				queryString.append(" 				) as PROPERTY_TMP  ");
				queryString.append(" 			) AS PROPERTIES  ");
				queryString.append("   ");
				queryString.append(" 			from  ");
				queryString.append(" 			joryu  ");
				queryString.append(" 			INNER JOIN  ");
				queryString.append(" 			\"조류측정망_데이터\" AS DATA  ");
				queryString.append(" 			ON joryu.code = DATA.\"측정코드\"  ");
				queryString.append(" 	) as a  ");
				queryString.append(" ) as t ");
				
				System.out.println("7 Query :"+queryString.toString());
				break;
				
			case 8:
				System.out.println("8Query");
				value = "";
				try {
					value = URLDecoder.decode(request.getParameter("col"), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				queryString.append(" SELECT row_to_json(t) as result FROM (   ");
				queryString.append(" 	select 'FeatureCollection' AS type,   ");
				queryString.append(" 		array_to_json(array_agg(row_to_json(a))) AS features from   ");
				queryString.append(" 		(   ");
				queryString.append(" 			SELECT   ");
				queryString.append(" 			'Feature' as type,  ");
				queryString.append(" 			ST_AsGeoJSON(ST_Transform(geometry(geog),900913))::json as geometry,   ");
				queryString.append(" 			'geog' as geometry_name,  ");
				queryString.append(" 			(  ");
				queryString.append(" 				SELECT row_to_json(PROPERTY_TMP) from (  ");
				queryString.append(" 					SELECT " + value + " from   ");
				queryString.append(" 					\"ip_usn_데이터\"  ");
				queryString.append(" 					where \"측정코드\" = ip_usn.code  ");
				queryString.append(" 				) as PROPERTY_TMP  ");
				queryString.append(" 			) AS PROPERTIES  ");
				queryString.append("   ");
				queryString.append(" 			from  ");
				queryString.append(" 			ip_usn  ");
				queryString.append(" 			INNER JOIN  ");
				queryString.append(" 			\"ip_usn_데이터\" AS DATA  ");
				queryString.append(" 			ON ip_usn.code = DATA.\"측정코드\"  ");
				queryString.append(" 	) as a  ");
				queryString.append(" ) as t ");
				
				System.out.println("8 Query :"+queryString.toString());
				break;
				
			case 9:
				System.out.println("9Query");
				value = "";
				try {
					value = URLDecoder.decode(request.getParameter("col"), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				queryString.append(" SELECT row_to_json(t) as result ");
				queryString.append(" FROM ( ");
				queryString.append("     select 'FeatureCollection' AS type, ");
				queryString.append("     array_to_json(array_agg(row_to_json(a))) AS features ");
				queryString.append("     from ( ");
				queryString.append("         SELECT 'Feature' as type, ");
				queryString.append("         ST_AsGeoJSON(ST_Transform(geometry(geog), 900913))::json as geometry, ");
				queryString.append("         'geog' as geometry_name, ");
				queryString.append("         ( ");
				queryString.append("             SELECT row_to_json(PROPERTY_TMP) ");
				queryString.append("             from ( ");
				queryString.append("                 SELECT \"저수량(㎥/s)\" as TODAY_DATA, ");
				queryString.append("                 \"공용량(㎥/s)\" as PREV_MONTH, ");
				queryString.append("                 \"저수율(%)\" as PREV_YEAR, ");
				queryString.append("                 \"관측소명\" as POINT_NAME ");
				queryString.append("                 from \"수문정보_데이터\" ");
				queryString.append("                 where \"측정코드\" = soomun.\"관측소코드\"  ");
				queryString.append("             ) as PROPERTY_TMP  ");
				queryString.append("         ) AS PROPERTIES ");
				queryString.append("         from soomun INNER JOIN \"수문정보_데이터\" AS DATA ON soomun.\"관측소코드\" = DATA.\"측정코드\"  ");
				queryString.append("     ) as a  ");
				queryString.append(" ) as t  ");
				
				System.out.println("9 Query :"+queryString.toString());
				break;
				
			case 18:
				System.out.println("18Query");
				String measure = request.getParameter("measure");
				String colName = getColDataName(measure);
				
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT \"측정지점명\" as pointName, " + colName + " as data FROM \"수질측정망_데이터\") AS A ");
				
				System.out.println("18 Query :"+queryString.toString());
				break;
			case 19:
				System.out.println("19Query");
				measure = request.getParameter("measure");
				colName = getColDataName(measure);
				
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT \"측정지점명\" as pointName, " + colName + " as data FROM \"자동측정망_데이터\") AS A ");
				
				System.out.println("19 Query :"+queryString.toString());
				break;
			case 20:
				System.out.println("20Query");
				measure = request.getParameter("measure");
				colName = getColDataName(measure);
				
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT \"측정소명\" as pointName, " + colName + " as data FROM \"조류측정망_데이터\") AS A ");
				
				System.out.println("20 Query :"+queryString.toString());
				break;
			case 21:
//				System.out.println("21Query");
				measure = request.getParameter("measure");
				colName = getColDataName(measure);
				
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT \"측정소명\" as pointName, " + colName + " as data FROM \"ip_usn_데이터\") AS A ");
				
				System.out.println("21 Query :"+queryString.toString());
				break;
				
			case 22:
				//System.out.println("22Query");
				measure = request.getParameter("measure");
				colName = "\"저수위 (EL.m)\"";
				
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT \"측정지점명\" as pointName, " + colName + " as data FROM \"수문정보_데이터\") AS A ");
				
				System.out.println("22 Query :"+queryString.toString());
				break;
				
			case 30: //top 맵 extent
//				System.out.println("30Query");
				queryString.append("SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT FROM (SELECT mw_name, mw_code FROM junghangang  where ws_name='한강') AS A");
				
				System.out.println("30 Query :"+queryString.toString());
				break;
				
			case 31:
				//System.out.println("31Query");
				String condition = request.getParameter("condition");
				
				if("all".equals(condition)){
					condition = "";
				}else{
					condition = " WHERE mw_code='" + condition + "'";
				}
				
				queryString.append(" SELECT row_to_json(t) as RESULT ");
				queryString.append(" FROM ( ");
				queryString.append("     select 'FeatureCollection' AS type, ");
				queryString.append("     array_to_json(array_agg(row_to_json(a))) AS features ");
				queryString.append("     from ( ");
				queryString.append("         SELECT 'Feature' as type, ");
				queryString.append("         ST_AsGeoJSON(ST_Transform(geometry(geog), 900913))::json as geometry, ");
				queryString.append("         'geog' as geometry_name ");
				queryString.append("         from junghangang  " + condition );
				queryString.append("     ) as a  ");
				queryString.append(" ) as t ");
				
				System.out.println("31 Query :"+queryString.toString());
				break;
				
			case 40: //마커랑 차트 검색 쿼리
//				System.out.println("40Query");
				measure = request.getParameter("measure");
				spotGubun = request.getParameter("spotGubun");
				Calendar calendar = Calendar.getInstance();
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				
				String today = dateFormat.format(calendar.getTime());
				today = today.substring(0, 7);
				//System.out.println("today : "+today);
				
				calendar.add(Calendar.MONTH, -1);
				//calendar.set(Calendar.DAY_OF_MONTH, 1);
				String prevMonth = dateFormat.format(calendar.getTime());
				//String prevMonth = dateFormat.format(calendar.add(Calendar.MONTH, -1));
				//prevMonth = "2014-06-16";
				System.out.println("prevMonth : "+prevMonth);
				calendar = Calendar.getInstance();
				
				calendar.add(Calendar.YEAR, -1);
				//calendar.set(Calendar.MONTH, 0);
				//calendar.set(Calendar.DAY_OF_MONTH, 1);
				String prevYear = dateFormat.format(calendar.getTime());
				//prevMonth = "2013-07-16";
				System.out.println("prevYear : "+prevYear);
				
//				queryString.append("  SELECT row_to_json(t) as result    ");
//				queryString.append("  FROM    ");
//				queryString.append("  (   	 ");
//				queryString.append(" 	select  ");
//				queryString.append(" 	'FeatureCollection' AS type,   	 ");
//				queryString.append(" 	array_to_json(array_agg(row_to_json(a))) AS features   	 ");
//				queryString.append(" 	FROM   	 ");
//				queryString.append(" 	(  		 ");
//				queryString.append(" SELECT   		  		 ");
//				queryString.append(" 'Feature' AS TYPE,  		  		 ");
//				queryString.append(" ST_AsGeoJSON(ST_Transform(geometry(\"GEOG\"),900913))::json as geometry,    		  		 ");
//				queryString.append(" 'geog' AS GEOMETRY_NAME,  		  		 ");
//				queryString.append(" COALESCE((  			  			 ");
//				queryString.append(" 	SELECT ROW_TO_JSON(PROPERTY_TMP)   			 ");
//				queryString.append(" 	FROM   			 ");
//				queryString.append(" 	(  								  				 ");
//				queryString.append(" 		SELECT   				 ");
//				queryString.append(" 		\"MMP_INFO2\".\"MMP_NM\",  				 ");
//				queryString.append(" 		CASE WHEN \"COL_DD_DT\" = '' THEN '0' ELSE \"COL_DD_DT\" END AS \"COL_DD_DT\" 	,			 ");
//				queryString.append(" 		CASE WHEN \"COL_MM_DT\" = '' THEN '0' ELSE \"COL_MM_DT\" END AS \"COL_MM_DT\" 	,			 ");
//				queryString.append(" 		CASE WHEN \"COL_YR_DT\" = '' THEN '0' ELSE \"COL_YR_DT\" END AS \"COL_YR_DT\" 	,			 ");
//				//queryString.append(" 		COALESCE(\"COL_DD_DT\", '0') AS \"COL_DD_DT\",  				 ");
//				//queryString.append(" 		COALESCE(\"COL_MM_DT\", '0') AS \"COL_MM_DT\",  				 ");
//				//queryString.append(" 		COALESCE(\"COL_YR_DT\", '0') AS \"COL_YR_DT\",  				 ");
//				queryString.append(" 		\"MW_NM\"  				 ");
//				queryString.append(" 		FROM  				 ");
//				queryString.append(" 		(  				 ");
//				queryString.append(" 		SELECT * FROM (  				 "); //
//				queryString.append(" 		SELECT * FROM   				 "); //
//				
//				queryString.append(" 			(SELECT   				 "); // 일 데이타 시작 
//				queryString.append(" 			\"COL_DD_DT\",  				 ");
//				queryString.append(" 			\"MMP_CD\" AS \"mmpcd\",  				 ");
//				queryString.append(" 			ROW_NUMBER() OVER(PARTITION BY \"MMP_CD\" ORDER BY \"DATE\" DESC) AS CNT 			 ");
//				queryString.append(" 			FROM   				 ");
//				queryString.append(" 			\"COL_DD_DT_TEMP2\"  				 ");
//				queryString.append(" 			WHERE \"MSM_LT_CD\"= '" + measure + "'  				 ");
//				queryString.append(" 			AND \"PT_DIV_CD\" = '" + spotGubun + "'  				 ");
//				//queryString.append(" 			AND \"DATE\" = '" + today + "'  				 ");
//				queryString.append(" 		) AS DD  				 ");
//				queryString.append(" 		LEFT OUTER JOIN   				 ");
//				queryString.append(" 		(  				 ");
//				
//				queryString.append(" 			SELECT   				 "); // 월 데이타 시작 
//				queryString.append(" 			\"COL_MM_DT\",  				 ");
//				queryString.append(" 			\"MMP_CD\"  				 ");
//				queryString.append(" 			FROM   				 ");
//				queryString.append(" 			\"COL_MM_DT_TEMP\"  				 ");
//				queryString.append(" 			WHERE \"MSM_LT_CD\"='" + measure + "'  				 ");
//				queryString.append(" 			AND \"PT_DIV_CD\" = '" + spotGubun + "'  				 ");
//				//queryString.append(" 			AND \"DATE\" = '" + prevMonth + "'  				 ");
//				queryString.append(" 		) AS MM  				 ");
//				queryString.append(" 		ON DD.\"mmpcd\" = MM.\"MMP_CD\"  				 ");
//				queryString.append(" 		LEFT OUTER JOIN  				 ");
//				queryString.append(" 		(  				 ");
//				
//				queryString.append(" 			SELECT   				 "); // 년 데이타 시작 
//				queryString.append(" 			\"COL_YR_DT\",  				 ");
//				queryString.append(" 			\"MMP_CD\",  				 ");
//				queryString.append(" 			ROW_NUMBER() OVER(PARTITION BY \"MMP_CD\" ORDER BY \"DATE\") AS MM_CNT 			 ");
//				queryString.append(" 			FROM   				 ");
//				queryString.append(" 			\"COL_YR_DT_TEMP\"  				 ");
//				queryString.append(" 			WHERE \"MSM_LT_CD\"='" + measure + "'  				 ");
//				queryString.append(" 			AND \"PT_DIV_CD\" = '" + spotGubun + "'  				 ");
//				//queryString.append(" 			AND \"DATE\" = '" + prevYear + "'  				 ");
//				queryString.append(" 		) AS YR  				 ");
//				queryString.append(" 		ON DD.\"mmpcd\" = YR.\"MMP_CD\"	    				 ");
//				queryString.append(" 		WHERE MM_CNT = 1 AND CNT = 1) aa, 				 "); //
//				queryString.append(" 		\"MW_INFO\" AS MWINFO "); //
//				queryString.append(" 		WHERE  MWINFO.\"MW_CD\"  = \"MMP_INFO2\".\"MW_CD\"  ) bb               "); //
//				queryString.append(" 		WHERE bb.\"mmpcd\" = \"MMP_INFO2\".\"MMP_CD\"		  			 ");
//				queryString.append(" 	) AS PROPERTY_TMP  		  		 ");
//				queryString.append(" ),  ");
//				queryString.append(" ( ");
//				queryString.append(" 	SELECT ROW_TO_JSON(PROPERTY_TMP1)    ");
//				queryString.append(" 	FROM ");
//				queryString.append(" 	( ");
//				queryString.append(" 		SELECT  ");
//				queryString.append(" 		\"MMP_INFO2\".\"MMP_NM\",  				 ");
//				queryString.append(" 		'0' AS \"COL_DD_DT\",  				 ");
//				queryString.append(" 		'0' AS \"COL_MM_DT\",  				 ");
//				queryString.append(" 		'0' AS \"COL_YR_DT\",   ");
//				
//				queryString.append(" ( ");
//				queryString.append(" 	SELECT \"MW_NM\" FROM \"MW_INFO\" WHERE \"MW_CD\" = \"MMP_INFO2\".\"MW_CD\" ");
//				queryString.append(" ) ");
//				
//				queryString.append(" 	) AS PROPERTY_TMP1 ");
//				queryString.append(" ) ");
//				queryString.append(" ) AS PROPERTIES    		  		 ");
//				queryString.append(" FROM   		  		 ");
//				queryString.append(" \"MMP_INFO2\"  		  		 ");
//				queryString.append(" WHERE \"PT_DIV_CD\" = '" + spotGubun + "'   ");
//				queryString.append(" 	) AS A    ");
//				queryString.append(" ) AS T ");
				
				//14.07.22 박순형 검색 쿼리 수정
				
				queryString.append(" SELECT row_to_json(t) AS result ");
				queryString.append(" FROM ");
				queryString.append("   (SELECT 'FeatureCollection'                AS type, ");
				queryString.append("     array_to_json(array_agg(row_to_json(a))) AS features ");
				queryString.append("   FROM ");
				queryString.append("     (SELECT 'Feature'                                           AS TYPE, ");
				queryString.append("       ST_AsGeoJSON(ST_Transform(geometry(\"GEOG\"),900913))::json AS geometry, ");
				queryString.append("       'geog'                                                    AS GEOMETRY_NAME, ");
				queryString.append("       ROW_TO_JSON(C)                                            AS PROPERTIES ");
				queryString.append("     FROM ");
				queryString.append("       (SELECT \"MMP_CD\" , ");
				queryString.append("         \"PT_DIV_CD\" , ");
				queryString.append("         \"MW_CD\" , ");
				queryString.append("         \"MW_NM\" , ");
				queryString.append("         \"GEOG\" , ");
				queryString.append("         \"MMP_NM\" , ");
				queryString.append("         \"AT_ORD\" , ");
				queryString.append("         CASE");
				queryString.append("         WHEN \"SOO\" IS NULL");
				queryString.append("         THEN ''");
				queryString.append("         ELSE \"SOO\"");
				queryString.append("         END AS \"SOO\",");
				queryString.append("         CASE ");
				queryString.append("           WHEN \"col_dd_dt\" IS NULL ");
				queryString.append("           THEN '0' ");
				queryString.append("           WHEN trim(\"col_dd_dt\") = '' ");
				queryString.append("           THEN '0' ");
				queryString.append("           ELSE \"col_dd_dt\" ");
				queryString.append("         END AS \"COL_DD_DT\", ");
				queryString.append("         CASE ");
				queryString.append("           WHEN \"col_mm_dt\" IS NULL ");
				queryString.append("           THEN '0' ");
				queryString.append("           WHEN trim(\"col_mm_dt\") = '' ");
				queryString.append("           THEN '0' ");
				queryString.append("           ELSE \"col_mm_dt\" ");
				queryString.append("         END AS \"COL_MM_DT\", ");
				queryString.append("         CASE ");
				queryString.append("           WHEN \"col_yr_dt\" IS NULL ");
				queryString.append("           THEN '0' ");
				queryString.append("           WHEN trim(\"col_yr_dt\") = '' ");
				queryString.append("           THEN '0' ");
				queryString.append("           ELSE \"col_yr_dt\" ");
				queryString.append("         END AS \"COL_YR_DT\" ");
				queryString.append("       FROM ");
				queryString.append("         (SELECT \"MMP_CD\" , ");
				queryString.append("           \"PT_DIV_CD\" , ");
				queryString.append("           \"MW_CD\" , ");
				queryString.append("           \"MW_NM\" , ");
				queryString.append("           \"GEOG\" , ");
				queryString.append("           \"MMP_NM\" , ");
				queryString.append("           \"AT_ORD\" , ");
				queryString.append("           (SELECT \"COL_DD_DT\" ");
				queryString.append("           FROM \"COL_DD_DT\" ");
				queryString.append("           WHERE \"MMP_INFO\".\"MMP_CD\" = \"COL_DD_DT\".\"MMP_CD\" ");
				queryString.append("           AND \"MSM_LT_CD\"           = '" + measure + "' LIMIT 1 ");
				queryString.append("           ) AS COL_DD_DT , ");
				queryString.append("           (SELECT \"COL_MM_DT\" ");
				queryString.append("           FROM \"COL_MM_DT\" ");
				queryString.append("           WHERE \"MMP_INFO\".\"MMP_CD\" = \"COL_MM_DT\".\"MMP_CD\" ");
				queryString.append("           AND \"MSM_LT_CD\"           = '" + measure + "' LIMIT 1 ");
				queryString.append("           ) AS COL_MM_DT , ");
				queryString.append("           (SELECT \"COL_YR_DT\" ");
				queryString.append("           FROM \"COL_YR_DT\" ");
				queryString.append("           WHERE \"MMP_INFO\".\"MMP_CD\" = \"COL_YR_DT\".\"MMP_CD\" ");
				queryString.append("           AND \"MSM_LT_CD\"           = '" + measure + "' LIMIT 1 ");
				queryString.append("           ) AS COL_YR_DT, ");
				queryString.append("           (SELECT \"환경기준\" ");
				queryString.append("           FROM public.soo ");
				queryString.append("           WHERE \"MMP_INFO\".\"MMP_CD\" = public.soo.\"측정소코드\" ");
				queryString.append("           ) AS \"SOO\" ");
				queryString.append("         FROM \"MMP_INFO\" ");
				queryString.append("         WHERE 1         =1 ");
				queryString.append("         AND \"PT_DIV_CD\" = '" + spotGubun + "' ");
				queryString.append("         ) AS D ");
				queryString.append("       ) AS C ");
				queryString.append("     ) AS A ");
				queryString.append("   ) AS T ");
				
				System.out.println("40 Query :"+queryString.toString());
				
				
				break;
				
			case 41: // 지점들의 feature를 받기위한 간단한 쿼리
//				System.out.println("41Query");
				spotGubun = request.getParameter("spotGubun");
				
				queryString.append("  SELECT row_to_json(t) as result    ");
				queryString.append("  FROM    ");
				queryString.append("  (   	 ");
				queryString.append(" 	select  ");
				queryString.append(" 	'FeatureCollection' AS type,   	 ");
				queryString.append(" 	array_to_json(array_agg(row_to_json(a))) AS features   	 ");
				queryString.append(" 	FROM   	 ");
				queryString.append(" 	(  		 ");
				queryString.append(" 		SELECT   		 ");
				queryString.append(" 		'Feature' AS TYPE,  		 ");
				queryString.append(" 		ST_AsGeoJSON(ST_Transform(geometry(\"GEOG\"),900913))::json as geometry,    		 ");
				queryString.append(" 		'geog' AS GEOMETRY_NAME,  		 ");
				queryString.append(" 		'' AS PROPERTIES    		 ");
				queryString.append(" 		FROM   		 ");
				queryString.append(" 		\"MMP_INFO\"  		 ");
				queryString.append(" 		WHERE \"PT_DIV_CD\" = '" + spotGubun + "'  	 ");
				queryString.append(" 	) AS A   ");
				queryString.append(" ) AS T ");
				
				System.out.println("41 Query :"+queryString.toString());
				
				break;
				
			case 42: //FooterPanel 
//				System.out.println("42Query");
				measure = request.getParameter("measure");
				spotGubun = request.getParameter("spotGubun");
				
				
				
//				queryString.append(" SELECT  ");
//				queryString.append(" array_to_json(array_agg(row_to_json(A))) AS RESULT  ");
//				queryString.append(" FROM ( ");
//				queryString.append(" 	 ");
//				queryString.append(" 	SELECT A.\"MMP_NM\", \"COL_DD_DT\" FROM \"MMP_INFO\" AS A ");
//				queryString.append(" 	INNER JOIN \"COL_DD_DT\" AS B ");
//				queryString.append(" 	ON A.\"MMP_CD\" = B.\"MMP_CD\" ");
//				queryString.append(" 	 ");
//				queryString.append(" 	WHERE A.\"PT_DIV_CD\" = '" + spotGubun + "' ");
//				queryString.append(" 	AND   B.\"MSM_LT_CD\" = '" + measure + "' ");
//				queryString.append(" ) AS A ");
				
				
				//14.07.22 박순형 검색 쿼리 수정
				queryString.append(" SELECT array_to_json(array_agg(row_to_json(A))) AS RESULT ");
				queryString.append(" FROM ");
				queryString.append("   (SELECT \"MMP_NM\" , ");
				queryString.append("     CASE ");
				queryString.append("       WHEN \"col_dd_dt\" IS NULL ");
				queryString.append("       THEN '0' ");
				queryString.append("       WHEN trim(\"col_dd_dt\") = '' ");
				queryString.append("       THEN '0' ");
				queryString.append("       ELSE \"col_dd_dt\" ");
				queryString.append("     END AS \"COL_DD_DT\" ");
				queryString.append("   FROM ");
				queryString.append("     (SELECT \"MMP_CD\" , ");
				queryString.append("       \"PT_DIV_CD\" , ");
				queryString.append("       \"MW_CD\" , ");
				queryString.append("       \"MW_NM\" , ");
				queryString.append("       \"GEOG\" , ");
				queryString.append("       \"MMP_NM\" , ");
				queryString.append("       \"AT_ORD\" , ");
				queryString.append("       (SELECT \"COL_DD_DT\" ");
				queryString.append("       FROM \"COL_DD_DT\" ");
				queryString.append("       WHERE \"MMP_INFO\".\"MMP_CD\" = \"COL_DD_DT\".\"MMP_CD\" ");
				queryString.append("       AND \"MSM_LT_CD\"           = '" + measure + "' LIMIT 1 ");
				queryString.append("       ) AS COL_DD_DT ");
				queryString.append("     FROM \"MMP_INFO\" ");
				queryString.append("     WHERE 1         =1 ");
				queryString.append("     AND \"PT_DIV_CD\" = '" + spotGubun + "' ");
				queryString.append("     ) AS D ");
				queryString.append("   ) AS A ");
				
				System.out.println("42 Query : "+queryString.toString());
				break;
				
			case 51: //Top 
//				System.out.println("51Query");
				queryString.append(" SELECT  ");
				queryString.append(" array_to_json(array_agg(row_to_json(result))) AS RESULT  ");
				queryString.append(" FROM ( ");
				queryString.append(" SELECT  ");
				queryString.append(" A.\"MMP_CD\" AS \"mmpCd\", A.\"MW_CD\" AS \"mwCd\", A.\"MMP_NM\" AS \"mmpNm\", ");
				queryString.append(" B.\"COL_DD_DT\" AS \"colDdDt\", ");
				queryString.append(" C.\"MSM_LT_CD\" AS \"msmLtCd\", ");
				queryString.append(" C.\"OVR_STRD_VAL\" AS \"ovrStrdVal\", ");
				//queryString.append(" CASE WHEN cast(B.\"COL_DD_DT\" as double precision) > cast(C.\"OVR_STRD_VAL\" as double precision) THEN 'FALSE' ");
				//queryString.append("      ELSE 'TRUE' ");
				//queryString.append(" END AS \"check\", ");
				queryString.append(" D.\"MSM_LT_NM\" AS \"msmLtNm\" ");
				
				queryString.append("  FROM ( ");
				queryString.append(" 	SELECT * FROM \"MMP_INFO\" WHERE \"PT_DIV_CD\"='002' ");
				queryString.append(" ) AS A ");
				queryString.append(" INNER JOIN ( ");
				queryString.append(" 	SELECT * FROM \"COL_DD_DT\" ");
				queryString.append(" ) AS B ");
				queryString.append(" ON A.\"MMP_CD\" = B.\"MMP_CD\" AND A.\"PT_DIV_CD\" = B.\"PT_DIV_CD\" ");
				queryString.append(" INNER JOIN ( ");
				queryString.append(" 	SELECT * FROM \"MW_TRG_STRD\" ");
				queryString.append(" ) AS C ");
				queryString.append(" ON A.\"MW_CD\" = C.\"MW_CD\" AND B.\"MSM_LT_CD\" = C.\"MSM_LT_CD\" ");
				
				queryString.append(" INNER JOIN ( ");
				queryString.append(" 	SELECT * FROM \"MSM_LT_INFO\" ");
				queryString.append(" ) AS D ");
				queryString.append(" ON C.\"MSM_LT_CD\" = D.\"MSM_LT_CD\" ");
				
				queryString.append(" ORDER BY A.\"MMP_CD\", C.\"MSM_LT_CD\" ");
				
				queryString.append(" ) AS result ");
				
				System.out.println("51 Query : "+queryString.toString());
				break;
				
			case 52:
//				System.out.println("52Query");
//				queryString.append(" SELECT  ");
//				queryString.append(" array_to_json(array_agg(row_to_json(result))) AS RESULT  ");
//				queryString.append(" FROM ( ");
//     
//				queryString.append(" SELECT ");
//				queryString.append(" 	X,  ");
//				queryString.append(" 	Y,  ");
//				queryString.append(" 	\"MMP_NM\" AS \"mmpNm\", ");
//				queryString.append(" 	\"AT_ORD\"  ");
//				queryString.append(" FROM ");
//				queryString.append(" ( ");
//				queryString.append(" 	SELECT   	 ");
//				queryString.append(" 		ST_X(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913))) AS X,  	 ");
//				queryString.append(" 		ST_Y(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913))) AS Y, ");
//				queryString.append(" 		\"MMP_NM\", ");
//				queryString.append(" 		\"AT_ORD\" ");
//				queryString.append(" 	FROM \"MMP_INFO\"    ");
//				queryString.append(" 	WHERE \"PT_DIV_CD\"='" + request.getParameter("spotValue") + "'  AND \"AT_ORD\" IS NOT NULL ");
//				queryString.append(" 	UNION ALL ");
//				queryString.append(" 	SELECT    ");
//				queryString.append(" 		ST_X(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913))) AS X,  	 ");
//				queryString.append(" 		ST_Y(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913))) AS Y, ");
//				queryString.append(" 		\"MMP_NM\", ");
//				queryString.append(" 		0 AS \"AT_ORD\" ");
//				queryString.append(" 	FROM \"MMP_INFO\"    ");
//				queryString.append(" 	WHERE \"MMP_NM\"='팔당댐' AND \"PT_DIV_CD\"='002' ");
//				queryString.append(" ) AS A ");
//				queryString.append(" ORDER BY \"AT_ORD\" ");
//				
//				queryString.append(" ) AS result ");
				
				queryString.append(" SELECT array_to_json(array_agg(row_to_json(result))) AS RESULT ");
				queryString.append(" FROM ");
				queryString.append("   (SELECT X, ");
				queryString.append("     Y, ");
				queryString.append("     \"MMP_NM\" AS \"mmpNm\", ");
				queryString.append("     \"AT_ORD\" ");
				queryString.append("   FROM ");
				queryString.append("     ( ");
				queryString.append("     SELECT ST_X(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913))) AS X, ");
				queryString.append("       ST_Y(ST_AsText(ST_Transform(geometry(\"GEOG\"),900913)))       AS Y, ");
				queryString.append("       \"MMP_NM\", ");
				queryString.append("       \"AT_ORD\" ");
				queryString.append("     FROM \"MMP_INFO\" ");
				queryString.append(" 	WHERE \"PT_DIV_CD\"='" + request.getParameter("spotValue") + "'  AND \"AT_ORD\" IS NOT NULL ");
				queryString.append("     ) AS A ");
				queryString.append("   ORDER BY \"AT_ORD\" ");
				queryString.append(" ) AS result ");
				
				System.out.println("52 Query : "+queryString.toString());
				break;
				
			case 53: // new Top
				
				spotGubun = request.getParameter("spotGubun");
				
				queryString.append(" SELECT  ");
				queryString.append(" array_to_json(array_agg(row_to_json(result))) AS RESULT  ");
				queryString.append(" FROM ( ");
				queryString.append(" SELECT * FROM ( ");
				queryString.append(" SELECT A.\"MMP_CD\" AS \"mmpCd\" ,       ");
				queryString.append(" 		A.\"MW_CD\" AS \"mwCd\"  ,      ");
				queryString.append(" 		A.\"MMP_NM\" AS \"mmpNm\" ,       ");
				queryString.append(" 		B.\"COL_DD_DT\" AS \"colDdDt\"  ,      ");
				queryString.append(" 		B.\"MSM_LT_CD\" AS \"msmLtCd\"  ,      ");
				queryString.append(" 		B.\"DATE\" AS \"daTe\"  ,      ");
				queryString.append(" 		C.\"MSM_LT_NM\" AS \"msmLtNm\"  ,      ");
				queryString.append(" ROW_NUMBER() OVER( PARTITION BY A.\"MMP_CD\" , B.\"MSM_LT_CD\" ORDER BY B.\"DATE\" DESC ) AS CNT   ");
				queryString.append(" FROM ( ");
				queryString.append(" SELECT * FROM \"MMP_INFO\" WHERE \"PT_DIV_CD\" = '"+spotGubun+"') AS A ");
				queryString.append(" INNER JOIN ( ");
				queryString.append(" SELECT * FROM \"COL_DD_DT_TEMP2\" ) AS B   ");
				queryString.append(" ON A.\"MMP_CD\" = B.\"MMP_CD\"  ");
				queryString.append(" INNER JOIN (  ");
				queryString.append(" SELECT * FROM \"MSM_LT_INFO\") AS C  ");
				queryString.append(" ON B.\"MSM_LT_CD\" = C.\"MSM_LT_CD\") AS W ");
				queryString.append(" WHERE CNT = 1 ");
				queryString.append(" ) AS result ");
				
				System.out.println("53 Query : "+queryString.toString());
				break;
				
			case 70: 
				System.out.println("7Query");
				String ww1 = request.getParameter("tt1");
				String ww2 = request.getParameter("tt2");
				String ww3 = request.getParameter("tt3");
				System.out.println(ww1);
				System.out.println(ww2);
				System.out.println(ww3);
				queryString.append(" INSERT INTO \"test\" (cd, nm, val) VALUES ('" + ww1 + "', '" + ww2 + "', '" + ww3 + "') ");
				
				System.out.println("70 Query :"+queryString.toString());
				break;
				
			case 71: // 년 데이터
				System.out.println("71uery");
				String w1 = request.getParameter("tt1");
				String w2 = request.getParameter("tt2");
				String w3 = request.getParameter("tt3");
				String w4 = request.getParameter("tt4");
				String w5 = request.getParameter("tt5");
				System.out.println(w1);
				System.out.println(w2);
				System.out.println(w3);
				System.out.println(w4);
				System.out.println(w5);
				queryString.append(" INSERT INTO \"COL_YR_DT_TEMP\" (\"MMP_CD\", \"MSM_LT_CD\", \"DATE\", \"PT_DIV_CD\", \"COL_YR_DT\") VALUES ( '" + w1 + "', '" + w2 + "', '" + w3 + "', '" + w4 + "' , '" + w5 + "' ) ");
				
				System.out.println("71 Query : "+queryString.toString());
				break;
				
			case 72: // 월 데이터
				System.out.println("72uery");
				w1 = request.getParameter("tt1");
				w2 = request.getParameter("tt2");
				w3 = request.getParameter("tt3");
				w4 = request.getParameter("tt4");
				w5 = request.getParameter("tt5");
				System.out.println(w1);
				System.out.println(w2);
				System.out.println(w3);
				System.out.println(w4);
				System.out.println(w5);
				queryString.append(" INSERT INTO \"COL_MM_DT_TEMP\" (\"MMP_CD\", \"MSM_LT_CD\", \"DATE\", \"PT_DIV_CD\", \"COL_MM_DT\") VALUES ( '" + w1 + "', '" + w2 + "', '" + w3 + "', '" + w4 + "' , '" + w5 + "' ) ");
				
				System.out.println("72 Query :"+queryString.toString());
				break;
				
			case 73: // 일 데이터
				System.out.println("73uery");
				w1 = request.getParameter("tt1");
				w2 = request.getParameter("tt2");
				w3 = request.getParameter("tt3");
				w4 = request.getParameter("tt4");
				w5 = request.getParameter("tt5");
				System.out.println(w1);
				System.out.println(w2);
				System.out.println(w3);
				System.out.println(w4);
				System.out.println(w5);
				queryString.append(" INSERT INTO \"COL_DD_DT_TEMP2\" (\"MMP_CD\", \"MSM_LT_CD\", \"DATE\", \"PT_DIV_CD\", \"COL_DD_DT\") VALUES ( '" + w1 + "', '" + w2 + "', '" + w3 + "', '" + w4 + "' , '" + w5 + "' ) ");
				
				System.out.println("73 Query :"+queryString.toString());
				break;
		}
		
		//System.out.println(queryString.toString());
		return queryString.toString();
	}
	
	private String getColDataName(String key){
		Hashtable<String, String> cols = new Hashtable();
		cols.put("1", "\"BOD(현재)\"");
		cols.put("2", "\"CHL-A(현재)\"");
		cols.put("3", "\"TP(현재)\"");
		cols.put("4", "\"수온(현재)\"");
		cols.put("5", "\"COD(현재)\"");
		cols.put("6", "\"PH(현재)\"");
		cols.put("7", "\"DO(현재)\"");
		cols.put("8", "\"TN(현재)\"");
		
		return cols.get(key);
	}
}
