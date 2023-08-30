function scuberGreetingForFeet(x){
    if (x < 400) {
      return "This one is on me!"
    }
    else if (x>400, x<2000) {
      return "That will be twenty bucks."
    }
    else if (x>2000, x<2500) {
      return "I will gladly take your thirty bucks."
    }
    else if (x>=2500) {
      return "No can do."
    }
}
scuberGreetingForFeet(199, 1500, 2001, 2501)

function ternaryCheckCity(city){
 return city === "NYC" ? 'Ok, sounds good.' : 'No go.';
}
ternaryCheckCity("NYC", "Pittsburgh")


function switchOnCharmFromTip(tip){
   switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default :
      return "Bye.";
   }
}
switchOnCharmFromTip("generous", "not as generous", "thanks for everything")
