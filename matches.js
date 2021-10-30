const config = require("./config.json");
const fetch = require("node-fetch");

(async () => {
	let matches = await (await fetch(`https://www.thebluealliance.com/api/v3/event/${config.eventKey}/matches`, {
		headers: {
			"X-TBA-Auth-Key": config.apiKey
		}
	})).json();
	let sorted_teams = [];
	for(let i = 0; i < matches.length; i++) {
		sorted_teams[matches[i].match_number - 1] = [...matches[i].alliances.red.team_keys.map(team_key => team_key.replaceAll("frc", "")), ...matches[i].alliances.blue.team_keys.map(team_key => team_key.replaceAll("frc", ""))].join(" ");
	}
	console.log(sorted_teams.join(" "));
})();
