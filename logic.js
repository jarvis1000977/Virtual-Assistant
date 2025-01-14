const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Sir...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Sir...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing RIDER...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes("who are you?")){
        speak("Sir Im RIDER visual assistant,can i help you?")
    }
    else if(message.includes("are you jarvis?")){
        speak("No I'm not Jarvis. I am a rider,a visual assistant")
    }
    else if(message.includes("how are you?")){
        speak("I'm fine, do you have any messages for me?")
    }
    else if(message.includes("yes")){
        speak("that's grate")
    }
    else if(message.includes("rider, tell me your information")){
        speak("Sure Im RIDER Your Virtual Assistant,im a human Developed program")
    }
    else if(message.includes("fine")){
        speak("ok sir,Is there any work for me?")
    }
    else if(message.includes("tell me my name")){
        speak("Jay")
    }
    else if(message.includes("tell me my father name")){
        speak("Jatin Kumar")
    }
    else if(message.includes("tell me my mother name")){
        speak("Chetna Ben")
    }

    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google....")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram....")
    }
    else if(message.includes("open icon playlist")){
        window.open("https://www.youtube.com/@ICONENGINEERINGTUTORIALS/playlists", "_blank");
        speak("Opening Icon PlayList....")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube....")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook....")
    }
    else if(message.includes("open notepad")){
        window.open("https://onlinenotepad.org/notepad", "_blank");
        speak("Opening NotePad...")
    }
    else if(message.includes("open ai")){
        window.open("https://openai.com/chatgpt/overview/", "_blank");
        speak("Opening ChatGPT...")
    }
    else if(message.includes("open gaana")){
        window.open("https://gaana.com/", "_blank");
        speak("Opening Gaana....")
    }
    else if(message.includes("open my web")){
        window.open("https://rareanimes.me/", "_blank");
        speak("Opening My Web....")
    }
    else if(message.includes("open hotstar")){
        window.open("https://www.hotstar.com/in/home?ref=%2Fin", "_blank");
        speak("Opening Hotstar....")
    }
    else if(message.includes("open apna college")){
        window.open("https://www.youtube.com/@ApnaCollegeOfficial/videos", "_blank");
        speak("Opening Apna College....")
    }
    else if(message.includes("open reels")){
        window.open("https://www.youtube.com/hashtag/reels", "_blank");
        speak("Opening Reels....")
    }
    else if(message.includes("open language programming.")){
        window.open("https://www.programiz.com/c-programming/online-compiler/", "_blank");
        speak("Opening Programming Compiler....")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}