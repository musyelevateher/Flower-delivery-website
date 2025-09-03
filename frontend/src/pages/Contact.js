import React from "react";
import Follow from "../components/Follow"
import Hard from "../components/Hard"
import "./Contact.css"
const Contact = () => {
  return (
    <div>
      <div className="follow-div"><Follow />
</div>
      <div className="hard-div"><Hard />
</div>
    </div>
  );
};

export default Contact;
