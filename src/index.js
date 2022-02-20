import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Success from "./JoinTheClub/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import JoinClubForm from "./JoinTheClub/JoinClubForm";
import SiteLayout from "./UI/SiteLayout";

ReactDOM.render(
  <BrowserRouter>
    <SiteLayout>
      <Routes>
        <Route path="/" element={<JoinClubForm />} />
        <Route path="/club-signup" element={<JoinClubForm />} />
        <Route path="/club-signup/success" element={<Success />} />
        <Route path="/club-signup/payment-error" element={<PaymentError />} />
        <Route element={<JoinClubForm />} />
      </Routes>
    </SiteLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
