import { v4 as uuid4 } from 'uuid';


function getChillHopMusic() {
    return [
        {
            name: "Bloom",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            artist: "Blue Wednesday, Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11234",
            color: ['#D0A1CD', '#62567C'],
            id: uuid4(),
            active: false,
        },
        {
            name: "Splendour",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13010",
            color: ['#7A8E59', '#282E23'],
            id: uuid4(),
            active: false,
        },
        {
            name: "Roses n Flames",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist: "CYGN",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
            color: ['#45546B', '#8A5692'],
            id: uuid4(),
            active: false,
        },
        {
            name: "Hereafter",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-300x300.jpg",
            artist: "Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11767",
            color: ['#255293', '#F39876'],
            id: uuid4(),
            active: false,
        },
        {
            name: "False Hope",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, Pandrezz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10145",
            color: ['#5B4F8D', '#986D8D'],
            id: uuid4(),
            active: false,
        },
       
    ];
} 

export default getChillHopMusic;
