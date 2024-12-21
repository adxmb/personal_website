import "../styles.css";

const bio =
  "I am a final year student studying a Bachelor of Engineering (Honours) in" +
  " Software Engineering at the University of Auckland. I find purpose in work" +
  " that makes a difference. I have an appetite for knowledge and strive to" +
  " have a sound understanding of what I learn so I can apply and communicate" +
  " core concepts clearly using different approaches. This has led me to multiple" +
  " mentorship and leadership positions. My systematic approach to breaking down" +
  " problems lends itself to solving complex tasks and developing solutions from" +
  " different perspectives. In my spare time, I enjoy music, playing piano and" +
  " with experience performing in choir, and playing sports including basketball," +
  " water polo, and table tennis.";

const About = () => {
  return <body className="body-text">{bio}</body>;
};

export default About;
