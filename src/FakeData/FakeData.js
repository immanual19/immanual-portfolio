import guideLine from '../ArticleImage/guideLine.png';
import react from '../ArticleImage/react.png';
import JavaScriptImg from '../ArticleImage/js.jpeg';
const blogPosts=[
    {
        headLine: 'What is JavaScript and Why should you learn it',
        image: JavaScriptImg,
        link: 'https://immanuelsarker1.medium.com/what-is-javascri-534ebb8dd98',
        type:'JavaScript'
    },
    {
        headLine: "Begineer's guide to learn Web Development",
        image: guideLine,
        link: 'https://immanuelsarker1.medium.com/beginners-guide-to-learn-web-development-with-mern-technology-d46b30844f8e',
        type:'MERN Stack'
    },
    {
        headLine: "React.js. Where and How to start",
        image:react,
        link:'https://immanuelsarker1.medium.com/react-js-where-and-how-to-start-5122117859c6',
        type:'React.js'
    },
    {
        headLine: "To be Added and Tomorrow will be added",
        image:react,
        link:'https://immanuelsarker1.medium.com/react-js-where-and-how-to-start-5122117859c6',
        type:'React.js'
    }
]

const shuffle=data=>{
    for (let i = data.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [data[i - 1], data[j]] = [data[j], data[i - 1]];
    }
}

shuffle(blogPosts);

export default blogPosts;