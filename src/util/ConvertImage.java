package util;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.util.Date;

import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.PNGTranscoder;

import Data.query.Common;

public class ConvertImage {

	public String getImageStreamAndUrl(HttpURLConnection con) {
		cleanOldImage();
		String fileName = "";
		FileOutputStream fileOutputStream = null;

		try {

			byte[] data = new byte[1024];
			InputStream inputStream = con.getInputStream();
			String path = getPath();

			Date date = new Date();
			String time = ((Long) date.getTime()).toString()
					+ ((Integer) ((int) (Math.random() * 100000))).toString();
			fileName = time + ".png";

			fileOutputStream = new FileOutputStream(path + "/" + time + ".png");

			while (inputStream.read(data, 0, data.length) > 0) {
				fileOutputStream.write(data, 0, data.length);
			}

			fileOutputStream.flush();
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				fileOutputStream.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return fileName;
	}

	public String svgExportImage(String filName, String pointName,
			String statusImagePath) {
		
		StringBuilder svgString = new StringBuilder();

		// 박순형 14.07.25 사이즈 수정

		svgString
				.append(" <svg width=\"212\"  height=\"170\" viewBox=\"0 0 212 170\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> ");
		svgString.append("  <g> ");
		svgString.append("   <title>Layer 1</title> ");
		svgString
				.append("   <image x=\"-0.79049\" y=\"0.52113\" width=\"215\" height=\"170\" id=\"svg_1\" xlink:href=\""
						+ new Common().getWebsiteUrl()
						+ "/hangang/resources/img/info_bg_2.png\"/> ");

		if (!"".equals(statusImagePath)) {
			svgString
					.append("   <image xlink:href=\""
							+ new Common().getWebsiteUrl()
							+ "/hangang/resources/img/status/"
							+ statusImagePath
							+ "\" id=\"svg_3\" height=\"32\" width=\"30\" y=\"4\" x=\"174\"/> ");
		}

		svgString
				.append("   <text font-weight=\"bold\" xml:space=\"preserve\" text-anchor=\"middle\" font-family=\"gulim\" font-size=\"15\" id=\"svg_4\" y=\"27\" x=\"82\" stroke-width=\"0\" stroke=\"#000000\" fill=\"#ffffff\">"
						+ pointName + "</text> ");
		svgString
				.append("   <image xlink:href=\""
						+ filName
						+ "\" id=\"svg_5\" height=\"100\" width=\"170\" y=\"42\" x=\"23\"/> ");
		svgString.append("  </g> ");
		svgString.append(" </svg> ");

		String fileName = "";

		String svgTag = svgString.toString();
		PNGTranscoder t = new PNGTranscoder();
		TranscoderInput input = null;
		try {
			input = new TranscoderInput(new ByteArrayInputStream(
					svgTag.getBytes("UTF-8")));
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		OutputStream ostream = null;
		try {
			String path = getPath();

			Date date = new Date();
			String time = ((Long) date.getTime()).toString()
					+ ((Integer) ((int) (Math.random() * 100000))).toString();
			fileName = time + ".png";
			
			ostream = new FileOutputStream(path + "/" + time + ".png");
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		TranscoderOutput output = new TranscoderOutput(ostream);

		try {
			t.transcode(input, output);
		} catch (TranscoderException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			ostream.flush();
			ostream.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fileName;
	}

	private String getPath() {
		String path = ConvertImage.class.getResource("").getPath();
		String replaceString = path.replace("%20", " ");
		File file = new File(replaceString);
		file = file.getParentFile().getParentFile().getParentFile();
		File[] files = file.listFiles();
		String name = "";
		for (int a = 0; a < files.length; a++) {
			name = files[a].getName();
			if (name.equals("resources")) {
				file = files[a];
				a = files.length + 1;
				files = null;
				files = file.listFiles();

				for (int b = 0; b < files.length; b++) {
					name = files[b].getName();
					if (name.equals("download")) {
						file = files[b];
						break;
					}
				}
			}
		}

		path = file.getPath();

		return path;
	}

	private void cleanOldImage() {
		String path = getPath();
		File file = new File(path);
		File[] files = file.listFiles();
		Date date = new Date();
		long nowTime = date.getTime();

		for (int a = 0; a < files.length; a++) {
			long lastModifiedTime = files[a].lastModified();

			if (nowTime - lastModifiedTime > 300000) {
				files[a].delete();
			}
		}
	}

}