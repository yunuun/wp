function weekday(str){
    if(str == "monday"){return 1; }
    if(str == "tuesday"){return 2;}
    if(str == "wednesday"){return 3;}
    if(str == "thursday"){return 4;}
    if(str == "friday"){ return 5; }
    if(str == "saturday"){ return 6;}
    if(str == "sunday"){ return 0; }
}
console.log(weekday("sunday"));