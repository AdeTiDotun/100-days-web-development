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

//for...in statement; basically works or ilterates over objects.

const objectUser = {
    name: "Daniel",
    job: "Developer",
    status: "Growth_mood"
}

for (const realObjects in objectUser) {
    console.log(realObjects);
    console.log(objectUser[realObjects]);
}