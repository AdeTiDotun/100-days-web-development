// for statement; repeats until a specified condition evalutes to false.
// helpful whenever a random number is needed to be generated.

for (i = 0; i <= 10; i++) {
    console.log (i);
}

// for...of statement; creates a loop, ilterating over ilterable objects like array, map, set, arguments etc.

const myObjects = ["Dan", "Developer", "Hustle", "Grind"];

for (const storeArray of myObjects) {
    console.log (storeArray);
}

