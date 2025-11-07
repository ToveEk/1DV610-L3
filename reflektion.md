# Reflektion över Clean Code

## Kapitel 2: Meaningful Names
Efter workshop 2 har jag börjat tänka mer på att namn som kanske känns självklara för mig inte nödvändigtvis är det för andra. Någon utan kunskap om Dungeons & Dragons och spelets regler ska också kunna förstå koden. Jag har försökt ha det i åtanke när jag namnger, men det är tyvärr lätt att glömma bort. Något som ställde till med lite problem och som kan uppfattas som otydligt för någon utan erfarenhet av D&D kan vara det här med class och classes. Det är ju något vedertaget inom programmering som innebär något helt annat än vad det gör i D&D. Så där kan namngivningen möjligtvis uppfattas som förvirrande, även om jag gjorde mitt bästa med att försöka namnge på ett tydligt sätt.

**Exempel:**
```javascript
export class Character {
  /**
   * Creates a new Character instance.
   *
   * @param {string} name - The name of the character.
   * @param {string} species - The species of the character.
   * @param {string} className - The class of the character.
   * @param {object} abilityScores - The ability scores of the character.
   */
  constructor (name, species, className, abilityScores) {
    this.name = name
    this.species = species
    this.className = className
    this.abilityScores = abilityScores
  }
}
```

## Kapitel 3: Functions
Jag har fortsatt att sträva efter små, fokuserade metoder. När jag märkt att en metod blivit för stor har jag försökt bryta upp den. Samtidigt har tidspress påverkat mitt arbete, och jag vet att jag bryter mot DRY-principen på vissa ställen i min `characterController`. Med mer tid hade jag troligen kunnat strukturera om dem för att undvika den upprepningen. Exempel på metoder som är väldigt lika varandra är `#addRandomCharacterSpecies` och `#addRandomCharacterClass`. Jag hade kunnat skapa en mer generell metod för att hantera randomiserandet av klass och species för att bryta upp metoderna och följa DRY.

**Exempel:**
```javascript
  #addRandomCharacterSpecies (rollResult, req, res) {
    const speciesList = this.speciesData.getSpeciesList()
    const speciesRandomRollValues = speciesList.map(species => species.randomRollValue)

    if (!speciesRandomRollValues.includes(rollResult)) {
      throw new Error('Roll result doesn\'t match any species random roll value.')
    } else {
      const selectedSpecies = speciesList.find(species => species.randomRollValue === rollResult)
      this.character.species = selectedSpecies.name
    }

    console.log('Selected species: ', this.character.species)
    console.log('Current character: ', this.character)

    this.renderCharacterClassPage(req, res)
  }
```

```javascript
  #addRandomCharacterClass (rollResult, req, res) {
    const classList = this.classData.getClassList()
    const classRandomRollValues = classList.map(className => className.randomRollValue)

    if (!classRandomRollValues.includes(rollResult)) {
      throw new Error('Roll result doesn\'t match any class random roll value.')
    } else {
      const selectedClass = classList.find(className => className.randomRollValue === rollResult)
      this.character.className = selectedClass.name
    }

    console.log('Selected class: ', this.character.className)
    console.log('Current character: ', this.character)

    this.renderCharacterAbilitiesPage(req, res)
  }
```

## Kapitel 4: Comments
Martin ogillar det han kallar *noise comments*. Jag förstår poängen, men kan ändå uppskatta dem för strukturens skull, vilket kanske är för att jag fortfarande är nybörjare. Exempelvis när jag startar upp en server tycker jag att det är hjälpsamt med kommentarer som tydligt visar vad som sker var. I övrigt har jag försökt hålla mina kommentarer så meningsfulla som möjligt. Jag använder JSDoc eftersom jag upplever att det både ger bra förklaringar och skapar en tydligare struktur i koden. Jag har även använt mig av TODO-kommentarer, vilket Martin tycker är okej så länge man kommer ihåg att uppdatera och ta bort dem när man har infört just den funktionaliteten. 

