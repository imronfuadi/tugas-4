import React from "react";

function Tombol(props) {
  return (
    <button
        style={
            {
                height:'40px',
                width:'150px',
                margin:'10px'
            }
        }
      onClick={() => {
        return alert(`Anda telah mengklik Tombol ${props.name}`);
      }}
    >
        Tombol {props.name}
    </button>
  );
}
export default Tombol;