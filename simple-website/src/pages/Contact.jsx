import React, { Component } from "react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact" subtitle="the Contact subtitle" />
        <div className="container">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto reiciendis numquam. Voluptate quos consequatur nobis
            veritatis exercitationem vel magnam excepturi repudiandae dicta.
            Sint molestiae similique exercitationem ipsa, impedit sapiente
            doloribus quasi sequi, libero a illo consequuntur voluptate atque
            corporis facere vero ut nemo deserunt rem! Tempora quia sit earum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            reprehenderit laudantium commodi ut a praesentium fugiat quisquam
            hic iste voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            reprehenderit laudantium commodi ut a praesentium fugiat quisquam
            hic iste voluptates!
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
