/*************************************************************
 * 
 *  Static data loader
 * 
 * An inbetween solution until proper database is configured
 * 
 * ***********************************************************/ 


const items = [
    {
        articleId: 1000,
        typeId: 1,
        qualityClass: "II",
        name: "sivi",
        image: "art1000.jpeg",
        price: 1200,
        available: true,
    },
    {
        articleId: 1001,
        typeId: 2,
        qualityClass: "II",
        name: "sivi",
        image: "art1001.jpeg",
        price: 600,
        available: true,
    },
    {
        articleId: 1002,
        typeId: 3,
        qualityClass: "I",
        name: "sivi",
        image: "art1002.jpeg",
        price: 900,
        available: false,
    },
    {
        articleId: 1003,
        typeId: 1,
        qualityClass: "I",
        name: "sivi",
        image: "art1003.jpeg",
        price: 1000,
        available: true,
    },
    {
        articleId: 1004,
        typeId: 3,
        qualityClass: "II",
        name: "hrastovina",
        image: "art1004.jpeg",
        price: 1200,
        available: true,
    },
    {
        articleId: 1005,
        typeId: 1,
        qualityClass: "II",
        name: "sivi",
        image: "art1005.jpeg",
        price: 1400,
        available: false,
    },
    {
        articleId: 1006,
        typeId: 1,
        qualityClass: "I",
        name: "tamna hrastovina",
        image: "art1006.jpeg",
        price: 800,
        available: true,
    },
];

const types = [
    {
        typeId: 1,
        name:"Laminat 8mm"
    },
    {
        typeId: 2,
        name:"Laminat 10mm"
    },
    {
        typeId: 3,
        name:"Laminat 12mm"
    }
];

// checks if a key exists in localStorage, and sets the value if it doesnt
function checkSet(key, value) {
    if(localStorage.getItem(key) == null){
        localStorage.setItem(key, JSON.stringify(value));
    }
}


// setting all the values for local storage
$(document).ready(function(){
    checkSet("items", items);
    checkSet("types", types);
});
