# Movie Recommendation System using Natural Language Processing

This is a movie recommendation system built using Natural Language Processing (NLP) techniques. The system analyzes movie descriptions and user preferences to recommend similar movies. It utilizes the TMDB Movies dataset for data analysis and recommendation generation.

## Features

- Recommends movies based on user input (movie name).
- Utilizes NLP techniques for understanding movie descriptions and generating recommendations.
- Uses cosine similarity to determine movie similarities.

## Technologies Used

- Python
- Flask (for creating the API)
- React (for the client-side application)
- Vite (for fast React development)

## Dataset

The [TMDB Movies dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?resource=download) is used for this recommendation system. It contains information about movies such as title, overview, genres, keywords, cast, and crew.

## Setup and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-recommendation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-recommendation
   ```

3. Set up the backend:

   ```bash
   # Install dependencies
   pip install -r requirements.txt

   # Run the Flask API
   python app.py
   ```

4. Set up the frontend (assuming you have Node.js and npm installed):

   ```bash
   # Navigate to the client directory
   cd client

   # Install dependencies
   npm install

   # Run the React app
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## API Endpoint

- **GET /recommend?movie_name={movie_name}**: Get recommendations based on a movie name.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
