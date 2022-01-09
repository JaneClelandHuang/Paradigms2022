// Read input file
// Still working on this.  I'll complete it today (1/29/2020)
//


const readline = require('readline'); 
const reader = readline.createInterface(process.stdin, null); 

const jiraData = []; 

function record (issueKey,issueType,assignee,priority,issueStatus,created,desc,points) {
	this.issueKey = issueKey;
	this.issueType = issueType;
	this.assignee = assignee;
	this.priority = priority;
	this.issueStatus = issueStatus;
	this.created = created;
	this.desc = desc;
	this.points = points;
}

const reducer =(accumulator, currentValue) => 
	accumulator+=parseInt(currentValue, 10);


// This gets called after the data is read in
function executeQueries(){
	let query = "drone fails situational awareness object detection collision waypoints terrain flying zone";
	const queryterms = new Set(query.split(" "));
	search(queryterms);
	
	// Query 1: How many story points have been completed so far?
	console.log(jiraData.filter(record => record.issueStatus==="COMPLETE").map(record=>record.points).reduce(reducer,0));
	
	// Query 2: Count the number of requirements that include the word "drone" irregardless of case (Drone, drone).
	console.log(jiraData.filter(record=>search(record,"drone")>0).length);
	
	// Query 3: Who is assigned to the oldest issue?
	
}

function buildDashBoard(){
	// Coming soon!
}


// Simple search function
function search(queryterms) {

	for (let j = 0; j < jiraData.length; j++) {
		let words = jiraData[j].desc.split(" ");
		for(let i = 0; i < words.length; i++){
			if(queryterms.has(words[i])){
				let key = jiraData[0];
				if (matchScore.has(key)){
					let thisValue = matchScore.get(key)+1;
					matchScore.set(key,thisValue);
				} else {
					matchScore.set(key,1);
				}
			}
		}
	}
	return matchScore;
}


// Reads in a file from the command line "node hwk3.js < droneresponse.csv"
reader.on('line', line => { 
	// pushes data into objects and adds them to an array
	// see homework assignment for the meaning of each field
	let records = line.split(",");
	jiraData.push(new record(records[0],records[1],records[2],records[3],records[4],records[5],records[6],records[7]));
}).on('close', () => { 	
	// upon completion of the import, run executeQueries() function.
	executeQueries();
	buildDashBoard();
}); 





