/*
 Main.js: This is the main js controller of our application. It handles the onclick events
 and calls every custom widget visualization
*/

/*Document ready initializations */
$(document).ready(function() {

	$("[name='switch-cluster']").bootstrapSwitch();

	$('#date-picker').daterangepicker({
		"timePicker": true,
		"timePicker24Hour": true,
		"timePickerIncrement": 30,
		"startDate": moment().subtract(1, 'days'),
	    "endDate": moment(),
	    "ranges": {
	    	'Current hour': [moment().startOf('hour'), moment().endOf('hour')],
	    	'Last hour': [moment().subtract(1, 'hours').startOf('hour'), moment().subtract(1, 'hours').endOf('hour')],
	    	'Today': [moment().startOf('day'), moment().endOf('day')],
	        'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
	        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	        'This Month': [moment().startOf('month'), moment().endOf('month')],
	        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	    },
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	  startDate = start.format('YYYY-MM-DDTHH:mm:ss');
	  endDate = end.format('YYYY-MM-DDTHH:mm:ss'); 
	  $('#date-picker span').html(startDate + ' - ' + endDate);
	});
	
	//By default only pick the last 7 days
	startDate = moment().subtract(1, 'days');
	endDate = moment();

	$('#date-picker span').html(startDate.format('YYYY/MM/DD') + ' - ' + endDate.format('YYYY/MM/DD'));

});

//onLoad function
$(window).load(function() {

	//Load Modules which does not depend on the qery
	Modules.populateNTweetsLabel("*");
	//Movies
	/*Modules.populateMovie(query, "c38d5eddd270596daf43f0ea9a01958b", "#movie1-piechart", "Weekend 10-12 April 2015");
	Modules.populateMovie(query, "c38d5eddd270596daf43f0ea9a01a09e", "#movie2-piechart", "Weekend 17-19 April 2015");
	Modules.populateMovie(query, "543379bdb74259a0b4ab5c68a1000707", "#movie3-piechart", "Weekend 24-26 April 2015");
	Modules.populateMovie(query, "543379bdb74259a0b4ab5c68a1001510", "#movie4-piechart", "Weekend 1-3 May 2015");
	*/
});

//Generates a query string for Elastic REST services based on the text entered and daterange selected
function obtainQuery(){

	var isAText;
	var query = $("#query").val();

	isAText = query.search(/text:/i);

	//If it is empty append *
	if (query == "") {
		query = "*";
	} else if (isAText <= -1) {//If doesn't have text field, append to it
		query = "text:" + query;
	}

	if (startDate === null && startDate === undefined) {
		startDate = moment().subtract(29, 'days');
	}

	if (endDate === null && endDate === undefined) {
		endDate = moment();
	}

	var containsAsterisk = query.search(/\*/i);
	if (containsAsterisk == -1) {
		//query += " AND created_at:[" + startDate + " TO " + endDate + "]";
	} else if (query.length == 6) {
		query = "*"
	}

	return query;

};

//function Modules.populateNTweetsLabelGeoLimits(query,polygonCoords){};
//Generates a query string for Elastic REST services based on the text entered and daterange selected
function obtainQueryGeo(){

	var isAText;
	var query = $("#query").val();

	isAText = query.search(/text:/i);

	//If it is empty append *
	if (query == "") {
		query = "*";
	} 
	/*else if (isAText <= -1) {//If doesn't have text field, append to it
		query = "text:" + query;
	}*/

	if (startDate === null && startDate === undefined) {
		startDate = moment().subtract(29, 'days');
	}

	if (endDate === null && endDate === undefined) {
		endDate = moment();
	}

	var containsAsterisk = query.search(/\*/i);
	if (containsAsterisk == -1) {
		query += " AND created_at:[" + startDate + " TO " + endDate + "]";
	} else if (query.length == 6) {
		query = "*"
	}

	return query;

};



