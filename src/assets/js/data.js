
const missingPets = [
    {
        id:0,
        idUser:0,
        name: "Rex",
        description:"Labrador retriever, very fat.",
        date:"2022-6-13",  
    },
    {
        id:1, 
        idUser:1,
        name: "Mimi",
        description:"Lazy persian cat. Likes to climb trees.",
        date:"2022-6-12",  
    },
    {
        id:2,
        idUser:2,
        name: "Vujadin",
        description:"Grey african parrot. Likes to fly low and curse passerbys.",
        date:"2022-6-9",  
    },
    {
        id:3,
        idUser:3,
        name: "Tommy",
        description:"Puppy of mixed breed. Doesn't know his name but howls if you mention bacon.",
        date:"2022-6-11",  
    },
    {
        id:4,
        idUser:4,
        name: "Cica",
        description:"Blue Macaw parrot, often sings Never Gonna Give You Up by Rick Astley.",
        date:"2022-6-8",  
    },
    
];

const users = [
    {
        id:0,
        username:"Marko",
        password:"password123",
        phone:"064-555-777", 
    },
    {
        id:1,
        username:"Darko",
        password:"password123",
        phone:"064-555-333", 
    },
    {
        id:2,
        username:"Tijana",
        password:"password123",
        phone:"064-444-222", 
    },
    {
        id:3,
        username:"Zorana",
        password:"password123",
        phone:"064-111-888", 
    },
    {
        id:4,
        username:"Damjan",
        password:"password123",
        phone:"064-999-222", 
    },
    {
        id:707,
        username:"Korisnik",
        password:"password123",
        phone:"064-323-222", 
    },
];

const comments = [
    {
        post:0, 
        idUser:3,
        content:"Found him! Call me so we can meet up!"
    }, 
    {
        post:2, 
        idUser:4,
        content:"Found him! Call me so we can meet up!"
    }, 
    {
        post:3, 
        idUser:1,
        content:"Found him! Call me so we can meet up!"
    }, 
    
];


