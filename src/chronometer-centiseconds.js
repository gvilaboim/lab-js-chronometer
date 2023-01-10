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
      }, 10);
    }

    this.intervalId =  setInterval( ()=> {  
      this.currentTime++;
    }, 10);
   
  }

  getMinutes() {

    if(this.currentTime>60)
    {  console.log("Inside : " + this.currentTime);
      let m = this.currentTime/60;
      console.log(m);
      if(m>60)
      {
        do{
          m = m/60;
        } while(m>60)
      }
      console.log("Out if : " + m);
      console.log("Out if Floor: " + Math.floor(m));
      console.log("tese: " + m * 60 * 60);
         return Math.floor(m);
    }
    else {
      console.log("No if : " + this.currentTime);
      return this.currentTime;
    }
  
    

  }

  getSeconds() {
  
  }
  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
