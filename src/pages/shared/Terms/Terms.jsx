import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio
        explicabo ex, beatae sapiente voluptatem quos quasi placeat eum sequi?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        temporibus!
      </p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;