*Uppdatering från Tove 2.0*: Efter att ha kollat igenom projektet efter en paus från det uppskattar jag inte längre alla kommentarer. Jag står fast vid att jag uppskattar JSDoc på så vis att de ger struktur och blir som "rubriker" i filerna. Men i många fall ger dem inte någon givande information som inte säger sig självt i koden. Ett exempel är nedan, där JSDoc blir intetsägande i och med att namnet på metoden redan förmedlar vad den gör. Att dokumentera parametrarna, som är de samma i nästan alla metoder i en controller upplever jag som tjatigt nu. 

**Exempel:**
```javascript
  /**
   * Handles adding the character's abilities.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterAbilities (req, res) {
    try {
      // TODO: implement ability functionality
    } catch (error) {
      throw new Error('Error adding character abilities: ' + error.message)
    }
  }
```

## Kapitel 5: Formatting
Jag håller helt med om att formatering är avgörande för kodens läsbarhet. Jag använder linting-verktyg, men glömmer ibland bort att även den vertikala radlängden spelar roll. Jag trycker ofta in `Alt+Z` när jag gör fönstret mindre för att slippa horisontell scroll, men inser att det inte är ett riktigt alternativ till att faktiskt formatera rätt. I övrigt tänker jag mycket på den vertikala densiteten och att skapa luft i koden för att öka läsbarheten. Ett exempel på en metod där jag är särskilt nöjd med formateringen är `#handleRandomSelection`. Där finns tydliga radbrytningar, inte för långa rader, inkapsling och en tydlig kommentar.

**Exempel:**
```javascript
#handleRandomSelection (req, res) {
    const diceNotation = req.body.diceNotation

    this.diceController.rollDice(diceNotation)

    const rollResult = this.diceController.rollResult

    if (diceNotation === 'd8') {
      this.#addRandomCharacterSpecies(rollResult, req, res)
    } else if (diceNotation === 'd12') {
      this.#addRandomCharacterClass(rollResult, req, res)
    } else if (diceNotation === 'd20') {
      // TODO: handle ability selection
    } else {
      throw new Error('Invalid dice notation for random selection.')
    }
  }
```

## Kapitel 6: Objects and Data Structures
Jag har gjort en mapp för data med olika datastrukturer för bland annat arter och klasser. Dessa innehåller bara statisk information och ingen logik. Jag tycker att det här kapitlet lyfter en viktig balans mellan struktur och flexibilitet, något jag försöker bli mer medveten om i min egen kod.

*Uppdatering från Tove 2.0*: Jag har nu även gjort en datastruktur över abilities. Detta eftersom projektet är litet och abilities kommer hanteras på liknande sätt som species och classes. Jag hade även kunnat göra en Ability-klass som hanterar mer logik, men för ett projekt på denna nivå kändes det lite för stort. Genom att strukturera om abilities från ett ability-objekt i models till en datastruktur där varje ability är sitt egna objekt undviker jag *painted types*.

**Exempel:**
```javascript
  constructor () {
    this.strength = {
      name: 'Strength',
      shortName: 'STR',
      description: 'Measures bodily power, athletic training, and the extent to which you can exert raw physical force.',
      score: 0
    }

    this.dexterity = {
      name: 'Dexterity',
      shortName: 'DEX',
      description: 'Measures agility, reflexes, and balance.',
      score: 0
    }

    this.constitution = {
      name: 'Constitution',
      shortName: 'CON',
      description: 'Measures health, stamina, and vital force.',
      score: 0
    }

    this.intelligence = {
      name: 'Intelligence',
      shortName: 'INT',
      description: 'Measures mental acuity, accuracy of recall, and the ability to reason.',
      score: 0
    }

    this.wisdom = {
      name: 'Wisdom',
      shortName: 'WIS',
      description: 'Measures perception and insight.',
      score: 0
    }

    this.charisma = {
      name: 'Charisma',
      shortName: 'CHA',
      description: 'Measures force of personality, persuasiveness, and leadership.',
      score: 0
    }
  }
```

