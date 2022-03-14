import java.time.LocalDate;
public class EqualsDemo{
	public static void main(String[] args) {
		LocalDate d1 = LocalDate.of(2020,3,15);
		LocalDate d2 = LocalDate.of(2020,3,15);
		assert !(d1 == d2) && d1.equals(d2);
		
		// Extra output!
		if (! (d1 == d2))
			System.out.println("d1 and d2 are not the same reference");
		if (d1.equals(d2))
			System.out.println("d1 and d2 do reference the same values");
	}
}