const pets = [
    {
        id:0,
        type:"dog",
        race:"German Shepherd",
        name:"Zag",
        weight:45,
        age:2,
        description:"Grey German shepherd, a beautiful police dog.", 
        photos:[
            "zag.jpg",
            "zag1.jpg",
            "zag2.jpg",
            "zag3.jfif",
            "zag4.jpg",
        ],
        videos:[
            "https://www.youtube.com/embed/KZUlXNuL02A",
            "https://www.youtube.com/embed/ttmlRxNrgPc",
            "https://www.youtube.com/embed/4ix5YiyKLqc"

        ]
    },
    {
        id:1,
        type:"dog",
        race:"Bloodhound",
        name:"Iggy",
        weight:30,
        age:4,
        description:"Very playful, good with kids.", 
        photos:[
            "iggy.jpg",
            "iggy1.jpg",
            "iggy2.jpg",
            "iggy3.jpg",
            "iggy4.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/0AG59PncXxs",
            "https://www.youtube.com/embed/7qIFqMCJ6_8",
            "https://www.youtube.com/embed/AoGbVUMJukY",
            "https://www.youtube.com/embed/-ksnH-wYgJ0"
        ]
    },
    {
        id:2,
        type:"dog",
        race:"Golden retriever",
        name:"Zana",
        weight:35,
        age:5,
        description:"Nice, gentle lady of a dog.", 
        photos:[
            "zana.jpg",
            "zana1.jpg",
            "zana2.jpg",
            "zana3.jpg",
            "zana4.jpg",
            "zana5.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/ArVKQiTlnKU",
            "https://www.youtube.com/embed/gVq---GcmrQ",
            "https://www.youtube.com/embed/xt6-ILh0e24",
            "https://www.youtube.com/embed/N_Ve2M4Oggo",
            "https://www.youtube.com/embed/DlUyHogoyvE",
            "https://www.youtube.com/embed/B83nmCSwRuw"
        ]
    },

    {
        id:3,
        type:"cat",
        race:"Persian",
        name:"Dan",
        weight:5,
        age:2,
        description:"Lazy cat, excellent for those who don't mind a couch potato.",
        photos:[
            "dan.jpg",
            "dan1.jpg",
            "dan2.jpg",
            "dan3.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/nKi_01sGuR8",
            "https://www.youtube.com/embed/770qZgY6dMM",
            "https://www.youtube.com/embed/tLb9MSJarJ0"
        ]
    },
    {
        id:4,
        type:"cat",
        race:"Bald",
        name:"Fatty",
        weight:12,
        age:4,
        description:"Good mannered cat.",
        photos:[
            "fatty.jpg",
            "fatty1.jpg",
            "fatty2.jpg",
            "fatty3.jpg",
            "fatty4.jpg",
            "fatty5.jpg",
            "fatty6.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/IAUz5bGKzic",
            "https://www.youtube.com/embed/wGAK0EVdubo",
            "https://www.youtube.com/embed/47fqUxTzPAI",
            "https://www.youtube.com/embed/VJYombwohAM",
            "https://www.youtube.com/embed/RSvr62BLSgw"
        ]
    },
    {
        id:5,
        type:"cat",
        race:"Russian",
        name:"Diana",
        weight:3,
        age:1,
        description:"Still a kitten, needs a strict parent.",
        photos:[
            "diana.jpg",
            "diana1.jpg",
            "diana2.jpg",
            "diana3.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/pj0kxRC4uJ0",
            "https://www.youtube.com/embed/9gcP0ioid4s",
            "https://www.youtube.com/embed/oU3B_IgLSwE"
        ]
    },
    {
        id:6,
        type:"bird",
        race:"Grey African",
        name:"Zoran",
        weight:1,
        age:2,
        description:"Very funny guy. Likes crackers and knock-knock jokes.",
        photos:[
            "zoran.jpg",
            "zoran1.jpg",
            "zoran2.jpg",
            "zoran3.jpg",
            "zoran4.jpg",
            "zoran5.jpg",
            "zoran6.jpg",
            "zoran7.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/ewptevBIqNk",
            "https://www.youtube.com/embed/bE9-BBiQqos",
            "https://www.youtube.com/embed/FxgyvVg06ds",
            "https://www.youtube.com/embed/WQ_wO0r16ww",
            "https://www.youtube.com/embed/bl7WljhLa7Y",
            "https://www.youtube.com/embed/7JsIr7Q6Xi4",
            "https://www.youtube.com/embed/bpXs6ghXK0Q"
        ]
    },
    {
        id:7,
        type:"bird",
        race:"Nymph",
        name:"Zorica",
        weight:0.2,
        age:4,
        description:"Great singer, wakes up late so she won't wake you up early in the morning.",
        photos:[
            "zorica.jpg",
            "zorica1.jpg",
            "zorica2.jpg",
            "zorica3.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/eVeCxaBGgDA",
            "https://www.youtube.com/embed/eNeUu4QWDd0",
            "https://www.youtube.com/embed/YnfgR69d8qw",
            "https://www.youtube.com/embed/2SoxQcFdb5I",
            "https://www.youtube.com/embed/qnbu7mJIw1g",
            "https://www.youtube.com/embed/9wDJnpVNau4"
        ]
    },
    {
        id:9,
        type:"bird",
        race:"Blue Macaw",
        name:"Stana",
        weight:1,
        age:1,
        description:"Early bird, likes pretending to be a radio.",
        photos:[
            "stana.jpg",
            "stana1.jpg",
            "stana2.jpg",
            "stana3.jpg",
            "stana4.jpg",
            "stana5.jpg",
            "stana6.jpg"
        ],
        videos:[
            "https://www.youtube.com/embed/caCMooaCIsA",
            "https://www.youtube.com/embed/LH-JeT4GMcA",
            "https://www.youtube.com/embed/1FP-gX-Fwdw",
            "https://www.youtube.com/embed/1xNZQixJNNU"
        ]
    },
]


$(document).ready(function(){

    //ucitavanje svih init podataka u localStorage

    //nestali ljubimci
    if(localStorage.getItem("missingPets") == null){
        localStorage.setItem("missingPets", JSON.stringify(missingPets));
    }
    
    //korisnici
    if(localStorage.getItem("users") == null){
        localStorage.setItem("users", JSON.stringify(users));
    }

    //komentari
    if(localStorage.getItem("comments") == null){
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    //ljubimci za usvajanje
    if(localStorage.getItem("pets") == null){
        localStorage.setItem("pets", JSON.stringify(pets));
    }
});
