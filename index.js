
let finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];


console.log("Financial Analysis")
// The total number of months in the dataset - calculate how many variables are included in the finance variable
console.log("Total Months: " + finances.length);

//The net total amount of Profit and Loses over the entire period
//target the number element of the array.
//use a for loop to add the monthly total together and console log the totals

let totalProfitLoss = 0

for (let index = 0; index < finances.length; index++) {
    totalProfitLoss =  totalProfitLoss + finances[index][1];

}
 console.log("Total Profit/Loss $" + totalProfitLoss)



//To track the average of the changes in profit / losses over the entire period take the change in profit
//to do this subtract the fist month from the next and store this information in an array
//Finally divide this by the total number of months - 1 in the array so the first month is excluded

let netChange = 0

for (let index = 1; index < finances.length; index++) {
    //Calculate total netChange that is later used to calculate the average (line 136)
    netChange = netChange + (finances[index][1]-finances[index-1][1])    
}

console.log("Average Change: $" + netChange/(finances.length-1))


// To work out which month had the greatest increase in profits and which had the greatest decrease in loses
// Calculated the net change in profit month on month
// Use an For loop to cycle through the data and an IF greater than statement to store the data in a variable if it is greater than the previous month 
// Use an IF less than statement to store the data in a variable if the loss is greater than the previous month

//This holds the maximum value for testing each month
let maximumValue = 0
//This holds the position of the Maximum Index in the array (e.g. the largest monthly change)
let maximumIndex = 0 
//These hold the lowest values for testing
let minimumValue = 0 
// This holds the position of the minimum index
let minimumIndex = 0 

for (let index = 1; index < finances.length; index++) {
    //Calculate the net change vs. the previous month 
    netChange = (finances[index][1]-finances[index-1][1])
    //Test if the net change for this month is greater than any previous net changes
    if(maximumValue < netChange){
        //Store the month's net change to test against future months and the place it existed in the array (e.g. maximumIndex)
        maximumValue = netChange
        maximumIndex = index 
    }

    //Test if the net change for this month is less than any previous net changes
    if(minimumValue > netChange){
        //Store the month's net change to test against future months and the place it existed in the array (e.g. maximumIndex)
        minimumValue= netChange
        minimumIndex = index 
    }
}

console.log("Greatest Increase in Profits: " + finances[maximumIndex][0] + " - " + "$" + maximumValue)
console.log("Greatest Decrease in Profits: " + finances[minimumIndex][0] + " - " + "$" + minimumValue)


