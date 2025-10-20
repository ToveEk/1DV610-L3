# Reflektion över Clean Code

## Kapitel 2: Meaningful Names
Efter workshop 2 har jag börjat tänka mer på att namn som kanske känns självklara för mig inte nödvändigtvis är det för andra. Någon utan kunskap om Dungeons & Dragons och spelets regler ska också kunna förstå koden. Jag har försökt ha det i åtanke när jag namnger, men det är tyvärr lätt att glömma bort.

## Kapitel 3: Functions
Jag har fortsatt att sträva efter små, fokuserade metoder. När jag märkt att en metod blivit för stor har jag försökt bryta upp den. Samtidigt har tidspress påverkat mitt arbete, och jag vet att jag bryter mot DRY-principen på vissa ställen i min `characterController`. Med mer tid hade jag troligen kunnat strukturera om dem för att undvika den upprepningen.

## Kapitel 4: Comments
Martin ogillar det han kallar *noise comments*. Jag förstår poängen, men kan ändå uppskatta dem för strukturens skull, vilket kanske är för att jag fortfarande är nybörjare. Exempelvis när jag startar upp en server tycker jag att det är hjälpsamt med kommentarer som tydligt visar vad som sker var. I övrigt har jag försökt hålla mina kommentarer så meningsfulla som möjligt. Jag använder JSDoc eftersom jag upplever att det både ger bra förklaringar och skapar en tydligare struktur i koden.

## Kapitel 5: Formatting
Jag håller helt med om att formatering är avgörande för kodens läsbarhet. Jag använder linting-verktyg, men glömmer ibland bort att även den vertikala radlängden spelar roll. Jag trycker ofta in `Alt+Z` när jag gör fönstret mindre för att slippa horisontell scroll, men inser att det inte är ett riktigt alternativ till att faktiskt formatera rätt. I övrigt försöker jag tänka mycket på att skapa luft i koden (med mellanrum där det passar) för att öka läsbarheten.

## Kapitel 6: Objects and Data Structures
Jag har gjort en mapp för data med olika datastrukturer för bland annat arter och klasser. Dessa innehåller bara statisk information och ingen logik. Jag tycker att det här kapitlet lyfter en viktig balans mellan struktur och flexibilitet – något jag försöker bli mer medveten om i min egen kod.

## Kapitel 7: Error Handling
Jag försöker förbättra min felhantering genom att använda *exceptions/errors* i större utsträckning. Jag använder `try-catch` i publika metoder kopplade till routes och undviker att returnera felvärden direkt. Det är något jag fortfarande övar på, men jag märker redan att det gör koden tydligare.

## Kapitel 8: Boundaries
Vi har använt tredjepartspaket i nästan alla uppgifter, men i den här var det särskilt intressant att arbeta med vår egen modul. Det var dock svårare än jag trodde. Jag fick till slut kopiera över filer till min `modules`-mapp för att få det att fungera, vilket inte är optimalt. Det hade nog varit enklare om jag hade gjort min dice-modul till ett NPM-paket, men jag valde att avstå från det under laboration 2.

## Kapitel 9: Unit Tests
Jag har tyvärr ännu inte skrivit automatiska tester till vare sig denna applikation eller modulen. Jag ser dock tydligt fördelarna och vill bli bättre på det framöver för att kunna dra nytta av testernas effektivitet. Samtidigt tycker jag att Martins resonemang om enhetstesters struktur och tydlighet även kan tillämpas på manuella tester. Med tydliga testtabeller och rapporter blir även manuell testning mer effektiv, medan brist på dokumentation gör utvecklingen svårare.

## Kapitel 10: Classes
Under denna laboration har jag funderat mer över hur jag utformar mina klasser. Jag har tänkt mer på inkapsling och att vissa metoder bör vara privata om de inte används utanför klassen.  
`characterController` är nästan vad Martin skulle kalla en "god class". Den hanterar det mesta av funktionaliteten, men vissa metoder hade kanske passat bättre i egna klasser. Jag är dock osäker på exakt hur, eftersom alla metoder hänger ihop med karaktärsbyggandets olika steg. Kanske hade metoderna som hanterar `characterSpecies` och `characterClass` kunnat delas upp i egna klasser, vilket i så fall hade ökat sammanhållningen i klasserna (*cohesion*).

## Kapitel 11: Systems
I min `diceController` finns ett beroende till `dice`-modulen. Jag använder dock inte dependency injection här, eftersom instansen av `Dice` skapas direkt i konstruktorn istället för att skjutas in utifrån.  

Jag upplever dependency injection som lite svårt att greppa i just det här sammanhanget. Efter att ha diskuterat det med AI förstår jag bättre att en router kan fungera som en slags “fabrik” (factory pattern) där beroenden kan injiceras när controllern skapas. Det känns dock fortfarande något abstrakt och komplicerat att implementera i mitt huvud.  
