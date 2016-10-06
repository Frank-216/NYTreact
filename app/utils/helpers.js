
// need to ask how to import java script files to a specific page 
var axios = require('axios');

var authKey = "1c9b86bf3f10484c9bc72be7a7e66f1f";

var helpers =  {
	runQuery: function(term, start ,end){
 	
 		var term = term.trim();
 		var start =start.trim() + "0101";
 		var end = end.trim() + "1231";
		// query url 

		console.log("Query Run");
		// Run a query using Axios. Then return the results as an object with an array.
		// See the Axios documentation for details on how we structured this with the params.
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': APIKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end			
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);

			return results.data.response;

		});
		return axios.get(queryURLBase);

	},
	getSaved: function(){

		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results", results);
				return results;
			})
	},

	postSaved: function(title, date, url){

		var newArticle = {title: title, date: date, url: url};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				console.log("axios results", results._id);
				return results._id;
			})

	},

	deleteSaved: function(title, data, url){

		return axios.delete('/api/saved', {
			params: {
			    'title': title,
			    'data': data,
			    'url': url,
			}
		})
		.then(function(results){
			console.log("axios results", results);
			return results;
		})
	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;

