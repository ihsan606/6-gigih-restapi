# Song API

This repository contains the source code for a simple Song API built using Express.js.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/song-api.git
cd song-api
```

2. Install the dependencies:

```bash
npm install
```
### Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will run on `http://localhost:3000`.

## API Endpoints

The API provides the following endpoints:

### 1. Get all songs

- Endpoint: `GET /api/songs`
- Description: Retrieves a list of all songs.
- Response: Array of song objects.
```json
{
	"code": 200,
	"data": [
		{
			"id": 7,
			"title": "Closer",
			"artists": [
				{
					"name": "The Chainsmokers"
				},
				{
					"name": "Halsey"
				}
			],
			"duration": 244,
			"songUrl": "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw",
			"playCount": 21
		},
		{
			"id": 6,
			"title": "Someone Like You",
			"artists": [
				{
					"name": "Adele"
				}
			],
			"duration": 285,
			"songUrl": "https://open.spotify.com/track/4dpARuHxo51G3z768sgnrY",
			"playCount": 20
		},
		{
			"id": 4,
			"title": "Uptown Funk",
			"artists": [
				{
					"name": "Mark Ronson"
				},
				{
					"name": "Bruno Mars"
				}
			],
			"duration": 270,
			"songUrl": "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
			"playCount": 15
		},
		{
			"id": 1,
			"title": "Shape of You",
			"artists": [
				{
					"name": "Ed Sheeran"
				}
			],
			"duration": 233,
			"songUrl": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
			"playCount": 10
		}
	],
	"message": "success"
}
```
### 2. Play a song

- Endpoint: `POST /api/songs/play`
- Description: Plays a specific song.
- Request Body: JSON object with the `song_id` property.

```
//request body
{
  "song_id": 2 
}
```

```
//response body
{
	"code": 200,
	"data": {
		"id": 2,
		"title": "Don't Start Now",
		"artists": [
			{
				"name": "Dua Lipa"
			}
		],
		"duration": 183,
		"songUrl": "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvEg",
		"playCount": 32
	},
	"message": "PLAY SONG SUCCESS "
}
```

## Controllers

The application uses controllers to handle the API endpoints. The controllers can be found in the `controllers` directory.

- `song.controller.js`: Handles the logic for getting all songs and playing a song.

## Middleware

The application uses middleware to handle errors. The error middleware can be found in the `middleware` directory.

- `error.middleware.js`: Handles errors and sends an appropriate response.

## License

This project is licensed under the [MIT License](LICENSE).
