import React from 'react';

function HomePage() {
return (
<div>
<body>

<main>
  <div id="index-banner" className="parallax-container">
    <div className="section" id="main">
      <div className="container">
        <br/>
        {/* {!-- <h1 id="forage" className="header center green-text text-lighten-2">Forage</h1> --} */}
        <div className="row center">
          <img id="main-logo" src="./images/Orgtrans.png" alt="Forage Logo"/>
          <h4 className="header col s12 light black-text">A Social Meal Planning Ecosystem</h4>
        </div>

        <br/>

      </div>
    </div>
    <div className="parallax img-responsive"><img src="./images/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg"
        alt="Unsplashed background img 1"/></div>
  </div>

  <div className="container lime lighten-5">
    <div className="section">

      {/* Icon Section */}
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center green-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center mini-titles">Quickly build Meal-plans</h5>

            <p className="light">Utilize our state of the art web application to search for specific foods or meals in a
              flash. Build your own complete meal plans in minutes!</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center green-text"><i className="material-icons">group</i></h2>
            <h5 className="center mini-titles">Socialize with other Foragers</h5>

            <p className="light">Everything is better with others! Make use of our built in social network to share your
              meal plans with friends and see how they are using Forage to enhance their lives!</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center green-text"><i className="material-icons">settings</i></h2>
            <h5 className="center mini-titles">Estimate your calorie Needs</h5>

            <p className="light">Knowing where to start with a diet or meal plan is hard. Dont worry, we make it easy.
              Enter
              in your basic information for a quick estimate of your calorie needs based on your goal. You can use
              your
              calorie estimate to help guide the formation of your meal plans. </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light black-text">Ready to give it a try Forager? Sign up.. It's Free!</h5>
        </div>
        <div className="row center">
          <a href="/signup" id="download-button" className="btn-large waves-effect waves-light green lighten-1">Sign
            Up</a>
        </div>
      </div>
    </div>
    <div className="parallax img-responsive"><img src="./images/jakub-kapusnak-sDbj1dFlFPU-part2.jpg"
        alt="Unsplashed background img 2"/></div>
  </div>

  <div className="container">
    <div className="section">

      <div className="row lime lighten-5">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p className="center-align light">You can reach us by emailing: support@forage.com</p>
        </div>
      </div>

    </div>
  </div>
</main>

</body>
</div>
)
}

export default HomePage;