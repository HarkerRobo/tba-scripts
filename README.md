# tba-scripts
Scripts for pulling data from TBA

## Setup
First, clone this repository and run `npm i` to install the dependencies. Then, copy the `exampleconfig.json` file and add your `apiKey`. You can generate a Read API Key at [thebluealliance.com/account](https://www.thebluealliance.com/account).

## Matches (Scouting App)
Add the `eventKey` in your `config.json` file. You can obtain the event key from the TBA link, which looks like [thebluealliance.com/event/EVENT_KEY_FOUND_HERE](https://www.thebluealliance.com/event/EVENT_KEY_FOUND_HERE). Then, run `npm run matches` to generate the matches string that can then be used in the scouting app.