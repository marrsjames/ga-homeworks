import React from "react";

const Menus = () => {
  return (
    <section className="section" id="menus">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 content">
            <h2 className="title">Menu</h2>
            <p>
              We start early, with a breakfast menu including juices, pastries,
              pancakes, all kinds of eggs and freshly-roasted coffee. At
              11.30am, we switch to our all-day menu.
            </p>
            <p>On weekends we serve brunch until 4pm.</p>
            <a>Breakfast</a>
            <a>Brunch</a>
            <a>All Day</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
