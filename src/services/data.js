export const data = {
  firstname: "Sylvia", 
  lastname: "Pap", 
  description: "Full Stack Software Engineer",
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
  github: "http://github.com/sylviapap",
  linkedin: "https://www.linkedin.com/in/sylvia-pap",
  blog: "https://dev.to/sylviapap",
  twitter: "https://twitter.com/sylviapapdev",
  skills: [
    "React",
    "Redux",
    "JavaScript",
    "Rails",
    "Ruby",
    "Python"
  ],
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
      title: "Translation Chat Messenger",
      imageURL: "talkr1.png",
      websiteURL: "https://translation-chat-app.herokuapp.com/",
      description: "Chat application that auto-detects and translates all messages to user's preferred language",
      technology: "Ruby on Rails Frontend and Backend, BCrypt and sessions for user authentication, Google Cloud Translation API, Bootstrap CSS",
      githubURL: "https://github.com/sylviapap/TalkR"
    },
    {
      title: "Subscription Manager",
      imageURL: "subscribr1.png",
      websiteURL: "https://subscrbr.herokuapp.com/",
      description: "Personalized dashboard to track and budget subcriptions to paid services and free trials",
      technology: "React.js frontend, Ruby on Rails API Backend, JSON Web Tokens, BCrypt, Semantic UI",
      githubURL: "https://github.com/sylviapap/client-subscription-app",
      backendRepo: "https://github.com/sylviapap/server-subscription-app"
    },
    {
      title: "Whack-a-Corona",
      imageURL: "whackcorona1.png",
      websiteURL: "https://sylviapap.github.io/kill-a-corona-sample/",
      description: "Whack-a-Mole style SPA game with virus images",
      technology: "Javascript frontend, Rails Backend for user score save, Custom CSS/HTML",
      githubURL: "https://github.com/brookebachman00/kill_a_corona_frontend_js",
      backendRepo: "https://github.com/brookebachman00/kill_a_corona_backend_rails",
      blogURL: "https://dev.to/sylviapap/kill-coronavirus-with-this-simple-game-3l5"
    },
    {
      title: "JavaScript Chatbot",
      imageURL: "chatbot1.png",
      websiteURL: "https://sylviapap.github.io/chatbot/",
      description: "An exercise in Javascript fundamentals without the use of any external chatbot libraries",
      technology: "Javascript, CSS, HTML",
      githubURL: "https://github.com/sylviapap/chatbot",
      blogURL: "https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc"
    },
    {
      title: "CLI Symptom Checker",
      imageURL: "cli1.png",
      description: "CLI App for symptom-disease lookup",
      technology: "Ruby, rest-client, Infermedica API",
      githubURL: "https://github.com/sylviapap/ruby-cli-app"
    }
  ]
}

export const contactItems = [
  {
    href:`mailto:${data.email}`,
    icon: "fa fa-google",
    text: data.email
  },
  {
    href: data.linkedin,
    icon: "fa fa-linkedin",
    text: "LinkedIn"
  },
  {
    href: data.github,
    icon: "fa fa-github",
    text: "GitHub"
  },
  {
    href: data.blog,
    icon: "fab fa-dev",
    text: "Blog"
  },
  {
    href: data.twitter,
    icon: "fa fa-twitter",
    text: "Twitter"
  }
]