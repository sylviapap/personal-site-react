export const data = {
  firstName: "Sylvia", 
  lastName: "Pap",
  headline: "Current Software Engineer, former Aspiring-Lawyer",
  profilePic: "profilepic.png",
  email: "sylviapap1@gmail.com",
  website: "http://www.sylviapap.com",
  github: "http://github.com/sylviapap",
  linkedin: "https://www.linkedin.com/in/sylvia-pap",
  blog: "https://dev.to/sylviapap",
  twitter: "https://twitter.com/sylviapapdev",
  skills: [
    "JavaScript",
    "Ruby",
    "Python",
    "React",
    "Rails",
    "CSS",
    "HTML",
  ],
  projects: [
    {
      title: "Racoon",
      imageURL: "racoonmap1.png", 
      websiteURL: "https://racoon.digital/",
      description: "COVID-19 diagnostic reporting service",
      technology: "React.js • Redux • Thunk • Google Maps Javascript API • Infermedica Symptom Checking API • Ruby on Rails API Backend • JSON Web Tokens • BCrypt • Active Model Serializers • Custom CSS • HTML • Official COVID-19 Data • Images & Logos From Graphic Designer • Chatbot Widget Integration",
      githubURL: "https://github.com/sylviapap/racoon-client",
      blogURL: "https://dev.to/sylviapap/check-out-my-coding-bootcamp-final-project-1lc1"
    },
    {
      title: "Translation Chat Messenger",
      imageURL: "talkr1.png",
      websiteURL: "https://translation-chat-app.herokuapp.com/",
      description: "Auto-detects and translates all messages to user's preferred language",
      technology: "Ruby on Rails • BCrypt • Rails sessions • Google Cloud Translation API • Bootstrap CSS",
      githubURL: "https://github.com/sylviapap/TalkR"
    },
    {
      title: "Subscription Manager",
      imageURL: "subscribr1.png",
      websiteURL: "https://subscribr.netlify.app/",
      description: "Personalized budgeting dashboard",
      technology: "React.js • Ruby on Rails • JSON Web Tokens • BCrypt • Semantic UI",
      githubURL: "https://github.com/sylviapap/client-subscription-app",
    },
    {
      title: "Whack-a-Corona",
      imageURL: "whackcorona1.png",
      websiteURL: "https://sylviapap.github.io/kill-a-corona-sample/",
      description: "Whack-a-Mole style SPA game + Coronavirus",
      technology: "JavaScript • Rails • CSS • HTML",
      githubURL: "https://github.com/brookebachman00/kill_a_corona_frontend_js",
      blogURL: "https://dev.to/sylviapap/kill-coronavirus-with-this-simple-game-3l5"
    },
    {
      title: "JavaScript Chatbot",
      imageURL: "chatbot1.png",
      websiteURL: "https://sylviapap.github.io/chatbot/",
      description: "An exercise in fundamentals without external chatbot libraries",
      technology: "JavaScript • CSS • HTML",
      githubURL: "https://github.com/sylviapap/chatbot",
      blogURL: "https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc"
    },
    {
      title: "CLI Symptom Checker",
      imageURL: "cli1.png",
      description: "Enter symptoms and receive diagnoses from the command line",
      technology: "Ruby • rest-client • Infermedica API",
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

export const blogPosts = [
  {
    href: "https://dev.to/sylviapap/how-to-make-your-own-no-template-personal-website-with-react-material-ui-and-netlify-pij",
    title: "Tutorial: personal website with React, Material UI, and Netlify"
  },
  {
    href: "https://dev.to/sylviapap/bcrypt-explained-4k5c",
    title: "BCrypt Explained"
  },
  {
    href: "https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc",
    title: "Simple JavaScript Chatbot"
  },
  {
    href: "https://dev.to/sylviapap/check-out-my-coding-bootcamp-final-project-1lc1",
    title: "Symptom Check & Report COVID Project"
  },
  {
    href: "https://dev.to/sylviapap/setting-heroku-config-vars-with-google-cloud-json-file-on-rails-4dnf",
    title: "Heroku Config with JSON Credentials"
  },
  {
    href: "https://dev.to/sylviapap/the-bigger-picture-behind-the-github-master-branch-name-change-35h8",
    title: "The bigger picture behind the GitHub master branch name change"
  },
  {
    href: "https://dev.to/sylviapap/10-tech-youtube-channels-to-diversify-your-feed-ad4",
    title: "10 Tech YouTube Channels to Diversify Your Feed"
  },
  {
    href: "https://dev.to/sylviapap/learning-swift-ios-and-vapor-in-one-week-2ap7",
    title: "Swift, iOS, and Vapor in one week"
  },
  {
    href: "https://dev.to/sylviapap/beginner-healthcare-ai-tensorflow-js-4ma1",
    title: "Healthcare AI & TensorFlow.js"
  },
  {
    href: "https://dev.to/sylviapap/mapbox-and-tool-tips-in-react-30ie",
    title: "Mapbox & Tool Tips in React"
  },
  {
    href: "https://dev.to/sylviapap/kill-coronavirus-with-this-simple-game-3l5",
    title: "Whack-a-Mole + Coronavirus"
  },
  {
    href: "https://dev.to/sylviapap/the-ruby-enumerable-operator-and-max-vs-maxby-ac6",
    title: "Comparisons using <=> in Ruby"
  }
]