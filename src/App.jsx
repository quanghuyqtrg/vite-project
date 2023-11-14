// App.jsx
import React, { useState } from "react";
import "./styles.css";
import "./Footer.css"; // Import the Footer CSS

import data from "./data";
import SingleQuestion from "./SingleQuestion";
import Footer from "./Footer"; // Import the Footer component

function App() {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Frequently Asked Questions About QREACTIVE</h1>
          <p>Below we have collected answers to questions that you may have</p>
        </div>
      </section>

      {/* Questions Section */}
      <div className="container">
        <h3>Question you may have when using our web</h3>
        <section>
          {question.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
