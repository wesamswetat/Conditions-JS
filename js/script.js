/**
 * Created by Wesam on 8/9/2016.
 */

/* ############################## TARGEL 1 ############################# */
console.log("wesam swetat");

var num1 = 5,
    num2 = 9;

console.log((num1 > num2) ? num1 : num2);

/* ############################## TARGEL 2 ############################# */

var num3 = 3,
    num4 = -7,
    num5 = 2;

console.log(((num3 + num4 + num5) > 0) ? "+" : "-");

/* ############################## TARGEL 3 ############################# */
var num6 = 0,
    num7 = -1,
    num8 = 4;

if ( num6 > num7 && num6 > num8 && num7 > num8 ){
    console.log(num6 + " " + num7 + " " + " " + num8);
}else if( num6 > num7 && num6 > num8 && num8 > num7 ){
    console.log(num6 + " " + num8 + " " + " " + num7);
}else if ( num7 > num6 && num7 > num8 && num6 > num8 ){
    console.log(num7 + " " + num6 + " " + " " + num8);
}else if( num7 > num6 && num7 > num8 && num8 > num7 ){
    console.log(num7 + " " + num8 + " " + " " + num6);
}else if( num8 > num6 && num8 > num7 && num6 > num7 ){
    console.log(num8 + " " + num6 + " " + " " + num7);
}else {
    console.log(num8 + " " + num7 + " " + " " + num8);
}


/* ############################## TARGEL 4 ############################# */
var max1 = -5,
    max2 = -2,
    max3 = -6,
    max4 = 0,
    max5 = -1;

if( (max1 > max2 ) && (max1 > max3) && (max1 > max4) && (max1 > max5)){
    console.log(max1);
}else if((max2 > max3) && (max2 > max4) && (max2 > max5)){
    console.log(max2);
}else if((max3 > max4) && (max3 > max5)){
    console.log(max3);
}else if(max4 > max5){
    console.log(max4);
}else {
    console.log(max5);
}


/* ############################## TARGEL 5 ############################# */
var david = 80,
    vinoth = 77,
    divya = 88,
    ishitha = 95,
    thomas = 68,
    average = 0;

average = (( david + vinoth + divya + ishitha + thomas) / 5);

console.log("the everage = " + average);

if ( average < 60 )
    console.log("the Avereg is " + average +" גרוע מאוד ");
if ( average >= 60 && average <70 )
    console.log("the Avereg is " + average + " גרוע ");
if ( average >= 60  && average < 80)
    console.log("the Avereg is " + average + " בינוני ");
if ( average >= 80 && average < 90)
    console.log("the Avereg is " + average + " טוב ");
if ( average >= 90 && average < 100)
    console.log("the Avereg is " + average + " טוב מאוד ");