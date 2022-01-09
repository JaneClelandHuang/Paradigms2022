// How many pilots have more than 15 years of experience.

let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
	gender: "female",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
	gender: "male",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
	gender: "female",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
	gender: "male",
    years: 22,
  }
];

// Here is the declarative statement
// We use the .filter operation.
// I could have applied and AND condition and had just one filter, but I decided to split it 
// into two
console.log(pilots.filter( pilot => pilot.years>15).filter(pilot => pilot.gender==="male"));