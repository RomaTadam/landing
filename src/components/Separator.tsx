import React from "react";

const Separator = ({ mobile } ) => {
  return (
    <div className="container">
      <hr className={`separator ${mobile ? 'mobile' : ""}`} />
    </div>
  )
}

export default Separator;