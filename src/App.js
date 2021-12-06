import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import moment from "moment";
import { Typography, Container } from "@material-ui/core";
import "moment/locale/vi";
import "@fontsource/roboto";

//Set VN
moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCoutryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  // Set list countries
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
      setSelectedCountryId("VN");
    });
  }, []);

  // Change country
  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
    console.log(selectedCoutryId);
  };

  // Lay report cua country
  useEffect(() => {
    if (selectedCoutryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCoutryId
      );

      getReportByCountry(selectedCountry.Slug).then((res) => {
        res.data.pop(); // delete last item
        console.log(res.data);
        setReport(res.data);
      });
    }
  }, [selectedCoutryId, countries]);

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h2" component="h2">
        Số liệu COVID 19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCoutryId}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </Container>
  );
}

export default App;
