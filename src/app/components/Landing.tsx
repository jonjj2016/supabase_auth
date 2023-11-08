import React from 'react';

type LandingProps = {
  onSubmit: () => void;
};

const Landing: React.FC<LandingProps> = ({ onSubmit }) => {
  return (
    <div>
      <form>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button onClick={onSubmit}>login</button>
      </form>
    </div>
  );
};

export default Landing;
