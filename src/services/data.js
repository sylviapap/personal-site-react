export const data = {
	firstName: "Sylvia",
	lastName: "Pap",
	headline: "Current Software Engineer, former Aspiring Lawyer",
	profilePic: "profilepic.png",
	website: "http://www.sylviapap.com",
	github: "http://github.com/sylviapap",
	linkedin: "https://www.linkedin.com/in/sylvia-pap",
	blog: "https://dev.to/sylviapap",
	twitter: "https://twitter.com/sylvialpap",
	stackOverflow: "https://stackoverflow.com/users/13272348/sylvia-pap",
	leetCode: "https://leetcode.com/sylviapap/",
};

const githubRepos = {
	racoon: {
		frontend: "https://github.com/sylviapap/racoon-frontend",
		backend: "https://github.com/sylviapap/racoon-backend",
	},
	twitterClone: "https://github.com/sylviapap/twitter-clone",
	talkr: "https://github.com/sylviapap/TalkR",
	subscription: "https://github.com/sylviapap/client-subscription-app",
	whack: "https://github.com/sylviapap/whack-a-virus",
	chatbot: "https://github.com/sylviapap/chatbot",
	cli: "https://github.com/sylviapap/ruby-cli-app",
	python: "https://github.com/sylviapap/python-project",
};

const liveSiteURLs = {
	racoon: "https://racoon.digital/",
	twitterClone: "https://sylvia-twitter.netlify.app/",
	talkr: "https://translation-chat-app.herokuapp.com/",
	subscription: "https://subscribr.netlify.app/",
	whack: "https://sylviapap.github.io/whack-a-virus/",
	chatbot: "https://sylviapap.github.io/chatbot/",
};

const blogURLs = {
	personalSite:
		"https://dev.to/sylviapap/how-to-make-your-own-no-template-personal-website-with-react-material-ui-and-netlify-pij",
	bcrypt: "https://dev.to/sylviapap/bcrypt-explained-4k5c",
	chatbot: "https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc",
	racoon:
		"https://dev.to/sylviapap/check-out-my-coding-bootcamp-final-project-1lc1",
	herokuConfig:
		"https://dev.to/sylviapap/setting-heroku-config-vars-with-google-cloud-json-file-on-rails-4dnf",
	swiftVapor:
		"https://dev.to/sylviapap/learning-swift-ios-and-vapor-in-one-week-2ap7",
	healthcareAI:
		"https://dev.to/sylviapap/beginner-healthcare-ai-tensorflow-js-4ma1",
	mapbox: "https://dev.to/sylviapap/mapbox-and-tool-tips-in-react-30ie",
	whackVirus:
		"https://dev.to/sylviapap/kill-coronavirus-with-this-simple-game-3l5",
	ruby:
		"https://dev.to/sylviapap/the-ruby-enumerable-operator-and-max-vs-maxby-ac6",
};

