/**
 * AngularJS Starter Kit
 * @author Josh Hebb
 * 
 */

// Initialize the Angular Module and load any libraries.
var app = angular.module("angular-contentful-starter", [
	"ui.router",
  "contentful",
  "ngMap",
  "ngSanitize",
  "hc.marked"
]);

// Configure Contentful with the space ID & API access token so we can query Contentful.
app.config(function(contentfulProvider){

  // You can get your option values from Contentful (https://www.contentful.com/developers/docs/references/authentication/)
  contentfulProvider.setOptions({
      space: 'hpty8kufn7nl',
      accessToken: '3cdfdbcbd12558162e4f8a4105674661f02f8c26afa9e8423e29703e8915427e'
  });
});

// Setup the marked provider for rendering Markdown.
app.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);

// Send the user to the top of the page when we route them anywhere.
app.run(['$transitions', function ($transitions) {
  $transitions.onSuccess({}, function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
}]);