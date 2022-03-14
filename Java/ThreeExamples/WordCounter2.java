import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.BufferedReader;
import java.util.TreeMap;
import java.util.function.Function;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class WordCounter2 {
	public static void main(String[] args) {	
		File inFile = null;
		if (0 < args.length) {
			inFile = new File(args[0]);
		} else {
			System.out.println("No filename provided");
			System.exit(1);
		}
	    Pattern nonWord = Pattern.compile("[^a-z']+");
		FileReader fr;
		try {
			fr = new FileReader(inFile);
			new BufferedReader(fr)
				.lines()
				.flatMap(line->nonWord.splitAsStream(line.toLowerCase()))
				.filter(word->!word.isEmpty())
				.collect(Collectors.groupingBy(Function.identity(),
					TreeMap::new, Collectors.counting()))
				.forEach((word, count)->
					System.out.println(word + " "+ count));
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} 
	}
}


