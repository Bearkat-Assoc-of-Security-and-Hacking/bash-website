// app/HeroLogo.js

const HeroLogo = () => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="bash-logo-title"
      role="img"
    >
      <title id="bash-logo-title">BASH Club Claw Logo</title>
      <g className="claw-group">
        <path
          className="claw-path claw-1"
          d="M25 10 C20 30, 20 70, 25 90 S40 85, 40 90 L48 90 S53 85, 48 60 S30 15, 25 10 Z"
        />
        <path
          className="claw-path claw-2"
          d="M50 10 C45 30, 45 70, 50 90 S65 85, 65 90 L73 90 S78 85, 73 60 S55 15, 50 10 Z"
        />
        <path
          className="claw-path claw-3"
          d="M75 10 C70 30, 70 70, 75 90 S90 85, 90 90 L98 90 S103 85, 98 60 S80 15, 75 10 Z"
        />
      </g>
    </svg>
  );
};

export default HeroLogo;
