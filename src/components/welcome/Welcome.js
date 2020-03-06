import React from "react";
import "./Welcome.css";

const Welcome = () => (
  <section key="1" className="welcome">
    <img src="/logo.png" className="logo" alt="a"/>
    <h1>e2y Catshop</h1>
    <p>This application will test your ability to write a React application. We
        do not expect you to complete all of the tasks, just as many as you can.
        We are more interested in the processes you use.</p>
    <p>
        To begin the application, run <code>npm start</code>. You will see a
        welcome page at <code>http://localhost:3000</code> and the API is running at
        port 3001. You have unlimited time to replace this page with as much as the following
        functionality as you can:
    </p>
    <ul>
      <li>
        A product grid consisting of the product information
        <pre>GET http://localhost:3001/products</pre>
      </li>
      <li>
        Adding product IDs to a cart object
        <pre>POST http://localhost:3001/cart</pre>
      </li>
      <li>
        Displaying the contents of the cart in a mini-cart format
        <pre>GET http://localhost:3001/cart</pre>
      </li>
    </ul>
    <p>Things we like to see in your result:</p>
    <ul>
        <li>Responsive design</li>
        <li>Correct use of Redux</li>
        <li>Test coverage</li>
    </ul>
    <p>
      You should create your code on a new branch and open a pull request when
      you are done. The design of the application is up to you, as are any
      additional libraries you deem necessary, but you should be using React and Redux.
    </p>
    <p>Good luck!!</p>
  </section>
);

export default Welcome;
