import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { Button } from '@mui/material';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h1">EasyRent</Typography>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography>
        <Box sx={{ mt: 5, display: "flex",  flexWrap: "wrap",gap: 2}}>
          <Button variant="contained" color="primary">primary</Button>
          <Button variant="contained" color="secondary">secondary</Button>
          <Button variant="contained" color="error">error</Button>
          <Button variant="contained" color="info">info</Button>
          <Button variant="contained" color="inherit">inherit</Button>
          <Button variant="contained" color="success">success</Button>
          <Button variant="contained" color="warning">warning</Button>
        </Box>
      </Box>
    </Container>
  );
}