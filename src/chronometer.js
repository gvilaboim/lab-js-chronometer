class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    if(printTimeCallback)
    {
      this.intervalId =  setInterval( ()=> {  
        printTimeCallback();
      }, 1000);
    }

    this.intervalId =  setInterval( ()=> {  
      this.currentTime++;
    }, 1000);
   
  }

  getMinutes() {
   
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    if(this.currentTime>60)
    {
      let numb = (this.currentTime/60).toFixed(2).toString().split(".")[1];
      let seconds = (numb/100 ) *60;
     return Math.floor(seconds);
    }
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
     let s = value.toString();
    if(s.length>1)
    {
      return s;
    }
    else {
      return "0" + value ;
    }
   
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    }

  split() {
   
    let m = this.getMinutes().toString();
    let s = this.getSeconds().toString();
    let mm = this.computeTwoDigitNumber(m);
    let ss =  this.computeTwoDigitNumber(s);
    let str = mm + ":" + ss;
    return str;
    
  }
}
