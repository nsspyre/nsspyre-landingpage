import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Public";
import VerifiedUser from "@material-ui/icons/Waves";
import Fingerprint from "@material-ui/icons/Whatshot";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Essences</h2>
          <h5 className={classes.description}>
            We are committed to every role that takes part in the project build.
            We do believe that our most prominent features are related to the world elements.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Earth"
              description="Your project needs protection and strong bases. Its important that your information is secure, we can provide shields for uncomming attakcs."
              icon={Chat}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Water"
              description="Your projects needs to have the support to take the best practices that helps self heal your inside logic."
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fire"
              description="Your projects needs to have strong performance to retrieve data per second at a competitive time to the user."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
