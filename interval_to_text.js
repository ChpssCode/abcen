const alphabet = [
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

let interval_to_text = ["1", "2", "3", "4"];

function interval_to_text() {
    function intervalFinder(k) {
        for(let y = 0; y < alphabet.length; y++) {
        if(alphabet[y].interval === k) {
             console.log(alphabet[y].letter)
           }
        }
        return;
    }
    function intervalCorresponder() {
       for(z = 0; z < interval_to_text.length; z++) {
          intervalFinder(interval_to_text[z])
       }
       return;
    }
    intervalCorresponder();
}