$("#btn-search").click(function() {

	var query = obtainQuery();
	console.log(query);
	var stateCluster = $('input[name="switch-cluster"]').bootstrapSwitch('state');

	//All of this modules depend on the query
	//Generals
	Modules.populateNTweetsLabel(query,startDate,endDate);
	Modules.populateNUsersLabel(query,startDate,endDate);
	Modules.populateTop5Trends(query,startDate,endDate);
	Modules.populateTop5Users(query,startDate,endDate);
	Modules.populatePieChartSentiment(query,startDate,endDate);
	Modules.populateHistogramTrends(query,startDate,endDate);
	Modules.populateTopContentGenerators(query,startDate,endDate);
//	Modules.populateMostProlificTweeter(query);
	Modules.populateMostFollowers(query,startDate,endDate);
	Modules.populateTweetTime(query,startDate,endDate);
	Modules.populateTweetDaySentiment(query,startDate,endDate);
	Modules.populateTopTweets(query,startDate,endDate);
	Modules.populateTopTweetsStored(query,startDate,endDate);
	//Modules.populateLanguageSentiment(query);
	//Modules.populateSentimentMap(query);
	Modules.populateGenderSentiment(query,startDate,endDate);
	//Modules.populateLanguageOverall(query);
	//Cluster
	/*if (stateCluster){
		Modules.populateCluster(query);
	}
*/
});

//Button search click handler, refresh all modules that depends on the text input query
//$("#btn-search").click(function() {
//
//	var query = obtainQuery();
//	console.log(query);
//	var stateCluster = $('input[name="switch-cluster"]').bootstrapSwitch('state');

	//All of this modules depend on the query
	//Generals
//	Modules.populateNTweetsLabel(query,startDate,endDate);
//	Modules.populateTop5Trends(query,startDate,endDate);
//	Modules.populateTop5Users(query);
//	Modules.populatePieChartSentiment(query);
//	Modules.populateHistogramTrends(query);
//	Modules.populateMostProlificTweeter(query);
//	Modules.populateMostFollowers(query);
//	Modules.populateTweetTime(query);
//	Modules.populateTweetDaySentiment(query);
//	Modules.populateLanguageSentiment(query);
//	Modules.populateSentimentMap(query);
//	Modules.populateGenderSentiment(query);
//	Modules.populateLanguageOverall(query);
	//Cluster
	/*if (stateCluster){
		Modules.populateCluster(query);
	}
	//Weather
	Modules.populateWeatherSentiment(query);
	Modules.populateWeatherTypeSentiment(query, "sunny", "Sunny Day", "#weather1-piechart");
	Modules.populateWeatherTypeSentiment(query, "partly cloudy", "Cloudy Day", "#weather2-piechart");
	Modules.populateWeatherTypeSentiment(query, "light rain", "Rainy Day", "#weather3-piechart");
	Modules.populateWeatherTypeSentiment(query, "clear", "Clear Day", "#weather4-piechart");
	//Places
	Modules.populateFavouritePlace(query, "text: EdinburghCastle", "Edinburgh Castle", "#place1-piechart");
	Modules.populateFavouritePlace(query, "text: CaltonHill", "Calton Hill", "#place2-piechart");
	Modules.populateFavouritePlace(query, "text: Meadows", "The Meadows", "#place3-piechart");
	Modules.populateFavouritePlace(query, "text: Cramond", "Cramond", "#place4-piechart");
	Modules.populateFavouritePlace(query, "text: Museum", "National Museum", "#place5-piechart");
	//Politics
	Modules.populateElectionPopAnalysis(query);
	Modules.populateElectionPartyAnalysis(query, "snp", "#snp-piechart");
	Modules.populateElectionPartyAnalysis(query, "conservative", "#conservative-piechart");
	Modules.populateElectionPartyAnalysis(query, "uklabour", "#labour-piechart");
	Modules.populateElectionPartyAnalysis(query, "NicolaSturgeon", "#snpleader-piechart");
	Modules.populateElectionPartyAnalysis(query, "David_Cameron", "#conservleader-piechart");
*/
//});
//Click handler for showing only positive sentiments on the map widget
$("#btn-togglePositive").click(function() {
	if ( typeof positiveHeatmap !== 'undefined') {
		positiveHeatmap.setMap(positiveHeatmap.getMap() ? null : map);
	}
});
//Click handler for showing only negative sentiments on the map widget
$("#btn-toggleNegative").click(function() {
	if ( typeof negativeHeatmap !== 'undefined') {
		negativeHeatmap.setMap(negativeHeatmap.getMap() ? null : map);
	}
});
//Handler for the enter click
$(document).keypress(function(e) {
	if (e.which == 13) {
		$("#btn-search").trigger("click");
	}
});
