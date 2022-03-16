const interval = [
    {
        "letter": "A" || "a",
        "interval": "1"
    },
    {
        "letter": "B" || "b",
        "interval": "2"
    },
    {
        "letter": "C" || "c",
        "interval": "3"
    },
    {
        "letter": "D" || "d",
        "interval": "4"
    },
    {
        "letter": "E" || "e",
        "interval": "5"
    },
    {
        "letter": "F" || "f",
        "interval": "6"
    },
    {
        "letter": "G" || "g",
        "interval": "7"
    },
    {
        "letter": "H" || "h",
        "interval": "8"
    },
    {
        "letter": "I" || "i",
        "interval": "9"
    },
    {
        "letter": "J" || "j",
        "interval": "10"
    },
    {
        "letter": "K" || "k",
        "interval": "11"
    },
    {
        "letter": "L" || "l",
        "interval": "12"
    },
    {
        "letter": "M" || "m",
        "interval": "13"
    },
    {
        "letter": "N" || "n",
        "interval": "14"
    },
    {
        "letter": "O" || "o",
        "interval": "15"
    },
    {
        "letter": "P" || "p",
        "interval": "16"
    },
    {
        "letter": "Q" || "q",
        "interval": "17"
    },
    {
        "letter": "R" || "r",
        "interval": "18"
    },
    {
        "letter": "S" || "s",
        "interval": "19"
    },
    {
        "letter": "T" || "t",
        "interval": "20"
    },
    {
        "letter": "U" || "u",
        "interval": "21"
    },
    {
        "letter": "V" || "v",
        "interval": "22"
    },
    {
        "letter": "W" || "w",
        "interval": "23"
    },
    {
        "letter": "X" || "x",
        "interval": "24"
    },
    {
        "letter": "Y" || "y",
        "interval": "25"
    },
    {
        "letter": "Z" || "z",
        "interval": "26"
    }
]

let text_to_interval = ["A", "J", "H", "S"];

function text_to_interval() {
    function alphabetFinder(j) {
        for(let i = 0; i < interval.length ; i++) {
        if(interval[i].letter === j) {
             console.log(interval[i].interval)
           }
        }
        return;
    }
    function alphabetCorresponder() {
       for(x = 0; x < text_to_interval.length; x++) {
           alphabetFinder(text_to_interval[x])
       }
       return;
    }
alphabetCorresponder()
}
