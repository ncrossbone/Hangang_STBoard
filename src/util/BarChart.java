package util;

import java.awt.Font;
import java.util.Hashtable;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.labels.CategoryItemLabelGenerator;
import org.jfree.chart.labels.ItemLabelAnchor;
import org.jfree.chart.labels.ItemLabelPosition;
import org.jfree.chart.labels.StandardCategoryItemLabelGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.Plot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.TextAnchor;

public class BarChart implements IChart {

	@Override
	public void drawChart(Hashtable<String, String> dataSet) {
		// TODO Auto-generated method stub
		String filename = null;
	    try {
	    	CategoryPlot plot = new CategoryPlot();
	    	plot.setOrientation(PlotOrientation.HORIZONTAL);
	    	BarRenderer renderer = new BarRenderer();
	    	Font f = new Font("Gulim", Font.BOLD, 14);
	        CategoryItemLabelGenerator generator = new StandardCategoryItemLabelGenerator();
	        ItemLabelPosition p_center = new ItemLabelPosition(ItemLabelAnchor.CENTER, TextAnchor.CENTER);
	        
	        // 렌더링 세팅
	        // 그래프 1
	        renderer.setBaseItemLabelGenerator(generator);
	        renderer.setBaseItemLabelsVisible(true);
	        renderer.setBasePositiveItemLabelPosition(p_center);
	        renderer.setBaseItemLabelFont(f);
	        
	        DefaultCategoryDataset dataset = new DefaultCategoryDataset();  
	        //값 범례 카테고리
	        
	        for (String key : dataSet.keySet()) {
				
			}
	        
	    	JFreeChart chart = new JFreeChart("", new Font("gulim", Font.BOLD, 20), plot, false);
	    } catch (Exception e) {
	        System.out.println("Exception - " + e.toString());
	        e.printStackTrace(System.out);
	        filename = "public_error_500x300.png";
	    }
	}

}
