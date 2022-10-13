import { buttonStyle, containerStyle } from "./style";
import PropTypes from "prop-types";

export const Profile = ({
  fullName = "user name",
  bio ='user bio',
  proffession = "user profession",
  handleName = () => null,
  children,
}) => {
  return (
    <div className="container" style={containerStyle}>
      <div>
        {children}
        <h1>
          <b>NAME :</b>
          {fullName}
        </h1>
        <h4>
          <b>BIO :</b>
          {bio}
        </h4>
        <h4>
          <b>PROFESSION :</b>
          {proffession}
        </h4>
        <button onClick={() => handleName(fullName)} style={buttonStyle}>
          click me!
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  proffession: PropTypes.string,
};
