import { Route, Routes } from "react-router-dom";

import { Abhinav } from "../abhinav";
import { Abhiemail } from "../abhimail";
import { Abhiotp } from "../abhiotp";
import { Abhilogin } from "../abhilogin";
import { Abhisignup } from "../abhisignup";

export const Routers = () => {
  return (
    <>
      <Abhinav />
      <Routes>
        <Route path="/" element={<Abhiemail />} />
        <Route path="/otp" element={<Abhiotp />} />
        <Route path="/login" element={<Abhilogin />} />
        <Route path="/signup" element={<Abhisignup />} />
        {/* Create other routes here: loginsignup, meetup, addmeetup and 404 */}
        {/* meetup route should be dynamic */}
      </Routes>
    </>
  );
};