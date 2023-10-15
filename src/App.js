import './App.css';
import insta from './instagramlogo.png';
import mail from './gmail.jpeg';
import github from './githublogo.png';
export default function app(){
  return(
    <div id="id">
      <div id="id1">
        <p>My Own Portfolio</p>
      </div>
      <div id="id2">
        <p><b id="id3">Profile</b></p>
        <p>Hi! Everyone, My name is EDURU SRIHARI SESHA SAI. I am from Nellore,Andhra Pradesh</p>
        <p>I am pursuing my B-Tech 3rd year in vitap university.</p>
        <p>I chose cse group .</p>
        <p>I completed my Intermediate in Sri chaithanya Junior College.</p>
        <p>I Completed my SSC in V.B.R E.M School,Dhanalakshmipuram.</p>
        <p>I spend most of time on Project works as well as i am always active on Linkedin.</p>
        <p>I like to enjoy with my friends and i am good at sports too.</p>
        <p>I like to listen music very much and i watch movies very often.</p>
      </div>
      <div id="id9">
        <p id="id3"><b>Skills</b></p>
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">Data Structures and Algorithms</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">R Language</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12"><b>Projects</b></p>
        <span id="id11">Wheat Leaf Disease Detection</span>
        <span id="id11">Image Dehazing</span>
        <span id="id11">Breast Cancer Identification</span>
        <span id="id11">Smart Seatbelt Engien</span>
      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5"><a id="id8" href="mailto:saieduru2003@gmail.com">Email</a></span>
        <a href="mailto:saieduru2003@gmail.com"><img src={mail} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://instagram.com/srihari_eduru?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">Instagram</a></span>
        <a href="https://instagram.com/srihari_eduru?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><img src={insta} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://github.com/eduru03">Github</a></span>
        <a href="https://github.com/eduru03"><img src={github} alt="Instagram logo" height={50}/></a>
      </div>
    </div>
  );
}