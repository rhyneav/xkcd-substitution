function matchCase(text, pattern) {
    var result = "";

    for(var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }
    
    return result;
}

function htmlreplace(a, b, element) {    
    if (!element) element = document.body;
    
    var nodes = element.childNodes;
    
    for (var n=0; n<nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            var r = new RegExp(a, "gi");
            nodes[n].textContent = nodes[n].textContent.replace(r, function(match) {
                return matchCase(b, match);
            });
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}

// Object of substitutions
var xkcd = {
    "witnesses": "these dudes I know",
    "allegedly": "kinda probably",
    "new study": "Tumblr post",
    "rebuild": "avenge",
    "space": "spaaace",
    "google glass": "virtual boy",
    "smartphone": "pokedex",
    "electric": "atomic",
    "senator": "elf-lord",
    "car": "cat",
    "election": "eating contest",
    "congressional leader": "river spirit",
    "homeland security": "homestar runner",
    "could not be reached for comment": "is guilty and everyone knows it",
    "debate": "dance-off",
    "self driving": "uncontrollably swerving",
    "poll": "psychic reading",
    "candidate": "airbender",
    "drone": "dog",
    "vows to": "probably won't",
    "at large": "very large",
    "second-degree": "friggin awful",
    "third-degree": "friggin awful",
    "an unknown number": "like hundreds",
    "front runner": "blade runner",
    "global": "spherical",
    "years": "minutes",
    "minutes": "years",
    "no indication": "lots of signs",
    "urged restraint by": "drunkenly egged on",
    "horsepower": "tons of horsemeat",
    "gaffe": "magic spell",
    "ancient": "haunted",
    "star-studded": "blood-soaked",
    "remains to be seen": "will never be known",
    "silver bullet": "ways to kill werewolves",
    "subway system": "tunnels I found",
    "surprising": "surprising (but not to me)",
    "war of words": "interplanetary war",
    "tension": "sexual tension",
    "cautiously optimistic": "delusional",
    "doctor who": "the big bang theory",
    "win votes": "find pokemon",
    "behind the headlines": "beyond the grave",
    "email": "poem",
    "facebook post": "poem",
    "tweet": "poem",
    "facebook ceo": "this guy",
    "latest": "final",
    "disrupt": "destroy",
    "meeting": "menage a trois",
    "scientists": "channing tatum and his friends",
    "you won't believe": "I'm really sad about"
};

// Script that does the actual find/replace on page
for (var key in xkcd) {
    if (xkcd.hasOwnProperty(key)) {
        htmlreplace(key, xkcd[key]);
    }
}