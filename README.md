# Character Creator App
A simple character creator application where users can create Dungeons & Dragons characters. You will be able to choose a name, species, class and ability scores with help of dice throws.

Created for the 1DV610 Software Quality course at Linneaus University.

## Features
Users can create a character by:
- Adding a name
- Choosing a species, or pick randomly by rolling a d8
- Choosing a class, or pick randomly by rolling a d12
- Add ability scores by rolling a d20 for each ability
- See a summary of the created character

## Installation
1. Clone the repository:
```bash
git clone https://github.com/ToveEk/1DV610-L3.git
```
2. Go to the project folder:
```bash
cd <the-name-of-your-folder>
```
3. Install dependencies and start the app:
```bash
npm install
npm start
```
4. Open the browser and go to:
```bash
http://localhost:3000
```

## Screenshots

### Name Selection
![Name Selection Page](/public/img/readme/name_selection.png)

### Species Selection
![Species Selection Page](/public/img/readme/species_selection.png)

### Class Selection
![Class Selection Page](/public/img/readme/class_selection.png)

## How to Use
1. Enter your character's name.
2. Choose a species, or roll a d8 to randomly select one.
3. Choose a class, or roll a d12 to randomly select one.
4. Roll a d20 for each ability to assign scores.
5. View the character summary.

## Limitations
- No visual confirmation for choosing name or selecting species or class. Results only appear in the terminal.
- Ability selection and character summary is not yet implemented.

## Future Improvements
- Fully implement ability selection.
- Add live feedback for name, species and class selection.
- Add live feedback for dice rolls and their results.
- Add more validation and automated tests.
- Improve styling and responsiveness.

## Language and Dependencies
- **Language:** JavaScript (ES Modules)
- **Node.js:** v18+ recommended
- **Dev dependencies:**
    - eslint
    - @lnu/eslint-config
    - prettier
    - nodemon
- **Dependencies:**
    - dice-module
    - dotenv
    - express
    - ejs
    - express-ejs-layouts
    - express-http-context

## Testing

Testing has been done manually, using the UI and observing results in the terminal.

To start the application run:
```bash
npm start
```

## Contributing
To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a pull request.

Please follow the code style and test your changes before commiting.

## License
MIT

## Versioning and Release
Current version: 1.0.0  
Initial release for 1DV610 Software Quality course.

## Author
Tove Ek