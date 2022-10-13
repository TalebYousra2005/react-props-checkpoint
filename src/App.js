import "./App.css";
import { Profile } from "./profile/profile";
import image from "./assets/profilePhoto.jpg"
import {imageStyle} from "./profile/style"
function App() {
  const handleName = (name) => {
    alert(`welcome ${name}`);
  };
  return (
    <>
      <Profile
        fullName="TALEB Yousra"
        bio="This is my bio"
        proffession="Pharmacy student"
        handleName={handleName}
      >
        <img src={image} alt="this is the profile pic" style={imageStyle}/>
      </Profile>
    </>
  );
}

export default App;
