export default class Timer{
    constructor(root) {
        root.innerHTML = Timer.getHTML();
        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            study: root.querySelector(".timer__btn--study"),
            shortBreak: root.querySelector(".timer__btn--shortBreak"),
            longBreak: root.querySelector(".timer__btn--longBreak"),
            reset: root.querySelector(".timer__btn--reset"),
            
        };

        this.interval = null;
        this.remainingSeconds = 0;
        var session_counter = 0;
        this.updateInterfaceControls();

        this.el.control.addEventListener("click", () =>{
            if (this.interval === null ){
                this.start(); 
            }else{
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () =>{
            this.stop();
            this.remainingSeconds = 0 * 60;
            this.updateInterfaceTime();
            session_counter = 0;
            text_box.textContent = "Start from the top";
        });
        
        this.el.study.addEventListener("click", () =>{
            this.stop();
            this.remainingSeconds = 25 * 60;
            this.updateInterfaceTime();
            session_counter = session_counter + 1;            
            if (session_counter === 1){
                text_box.textContent = "Time to read,so take out your text books or go online and read about the topic that you are studying (don't take notes yet)";
            }else if (session_counter === 2){
                text_box.textContent = "Time to take notes on what you just read and feel free to read more and use other sources for your note taking than what you just read.";
            }else if (session_counter === 3){
                text_box.textContent = "Time to make flashcards, so take out some paper, go on to quizlet or some other app where you can make flashcards and make some flashcards based on the topics that you covered today "
            }else if (session_counter === 4){
                text_box.textContent = "Todays study session is done but feel free to still use the timer for other activities or press the restart button to start another study session from the beginning"
            }
        });



        this.el.shortBreak.addEventListener("click", () =>{
            this.stop();
            this.remainingSeconds = 5 * 60;
            this.updateInterfaceTime();
            text_box.textContent = "Time for a quick 5 minute break";
        });

        this.el.longBreak.addEventListener("click", () =>{
            this.stop();
            this.remainingSeconds = 20 * 60;
            this.updateInterfaceTime();
            text_box.textContent = "Time for a nice 20 minute break";
        });

        console.log(session_counter);
    }

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        
        this.el.minutes.textContent = minutes. toString().padStart(2,"0");
        this.el.seconds.textContent = seconds. toString().padStart(2,"0");
    }  

    updateInterfaceControls(){
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">play_circle</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.add("timer__btn--stop");
        } else { 
            this.el.control.innerHTML = `<span class="material-symbols-outlined">
            pause_circle
            </span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.add("timer__btn--start");
        }
    }

    start(){
        if(this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds ===0) {
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop(){
        clearInterval(this.interval);
        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML () {
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--start">

            <span class="material-symbols-outlined">
                play_circle</span>
        </button>

        <button type="button" class="timer__btn timer__btn--study"> 
            <span class="material-symbols-outlined">
            school
            </span>
        </button>

        <button type="button" class="timer__btn timer__btn--shortBreak"> 
            <span class="material-symbols-outlined">self_improvement</span>
        </button>

        <button type="button" class="timer__btn timer__btn--longBreak"> 
            <span class="material-symbols-outlined">
            spa
            </span>
        </button>

        <button type="button" class="timer__btn timer__btn--reset"> 
            <span class="material-symbols-outlined">
            device_reset
            </span>
        </button>

        `;
    }
}