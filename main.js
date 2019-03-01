
var { Text, ImageFill, storage, Color, Rectangle } = require("scenegraph");
const fs = require("uxp").storage.localFileSystem;

// User picks an image file
// const storage = require("uxp").storage;
// const fs = storage.localFileSystem;
// let imageFile = await fs.getFileForOpening({ types: storage.fileTypes.images });
// let imageFile = ({ types: Image});

//Get the plugin storage folder

// const fs = storage.localFileSystem;

// Loop over the contents of that folder 
// until you find the file you want

// const folder = await fs.getFolder();
// const myNovel = (await fs.getEntries()).find(entry => entry.name.includes('novel'));

// const folder = await fs.getFolder();
// const myImages = (await fs.getEntries()).find(entry => entry.name.includes('images'));

// const entries = await aFolder.getEntries();
// const allFiles = entries.filter(entry => entry.isFile);

// make a const of that file for use in imageFill

// Create ImageFill for this image
// const ImageFill = require("scenegraph").ImageFill;
// let fill = new ImageFill(imageFile);
// let fill = new ImageFill(imageFile);

// Set fill of first selected item
// selection.items[0].fill = fill;



async function makeUnicorn(selection) {
    console.log("Time to make some unicorns!");

    const pluginFolder = await fs.getPluginFolder();
    console.log("pluginFolder = " + pluginFolder);
    console.log("fs = " + fs);
    // console.log("");
    // const fs = storage.localFileSystem;

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

    const folderContents = await myImages.getEntries();
    folderContents.forEach(entry => console.log("Entry name = " + entry.name));
    const horseArray = [];
    folderContents.forEach(entry => horseArray.push(entry));
    console.log("HorseArray = " + horseArray);

    const randomHorse = horseArray[Math.floor(Math.random() * horseArray.length)];

    // const UnicornImage = (await myImages.getEntries()).find(entry => entry.name.includes('unicorn.jpg'));


    // Did you find the unicorn image?
    // if (UnicornImage != null) {
    //     console.log("I found the unicorn file.")
    // } else {
    //     console.log("I have no idea and UnicornImage = " + UnicornImage);
    // }

    const ImageFill = require("scenegraph").ImageFill;
    let unicornFill = new ImageFill(randomHorse);

    sanityCheck();

    function sanityCheck() {
        let emoji = new Text();
        emoji.text = "🦄 \r Sane";
        emoji.fontSize = 100;
        emoji.fill = new Color("#E55EF1");
        emoji.name = "🦄 Sanity check";

        selection.insertionParent.addChild(emoji);
        emoji.moveInParentCoordinates(0, 100);
        const newElement = new Rectangle();
        newElement.width = 500;
        newElement.height = 335;
        newElement.fill = unicornFill;
        newElement.name = "🦄 It's a freaking unicorn 🦄";

        selection.insertionParent.addChild(newElement);
        newElement.moveInParentCoordinates(250, 250);

    }
}


module.exports = {
    commands: {
        makeUnicorn: makeUnicorn,
    }
};
