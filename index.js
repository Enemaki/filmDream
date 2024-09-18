import { HfInference } from "@huggingface/inference";
import { GoogleGenerativeAI } from "@google/generative-ai";
const HF_TOKEN = import.meta.env.VITE_HF_TOKEN

const inference = new HfInference(HF_TOKEN);
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 0.5,
    maxOutputTokens: 300
  }
})

const form = document.querySelector("#posterForm");
const movieTitle = document.querySelector("#movie-title");
const artStyles = document.querySelector("#art-styles");
const posterOutput = document.querySelector("#poster-output");
const generateButton = document.querySelector("#generatePosterBtn")

async function imageGenerator(query) {
  const blob = await inference.textToImage({
    model: 'XLabs-AI/flux-RealismLora',
    inputs: `${query}`,
  })

  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }

  blobToBase64(blob).then(res => {
    // do what you wanna do
   // res is base64 now

    posterOutput.innerHTML = `<img src="${res}" alt="query">`
  });
}


/* 
  Image generation project requirements:
    - Create a prompt from the movie title and art style submitted by the user
    - Use the image generations endpoint to provide `dall-e-3`
      or `dall-e-2` the prompt created by the form submission
    - Display the final poster image within the `posterOutput` div

  Stretch goals: 
    - On submit, display text describing the image being generated 
    - Provide user feedback when any errors occur
*/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  generatePoster()
  form.reset();
  generateButton.textContent = "Reset"
  generateButton.addEventListener("click", function(event) {
    event.preventDefault()
    location.reload()
  })
});

const messages =  [
  {
    role: "user",
    parts: [{ text: "Hello" }],
  },
  {
    role: "model",
    parts: [{ text: `Create a short prompt for an image generation app from the 
    movie title and art style provided` }],
  },
]

async function generatePoster() {
  const chat = model.startChat({
    history: messages
  });
  prompt = `movie title ${movieTitle.value}, art style ${artStyles.value}`
  const result = await chat.sendMessage(prompt)
  console.log(result.response.text())
  posterOutput.innerHTML = result.response.text()
  imageGenerator(result.response.text())
}