## Kapitel 7: Error Handling
Jag försöker förbättra min felhantering genom att använda *exceptions/errors* i större utsträckning. Jag använder `try-catch` i publika metoder kopplade till routes, samt i användningen av Dice-modulen, och undviker att returnera felvärden direkt. Det är något jag fortfarande övar på, men jag märker redan att det gör koden tydligare.

**Exempel:**
```javascript
  rollDice (diceNotation) {
    try {
      const resultMessage = this.dice.startRolling(diceNotation)

      this.rollResult = this.dice.roll

      return { message: resultMessage, value: this.rollResult }
    } catch (error) {
      throw new Error('Error rolling dice: ' + error.message)
    }
  }
```

## Kapitel 8: Boundaries
Vi har använt tredjepartspaket i nästan alla uppgifter, men i den här var det särskilt intressant att arbeta med vår egen modul. Det var dock svårare än jag trodde. Jag fick till slut kopiera över filer till min `modules`-mapp för att få det att fungera, vilket inte är optimalt. Det hade nog varit enklare om jag hade gjort min dice-modul till ett NPM-paket, men jag valde att avstå från det under laboration 2.

**Exempel:**
```javascript
/**
 * DiceController handles dice rolling requests.
 *
 * @module controllers/diceController
 * @author Tove Ek
 * @version 1.0.0
 */

import { Dice } from '../modules/dice-module/src/dice.js'
```

## Kapitel 9: Unit Tests
Jag har tyvärr ännu inte skrivit automatiska tester till vare sig denna applikation eller modulen. Jag ser dock tydligt fördelarna och vill bli bättre på det framöver för att kunna dra nytta av testernas effektivitet. Samtidigt tycker jag att Martins resonemang om enhetstesters struktur och tydlighet även kan tillämpas på manuella tester. Med tydliga testtabeller och rapporter blir även manuell testning mer effektiv, medan brist på dokumentation gör utvecklingen svårare. På grund av tidsbrist, och att projektet kanske växte sig lite för stort, har jag inte skrivit någon testrapport för denna uppgift. Testning har dock skett manuellt genom UI och att följa resultatloggar i terminalen.

**Exempel:**

![Specific Character Test](/public/img/reflektion/specific_character_test.png)
![Random Character Test](/public/img/reflektion/random_character_test.png)

## Kapitel 10: Classes
Under denna laboration har jag funderat mer över hur jag utformar mina klasser. Jag har tänkt mer på inkapsling och att vissa metoder bör vara privata om de inte används utanför klassen. 

`characterController` är nästan vad Martin skulle kalla en "god class". Den hanterar det mesta av funktionaliteten, men vissa metoder hade kanske passat bättre i egna klasser. Jag är dock osäker på exakt hur, eftersom alla metoder hänger ihop med karaktärsbyggandets olika steg. Kanske hade metoderna som hanterar `characterSpecies` och `characterClass` kunnat delas upp i egna klasser, vilket i så fall hade ökat sammanhållningen i klasserna (*cohesion*). `homeController` och `diceController` följer däremot *SRP* då de bara har ett ansvar. Den förstnämnda hanterar rendering av Home Page och den andra hanterar tärningslogiken från Dice-modulen.

**Exempel:**
```javascript
/**
 * The HomeController class.
 */
export class HomeController {
  /**
   * Renders the home page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderHomePage (req, res) {
    res.render('home/home')
  }
}
```

## Kapitel 11: Systems
I min `diceController` finns ett beroende till `dice`-modulen. Jag använder dock inte dependency injection här, eftersom instansen av `Dice` skapas direkt i konstruktorn istället för att skjutas in utifrån.  

Jag upplever dependency injection som lite svårt att greppa i just det här sammanhanget. Efter att ha diskuterat det med AI förstår jag bättre att en router kan fungera som en slags “fabrik” (factory pattern) där beroenden kan injiceras när controllern skapas. Det känns dock fortfarande något abstrakt och komplicerat att implementera i mitt huvud.

**Exempel:**
```javascript
  constructor () {
    this.dice = new Dice()
    this.rollResult = 0
  }
```
