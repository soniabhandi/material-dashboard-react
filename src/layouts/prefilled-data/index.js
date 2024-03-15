import { useState } from "react";
import * as React from "react";
import MDButton from "components/MDButton";
import TextField from "@mui/material/TextField";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Button from "@mui/material/Button";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function PrefilledData() {
  return (
    <DashboardLayout>
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <Grid item xs={12} lg={8}>
            <MDButton variant="gradient" color="info">
              Submit
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default PrefilledData;
