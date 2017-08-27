# spotify-dance-judge

How cool (or not cool) would you look busting moves to a certain song? Let the Spotify Dance Judge be the...judge.

This app uses the [Spotify Web API](https://developer.spotify.com/web-api/) to fetch data on a searched song for danceability, along with a few other attributes that may or may not help in determining whether or not to dance along.

## Installation

First, clone the repo, then install needed dependencies:

```
$ npm install
```

Feel free to use the `client_id`, `client_secret`, and `redirect_uri` provided in `app.js`, or [follow the instructions here](https://developer.spotify.com/web-api/tutorial/) to create and register your own application, then replace the given `client_id`, `client_secret`, and `redirect_uri` values in `app.js` with the ones on your newly-registered app.

## Usage

Run the application with:

```
$ node app.js
```
If all is successful, open `http://localhost:8888`. Allow permissions and log in if prompted.

Once logged in, simply search for a song. For better results, include the artist name in with your search.

![Usage example](https://github.com/shoemakerc/spotify-dance-judge/blob/master/examples/usage_ex.PNG)

## Additional info

Uses Node for server authentication, jQuery/Bootstrap for responsiveness, and [Handlebars](http://handlebarsjs.com/) for template handling. Requires a Spotify account to use.