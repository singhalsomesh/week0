function getAMorPM() {
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 0 && hours < 12) {
      return 'AM';
    } else {
      return 'PM';
    }
}

function formatDateToWords(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${dayOfMonth} ${month} ${year}`;
    return formattedDate;
}

function getGreeting() {
    const currentTime = new Date().getHours();
  
    if (currentTime >= 5 && currentTime < 12) {
      return 'Good Morning!';
    } else if (currentTime >= 12 && currentTime < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Night';
    }
}

function showTime(){
    document.getElementById("time")
        .innerText = new Date().toLocaleTimeString() + ` ${getAMorPM()}`;

    document.getElementById("date")
        .innerText = formatDateToWords(new Date()); 

    document.getElementById("message")
        .innerText =getGreeting(); 

    setTimeout(showTime, 1000);    
}  

showTime();
            