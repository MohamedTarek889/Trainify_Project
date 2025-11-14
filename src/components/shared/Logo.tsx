import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" aria-label="Trainify - Home" className={className}>
      <span>
        Train
        <span className="gradient-text animate-gradient">fy</span>
      </span>
    </Link>
  );
};

export default Logo;
