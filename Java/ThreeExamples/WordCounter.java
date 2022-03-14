import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class WordCounter {
	public static void main(String[] args) {
		File inFile = null;
		if (0 < args.length) {
			inFile = new File(args[0]);
		} else {
			System.out.println("No filename provided");
			System.exit(1);
		}
		SortedMap<String, Integer> counts = new TreeMap<>();
		Pattern wordPattern = Pattern.compile("[a-z']+");
		//Scanner scanner = new Scanner(System.in);
		Scanner scanner;
		try{
			scanner = new Scanner(inFile);
			while (scanner.hasNext()) {
				String line = scanner.nextLine().toLowerCase();
				Matcher matcher = wordPattern.matcher(line);
				while (matcher.find()) {
					String word = matcher.group();
					counts.put(word,counts.getOrDefault(word,0)+1);
				}
			}
			for (SortedMap.Entry<String,Integer> e: counts.entrySet()) {
				System.out.printf("%s %d\n", e.getKey(), e.getValue());
			}
		} catch (FileNotFoundException e1) {
			System.out.printf("Unable to open file" + inFile);
	    }
	}
}