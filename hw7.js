//Task 2.4

function findTheOdd(a) {
    if ((a[0] != a[1]) && (a[1] == a[2])) { alert(a[0]) }
    else {
        for (i = 1; i < a.length; i++) {
            if (a[i - 1] != a[i]) {
                alert(a[i]);
                break;
            }
        }
    }
}

//Task 2.5

function getDiscount(num){
    if (1 <= num && num < 5) {
        return alert("Your final price is 100%");}
    else if (5 <= num && num < 10) {
        return alert ("Your final price is 95%")}
    else if (num >= 10) {
        return alert("Your final price is 90%");}
    else {
        return alert("Wrong input");}
    }

//Task 2.6

let month = prompt ("Please, enter month (1-12)", "");
function getDaysForMonth(month){
switch(month) {
    case "2": 
      alert ("Number of days in " + month + " is 28");
      break;
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12': 
      alert ("Number of days in " + month + " is 31");
      break;
    case '4':
    case '6':
    case '9':
    case '11':  
      alert ("Number of days in " + month + " is 30");
      break;
    default: 
      alert('You\'ve entered the wrong value');
  }
}
getDaysForMonth(month);