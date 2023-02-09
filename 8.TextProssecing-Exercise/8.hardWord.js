function hardWord(array) {
    let text = array[0];
    let words = array[1];
    let dashes = [];

    for (let element of words) {
        let dash = '_';
        dash = dash.repeat(element.length);
        dashes.push(dash);
    }
    words.sort((a, b) => b.length - a.length);
    dashes.sort((a, b) => b.length - a.length);

    for (let i = 0; i < dashes.length; i++) {
        text = text.replace(dashes[i], words[i]);
    }
    console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])