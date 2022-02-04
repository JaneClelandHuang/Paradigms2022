let pilots = [
  {
    id: 10,
    name: "Poe Dameron",
	gender: "female",
    years: 23,
	hourlyRate: 45.50,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
	gender: "male",
    years: 30,
	hourlyRate: 61.00,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
	gender: "female",
    years: 28,
	hourlyRate: 39.50,
  },
  {
    id: 99,
    name: "Ello Asty",
	gender: "male",
    years: 54,
	hourlyRate: 46.00,
  }
];

// Return average pilots age
function getAveragePilotAge(){
	let total = 0;
	let count = 0;
	for (let i = 1; i < pilots.length; i++) {
		count++;
		total += pilots[i-1].years;
	}
	return total/count;
}

function hasPilotNamed(name){
	return hasPilot = pilots.filter(x=>x.name.includes(name)).length>=2;
}

// Everyone earning greater or equal to $45 per hour gets a bonus of $1000, 
// all others get $800
function computeBonusTotal(){
	for (key in pilots){
		total += key.id>45 ? 1000 : 800
	}
	return total;
}

total = getAveragePilotAge();	
console.log(total);
console.log(hasPilotNamed("Lintra"));
console.log(computeBonusTotal());