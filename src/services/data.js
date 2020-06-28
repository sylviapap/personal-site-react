export const data = {
  firstname: "Sylvia", 
  lastname: "Pap", 
  occupation: "Software Engineer",
  description: "Full Stack Web Development Software Engineer",
  image: "profilepic.png",
  bio: "I am a recent graduate of Flatiron School's Full Stack Immersive Software Engineering program. I have experience in Ruby, Rails, JavaScript, React, Redux, and Python3.",
  status: "looking for new opportunities",
  email: "sylviapap1@gmail.com",
  phone: "805-709-7858",
  address: {
    city: "Sacramento",
    state: "CA"
  },
  website: "http://www.sylviapap.com",
  "social": [
    {
      "name":"twitter",
      "url":"http://twitter.com",
      "className":"fa fa-twitter"
    },
    {
      "name":"linkedin",
      "url":"https://www.linkedin.com/in/sylvia-pap",
      "className":"fa fa-linkedin"
    },
    {
      "name":"github",
      "url":"http://github.com/sylviapap",
      "className":"fa fa-github"
    }
  ],
  skills: ["react", "rails"],
  projects: [
    {
      title: "Racoon",
      imageURL: "racoonmap1.png", 
      websiteURL: "https://racoon-corona-app.herokuapp.com/",
      description: "COVID-19 map and symptom checker",
      technology: "React.js, Redux, Thunk, Google Maps Javascript API, Infermedica Symptom Checking API, Ruby on Rails API Backend, JSON Web Tokens, BCrypt, Active Model Serializers, Custom CSS/HTML",
      githubURL: "https://github.com/sylviapap/final-project-client",
      backendRepo: "https://github.com/sylviapap/final-project-server",
      blogURL: "https://dev.to/sylviapap/check-out-my-coding-bootcamp-final-project-1lc1"
    },
    {
      title: "Subscription Manager",
      imageURL: "subscribr1.png",
      websiteURL: "https://subscrbr.herokuapp.com/",
      description: "Personalized dashboard to track and budget subcriptions to paid services and free trials",
      technology: "React.js frontend, Ruby on Rails API Backend, JSON Web Tokens, BCrypt, Semantic UI",
      githubURL: "https://github.com/sylviapap/client-subscription-app",
      backendRepo: "https://github.com/sylviapap/server-subscription-app"
    }
  ]
}