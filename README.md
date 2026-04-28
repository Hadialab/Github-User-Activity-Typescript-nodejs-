# GitHub User Activity CLI

A simple command-line tool built with Node.js and TypeScript that fetches and displays the recent activity of a GitHub user using the GitHub API.

## Features

* Fetch recent GitHub activity
* Display events in a readable format
* Handle errors (invalid username, API issues)
* Built as a CLI application

## Usage

Run the app using:

```bash
npx ts-node src/index.ts <username>
```

Example:

```bash
npx ts-node src/index.ts kamranahmedse
```

## Example Output

```
- Pushed 3 commits to kamranahmedse/developer-roadmap
- Opened issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap
```

## Project Structure

```
src/
  index.ts
package.json
tsconfig.json
```

## Tech Stack

* Node.js
* TypeScript
* GitHub REST API

## Learning Objectives

* Build a CLI tool
* Work with external APIs
* Use async/await and fetch
* Handle JSON data
* Format terminal output

## Notes

* This project uses the GitHub public API:
  https://api.github.com/users/<username>/events
* No external libraries were used for fetching data

## Future Improvements

* Add CLI command (e.g. `github-activity <username>`)
* Add filters (event type)
* Add colored output
* Add caching for performance

## Author

Hadi Al Abbassi
