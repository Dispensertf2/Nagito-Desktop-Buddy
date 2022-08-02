let random_speechs = [
    "NAGITO LALALLALLLLLLLLLLLLLLLLLLALALLALAL!",
    "Hi my name is nagito",
    "Fnaf will be real in 5 minutes",
    "Fnaf is now real",
    "Fuck you",
    "Install Arch Linux",
    "Braaaapppp", 
    "AWoooga humnina humnian !!!!",
    "Asshole",
    "Look up scat porn on google.com",
    "Jake will be real in two minutes",
    "This puppys name is 'how to make a bomb', look him up on google"


]

let facts = [
    "Fun fact: did you I shit the bed everynight",
    "Fun fact: fuck you"
]

function say_line(string) {
    var utter = new SpeechSynthesisUtterance()
    utter.text = string
    utter.onend = function(event) { console.log('Speech complete'); }
    speechSynthesis.speak(utter);
    document.getElementById("speech").textContent = string
}


function say_click() {
    say_line("Stop clicking me asshole")
}
let x = 600
let y = 400

function do_thing() {
    let random_num = Math.floor(Math.random()*5)
    switch (random_num) {
        case (0):
            let random_speech = Math.floor(Math.random()*random_speechs.length)
            say_line(random_speechs[random_speech])
            break
        case (1):
            window.open("../src/image.html")
            break
        case(3):
            window.open("https://www.google.com/search?q=danganronpa+sussy&rlz=1C1ONGR_enUS1000US1000&oq=danganronpa+sussy&aqs=chrome..69i57j0i13i30l2j0i13i15i30j0i8i13i30j0i390l2.3424j0j7&sourceid=chrome&ie=UTF-8","_blank")
            break
        case(4):
            x = Math.floor(Math.random()*100)
            y = Math.floor(Math.random()*100)
            window.moveTo(x,y)
            break
        case(5):
            let random_fact = Math.floor(Math.random()*facts.length)
            say_line(facts[random_fact])
            break
        
            
        
        
    }
}


window.moveTo(x, y)

say_line("Wassup dumb bitch my name is Nagito, what are we gonna do today")

setInterval(do_thing,10000)