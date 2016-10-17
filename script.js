function matchCase(text, pattern) {
    var result = '';

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
            var r = new RegExp(a, 'gi');
            nodes[n].textContent = nodes[n].textContent.replace(r, function(match) {
                return matchCase(b, match);
            });
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}

//htmlreplace('lorem ipsum', 'blah');

// Object of substitutions
var xkcd = {
    'witnesses': 'these dudes I know',
    'allegedly': 'kinda probably',
    'new study': 'Tumblr post',
    'rebuild': 'avenge',
    'space': 'spaaace',
    'google glass': 'virtual boy',
    'smartphone': 'pokedex',
    'electric': 'atomic',
    'senator': 'elf-lord',
    'car': 'cat',
    'election': 'eating contest',
    'congressional leader': 'river spirit',
    'homeland security': 'homestar runner',
    'could not be reached for comment': 'is guilty and everyone knows it'
};

// Script that does the actual find/replace on page
for (var key in xkcd) {
    if (xkcd.hasOwnProperty(key)) {
        htmlreplace(key, xkcd[key]);
    }
}

// Script that populates popup.html
for (var key in xkcd) {
    if (xkcd.hasOwnProperty(key)) {
        document.getElementById('substitute').innerHTML += '<tr><td>' + key + '</td> <td>' + xkcd[key] + '</td> </tr>';
    }
}

// Script to undo on this page when button is clicked
document.getElementById("flip").addEventListener("click", function() {
    for (var key in xkcd) {
        if (xkcd.hasOwnProperty(key)) {
            htmlreplace(xkcd[key], key);
        }
    }
});