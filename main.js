
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
        console.log("I found the horse images folder. " + hornImages);
    } else {
        console.log("I have no idea and horse images = " + hornImages);
    }

    const folderContents = await horseImages.getEntries();
    // folderContents.forEach(entry => console.log("Entry name = " + entry.name));
    const horseArray = [];
    folderContents.forEach(entry => horseArray.push(entry));
    // console.log("HorseArray = " + horseArray);
    console.log("HorseArray.length = " + horseArray.length);

    let randomNumber = (Math.floor(Math.random() * horseArray.length));
    console.log("Random number is = " + randomNumber);
    let randomHorse = horseArray[randomNumber];


    let ImageFill = require("scenegraph").ImageFill;
    let horseFill = new ImageFill(randomHorse);


    const newElement = new Rectangle();
    newElement.width = 500;
    newElement.height = 335;
    newElement.fill = horseFill;
    newElement.name = "🐴 no. " + randomNumber;

    selection.insertionParent.addChild(newElement);
    newElement.moveInParentCoordinates(250, 250);


    sanityCheck();

    function sanityCheck() {
        let emoji = new Text();
        selection.insertionParent.addChild(emoji);
        emoji.text = "🦄 \r Sane";
        emoji.fontSize = 100;
        emoji.fill = new Color("#E55EF1");
        emoji.name = "🦄 Sanity check";
        emoji.moveInParentCoordinates(0, 100);

    }
}


module.exports = {
    commands: {
        makeUnicorn: makeUnicorn,
    }
};
