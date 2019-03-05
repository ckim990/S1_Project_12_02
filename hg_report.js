"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Christopher Kim
   Date:   3.4.19
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1> <h2> By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "'id='gameImg'/> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table>" + itemSummary;



document.getElementById("article").innerHTML = gameReport;

var ratingsSum = 0;

var ratingsCount = ratings.length;

for (var i = 0; i < ratingsCount; i++) {
    ratingsSum += ratings[i];
}

var ratingAvg = ratingsSum / ratingsCount;


var ratingReport = "<h1>Customer Reviews</h1>"
ratingReport += "<h2>" + ratingAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";


for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'>";
    ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
    ratingReport += "<table>";
    ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
    ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
    ratingReport += "<tr><th>Rating</th><td>";


    for (var j = 0; j < ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr>";
    ratingReport += "</table>";
    ratingReport += ratingSummaries[i];
    ratingReport += "</div>";
}


document.getElementById("aside").innerHTML = ratingReport;