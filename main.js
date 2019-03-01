
var { Text, ImageFill, storage, Color, Rectangle } = require("scenegraph");
const fs = require("uxp").storage.localFileSystem;

async function makeUnicorn(selection) {
    console.log("Time to make some unicorns!");

    const pluginFolder = await fs.getPluginFolder();
    // console.log("pluginFolder = " + pluginFolder);
    // console.log("fs = " + fs);

    // Did you find the plugin folder?
    if (pluginFolder != null) {
        console.log("I found the plugin folder.")
    } else {
        console.log("I have no idea and pluginFolder = " + pluginFolder);
    }

    // Find the /images directory within the plugin folder 
    // const folder = await fs.getFolder();
    const myImages = (await pluginFolder.getEntries()).find(entry => entry.name.includes('images'));
    // Did you find the images folder?
    if (myImages != null) {
        console.log("I found the images folder. " + myImages);
    } else {
        console.log("I have no idea and myImages = " + myImages);
    }

    const horseImages = (await myImages.getEntries()).find(entry => entry.name.includes('horses'));
    // Did you find the images folder?
    if (horseImages != null) {
        console.log("I found the horse images folder. " + horseImages);
    } else {
        console.log("I have no idea and horse images = " + horseImages);
    }

    const hornImages = (await myImages.getEntries()).find(entry => entry.name.includes('horns'));
    // Did you find the images folder?
    if (hornImages != null) {
        console.log("I found the horn images folder. " + hornImages);
    } else {
        console.log("I have no idea and horn images = " + hornImages);
    }

    const folderContents = await horseImages.getEntries();
    // folderContents.forEach(entry => console.log("Entry name = " + entry.name));
    const horseArray = [];
    folderContents.forEach(entry => horseArray.push(entry));
    // console.log("HorseArray = " + horseArray);
    console.log("HorseArray.length = " + horseArray.length);

    const hornfolderContents = await hornImages.getEntries();
    // folderContents.forEach(entry => console.log("Entry name = " + entry.name));
    const hornArray = [];
    hornfolderContents.forEach(entry => hornArray.push(entry));
    // console.log("HornArray = " + hornArray);
    console.log("HornArray.length = " + hornArray.length);

    let randomHorseNumber = (Math.floor(Math.random() * horseArray.length));
    console.log("Random horse number is = " + randomHorseNumber);
    let randomHorse = horseArray[randomHorseNumber];

    let randomHornNumber = (Math.floor(Math.random() * hornArray.length));
    console.log("Random horn number is = " + randomHornNumber);
    let randomHorn = hornArray[randomHornNumber];


    let ImageFill = require("scenegraph").ImageFill;
    let horseFill = new ImageFill(randomHorse);
    let hornFill = new ImageFill(randomHorn);


    const newHorse = new Rectangle();
    newHorse.width = 500;
    newHorse.height = 335;
    newHorse.fill = horseFill;
    newHorse.name = "🐴 no. " + randomHorseNumber;

    selection.insertionParent.addChild(newHorse);
    newHorse.moveInParentCoordinates(250, 250);

    const newHorn = new Rectangle();
    newHorn.width = 500;
    newHorn.height = 335;
    newHorn.fill = hornFill;
    newHorn.name = "📯 no. " + randomHornNumber;

    selection.insertionParent.addChild(newHorn);
    newHorn.moveInParentCoordinates(250, 250);

    sanityCheck();

    function sanityCheck() {
        let emoji = new Text();
        let sane = new Text();
        selection.insertionParent.addChild(emoji);
        selection.insertionParent.addChild(sane);
        emoji.text = "🦄";
        sane.text = "Sane.";
        emoji.fontSize = 100;
        sane.fontSize = 24;
        emoji.fill = new Color("#FFFFFF");
        sane.fill = new Color("#E55EF1");
        emoji.name = "🦄";
        sane.name = "sane!"
        emoji.moveInParentCoordinates(0, 100);
        sane.moveInParentCoordinates(0, 124);
    }
}


module.exports = {
    commands: {
        makeUnicorn: makeUnicorn,
    }
};
