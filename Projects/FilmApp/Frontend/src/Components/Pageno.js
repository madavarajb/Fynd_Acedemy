// import React, { useState } from "react";
// const Pageno = () => {
//   let [num, setNum] = useState(0);

//   let incNum = () => {
//     if (num < 10) {
//       setNum(Number(num) + 1);
//     }
//   };

//   let decNum = () => {
//     if (num > 0) {
//       setNum(num - 1);
//     }
//   };

//   let handleChange = (e) => {
//     setNum(e.target.value);
//   };

//   return (
//     <div className="center-content">
//       <div className="col-xl-1">
//         <div className="input-group">
//           <div className="input-group-prepend">
//             <button className="btn btn-outline-primary" type="button" onClick={decNum}>
//               -
//             </button>
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             value={num}
//             onChange={handleChange}
//           />
//           <div className="input-group-prepend">
//             <button className="btn btn-outline-primary" type="button" onClick={incNum}>
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pageno;
import React, { useState } from "react";

const Pageno = ({ onPageChange }) => {
  let [num, setNum] = useState(1);

  let incNum = () => {
    if (num < 10) {
      setNum(num + 1);
      onPageChange(num + 1);
    }
  };

  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
      onPageChange(num - 1);
    }
  };

  let handleChange = (event) => {
    const newNum = parseInt(event.target.value);
    if (!isNaN(newNum) && newNum >= 0 && newNum <= 10) {
      setNum(newNum);
      onPageChange(newNum);
    }
  };

  return (
    <div className="center-content">
      <div className="col-xl-1">
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn btn-outline-primary" type="button" onClick={decNum}>
             Back
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            value={num}
            onChange={handleChange}
          />
          <div className="input-group-prepend">
            <button className="btn btn-outline-primary" type="button" onClick={incNum}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageno;
