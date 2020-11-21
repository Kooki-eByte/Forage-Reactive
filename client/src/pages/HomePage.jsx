import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import AppAppBar from '../views/AppAppBar';

// import React from 'react';
// import HomeNavBar from '../components/HomeNav';

// function HomePage() {
// return (
// <HomeNavBar/>
// )
// }

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

