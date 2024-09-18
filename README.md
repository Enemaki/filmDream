## FilmDream: Unleash Your Movie Poster Vision

FilmDream is a web app that lets you create stunning movie posters using the power of AI. Craft unique visuals for your dream film by combining your creative ideas with the power of cutting-edge technology.

### Features

* **AI-Powered Poster Generation:** Generate movie posters based on your movie title and desired art style using Hugging Face's "XLabs-AI/flux-RealismLora" model.
* **Google Generative AI Integration:** Develops refined image prompts based on your input, ensuring the generated poster aligns with your vision.
* **Variety of Art Styles:** Choose from a selection of popular art styles to create a poster that perfectly captures the essence of your film.
* **User-Friendly Interface:** Create your poster with ease thanks to a simple and intuitive design.

### Technologies Used

* **Frontend:** HTML, CSS, Javascript (Vite framework) ([vitejs.dev](https://vitejs.dev/))
* **Backend:** Hugging Face transformers library ([huggingface.co/transformers](https://huggingface.co/transformers))
* **Model:** XLabs-AI/flux-RealismLora ([huggingface.co/XLabs-AI/flux-RealismLora](https://huggingface.co/XLabs-AI/flux-RealismLora))
* **AI Prompt Development:** Google Generative AI

### Setup

1. **Clone the repository:**

```
git clone https://github.com/your-username/filmdream.git
```

2. **Install dependencies:**

```
npm install
```

3. **API Keys:**

- Obtain Hugging Face API key ([huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)) and store it securely in a `.env` file at the project root with the following format:

```
HUGGINGFACE_API_KEY="YOUR_API_KEY"
```

- **Optional:** Set up a Google Cloud Platform (GCP) project for Google Generative AI access (if desired for additional prompt refinement) and configure environment variables accordingly.

4. **Run the app:**

```
npm run dev
```

This will start the development server and open the app in your default browser at http://localhost:5173/. 

### Usage

1. Visit http://localhost:5173/ in your browser.
2. Enter the title of your movie.
3. Choose your desired art style from the provided options.
4. Click the "Generate Poster" button.
5. The app will display a loading indicator and generate a movie poster based on your input and chosen style.

### Contributing

We encourage contributions to FilmDream! Feel free to open a pull request on GitHub if you have ways to enhance the app's functionality or user experience. 

### License

This project is licensed under the MIT License. See the LICENSE file for details.