export const projects = [
	{
		title: "Life Story Twitter",
		imageURL: "twitter-clone.jpg",
		websiteURL: liveSiteURLs.twitterClone,
		description:
			"Clone project to answer application question 'Tell your life story in Tweets'",
		technology: "React • JavaScript • CSS • HTML • Material UI",
		githubURL: githubRepos.twitterClone,
	},
	{
		title: "Racoon",
		imageURL: "racoon-map.png",
		websiteURL: liveSiteURLs.racoon,
		description: "COVID-19 diagnostic reporting service",
		technology:
			"React • Redux • Google Maps • Infermedica • Rails • JSON Web Tokens • BCrypt • Active Model Serializers • CSS",
		githubURL: githubRepos.racoon.frontend,
		blogURL: blogURLs.racoon,
		youtubeURL: "https://youtu.be/SntYf3koT1c",
	},
	{
		title: "Translation Chat Messenger",
		imageURL: "talkr.png",
		websiteURL: liveSiteURLs.talkr,
		description:
			"Auto-detects & translates group chat messages to user's preferred language",
		technology: "Rails • BCrypt • Google Cloud Translation • Bootstrap",
		githubURL: githubRepos.talkr,
		youtubeURL: "https://youtu.be/WzkuAMt6k8I",
	},
	{
		title: "Subscription Manager",
		imageURL: "subscribr.png",
		websiteURL: liveSiteURLs.subscription,
		description: "Personalized budgeting dashboard",
		technology: "React • Rails • JSON Web Tokens • BCrypt • Semantic UI",
		githubURL: githubRepos.subscription,
	},
	{
		title: "Whack-a-Virus",
		imageURL: "whack-virus.png",
		websiteURL: liveSiteURLs.whack,
		description: "SPA Whack-a-Mole style game + Coronavirus",
		technology: "JavaScript • Rails • CSS • HTML",
		githubURL: githubRepos.whack,
		blogURL: blogURLs.whackVirus,
	},
	{
		title: "JavaScript Chatbot",
		imageURL: "chatbot.png",
		websiteURL: liveSiteURLs.chatbot,
		description:
			"An exercise in fundamentals without external chatbot libraries",
		technology: "JavaScript • CSS • HTML",
		githubURL: githubRepos.chatbot,
		blogURL: blogURLs.chatbot,
	},
	{
		title: "CLI Symptom Checker",
		imageURL: "ruby-cli.png",
		description: "Enter symptoms and receive diagnoses from the command line",
		technology: "Ruby • rest-client • Infermedica API",
		githubURL: githubRepos.cli,
	},
];

export const skills = [
	{
		name: "Python",
		href: githubRepos.python,
	},
	{
		name: "Ruby",
		href: githubRepos.cli,
	},
	{
		name: "JavaScript",
		href: githubRepos.chatbot,
	},
	{
		name: "Rails",
		href: githubRepos.talkr,
	},
	{
		name: "React",
		href: githubRepos.racoon.frontend,
	},
	{
		name: "CSS",
		href: githubRepos.whack,
	},
	{
		name: "HTML",
		href: githubRepos.twitterClone,
	},
	{
		name: "Test Driven Development",
		href: githubRepos.racoon.backend,
	},
	{
		name: "Data Structures & Algorithms",
		href: data.leetCode,
	},
];

export const contactItems = [
	{
		href: data.linkedin,
		icon: "fa fa-linkedin",
		text: "LinkedIn",
	},
	{
		href: data.github,
		icon: "fa fa-github",
		text: "GitHub",
	},
	{
		href: data.blog,
		icon: "fab fa-dev",
		text: "Blog",
	},
	{
		href: data.twitter,
		icon: "fa fa-twitter",
		text: "Twitter",
	},
	{
		href: data.stackOverflow,
		icon: "fab fa-stack-overflow",
		text: "Stack Overflow",
	},
];

export const blogPosts = [
	{
		href: blogURLs.personalSite,
		title: "Personal Website with React, Material UI, & Netlify",
	},
	{
		href: blogURLs.bcrypt,
		title: "BCrypt Explained",
	},
	{
		href: blogURLs.chatbot,
		title: "JavaScript Chatbot",
	},
	{
		href: blogURLs.racoon,
		title: "COVID Symptom Checker & Map",
	},
	{
		href: blogURLs.herokuConfig,
		title: "Heroku Configuration",
	},
	{
		href: blogURLs.swiftVapor,
		title: "Swift, iOS, & Vapor",
	},
	{
		href: blogURLs.healthcareAI,
		title: "Healthcare AI & TensorFlow",
	},
	{
		href: blogURLs.mapbox,
		title: "Mapbox & Tool Tips in React",
	},
	{
		href: blogURLs.whackVirus,
		title: "Whack-a-Mole + Coronavirus",
	},
	{
		href: blogURLs.ruby,
		title: "Comparisons in Ruby Using <=>",
	},
];
