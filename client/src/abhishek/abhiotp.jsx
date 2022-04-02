import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export const Abhiotp = () => {
    let keyref=true;
  const navigate = useNavigate();
  // const data=useSelector((e)=>e.setemailotp);
  // useEffect(()=>{
  //   console.log(data)
  // },[])
  // console.log(data)
  
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2345/mailer").then((fe) => setdata(fe.data));
    
  }, [data]);
  console.log(data);
  
  const handlechange = (e) => {
      keyref=!keyref;
    let k = e.target.value;
    if (k == data.otp) {
        localStorage.setItem("email",data.email);
        axios.get(`http://localhost:2345/user/${data.email}`).then(({ data }) => {
          console.log(data);
          if (data.length < 1) {
            navigate("/signup");
          } else {
            navigate("/login");
          }
        });
    } else if (k.length === 4 && k != data.otp) {
      alert("Wrong otp");
    }
  };
  const handlesubmit = (e) => {
    if (e.target.innerHTML === "Prev") {
      navigate("/");
    }
    if (e.target.innerHTML === "Next") {
        localStorage.setItem("email",data.email);
      axios.get(`http://localhost:2345/user/${data.email}`).then(({ data }) => {
        console.log(data);
        if (data.length < 1) {
          navigate("/signup");
        } else {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="abhiemail">
      <h1>Enter the 4-digit code sent to you at:</h1>
      <h3>{data.email} </h3>
      <div style={{ marginTop: "40px" }}></div>
      <input
        className="abhiinputbox"
        type="Number"
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter the otp"
      />
      <div style={{ marginTop: "40px" }}></div>
      <p>Tip : Make sure to check your inbox and spam folders</p>
      <div style={{ marginTop: "40px" }}></div>
      <div style={{ display: "flex" }}>
        <button className="abhibtn" type="submit" onClick={handlesubmit}>
          <div>Prev</div>
        </button>
        <button
          className="abhibtn"
          style={{ marginLeft: "300px" }}
          type="submit"
          onClick={(e) => handlesubmit(e)}
        >
          <div>Next</div>
        </button>
      </div>

      <div style={{ marginTop: "40px" }}></div>
    </div>
  );
};
