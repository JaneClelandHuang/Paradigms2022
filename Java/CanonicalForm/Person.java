public class Person {
	private String name;
	private String phone;
	public Person(String name, String phone){
		this.name = name;
		this.phone = phone;
	}
	
	public boolean equals(Object other) {
		if (other == this) return true;
		if (other == null) return false;
		if (getClass() != other.getClass()) return false;
		Person person = (Person)other;
		return (
			this.name.equals(person.name) &&
			this.phone.equals(person.phone) &&
			this.name != null &&
			this.phone != null
		);
	}

	public static void main(String[] args){
		Person p1 = new Person("Fred","111-111-1111");
		Person p2 = new Person("Fred","111-111-1112");
		System.out.println(p1.equals(p2));
		
	}
}

