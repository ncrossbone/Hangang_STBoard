/**
 * 
 */
package Data;

import java.awt.Container;
import java.awt.Graphics;
import java.awt.Insets;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.net.URL;

import javax.swing.JEditorPane;
import javax.swing.SwingUtilities;
import javax.swing.text.Document;
import javax.swing.text.html.HTMLDocument;
import javax.swing.text.html.HTMLEditorKit;

/**
 * @FileName  : test.java
 * @Project     : Suhyup_New
 * @Date         : 2011. 9. 2. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 :
 */
public class test{
	
	 static class Kit extends HTMLEditorKit {
		 public Document createDefaultDocument() {
			 HTMLDocument doc = (HTMLDocument) super.createDefaultDocument();
			 doc.setTokenThreshold(Integer.MAX_VALUE);
			 doc.setAsynchronousLoadPriority(-1);
			   
			 return doc;
		 }
	 }
	
	 public static BufferedImage create(String src, int width, int height) {
		  
		 BufferedImage image = null;
		 JEditorPane pane = new JEditorPane();
		 Kit kit = new Kit();
		 pane.setEditorKit(kit);
		 pane.setEditable(false);
		 pane.setMargin(new Insets(0,20,0,20));
		 pane.setContentType("text/html; charset=UTF-8");
		 //pane.setFont(new Font("serif",Font.BOLD,20));
		  
		 try {
			System.out.println("-------------"+pane.getFont().getFamily());
			System.out.println("-------------"+pane.getFont().getFontName());
			   
			pane.setPage(new URL(src));
			System.out.println("-----------------------");
			System.out.println(pane.getText());
			System.out.println("-----------------------");
			
			
			image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
			Graphics g = image.createGraphics();
			Container c = new Container();
			SwingUtilities.paintComponent(g, pane, c, 0, 0, width, height);
			g.dispose();
		} catch (Exception e) {
			System.out.println(e);
		}
	  
	  return image;
	 }
	 
	 public void getImage() throws FileNotFoundException{
		 BufferedImage ire;
		 String url="http://localhost:8088/Suhyup_New/state/state2.jsp";
		 String path="c:\\tmp.jpg";
		 ire = test.create(url, 800, 800);
		 
		 try{
			 javax.imageio.ImageIO.write(ire, "PNG", new File(path));
			 System.out.println("complete");
		 }catch(Exception e){
			 throw new FileNotFoundException();
		 }
	 }
}
