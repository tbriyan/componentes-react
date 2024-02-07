import Head from 'next/head'
import { Grid, Stack, Typography, Button, Card, CardContent, Box, CardActions } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import { useRouter } from 'next/router';
export default function Home() {
  const {push} = useRouter()
  return (
    <>
      <Head>
        <title>Pirate dev components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack sx={{ width: '100%', py: 3 }} direction='row' justifyContent='center'><Typography variant="h2" color="initial" >Mis componentes personales</Typography></Stack>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Stack sx={{ backgroundColor: 'red' }}>
            <Button variant="contained" color="primary" endIcon={<AppsIcon />}>
              Componentes
            </Button>
          </Stack>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card>
              <CardActions sx={{justifyContent: 'center', backgroundColor: 'black', color: 'white'}}>
                  <Typography>
                    Login
                  </Typography>
              </CardActions>
              <CardContent>
                <Box sx={{backgroundColor: 'grey', height: 200}}>
                </Box>
                <Box textAlign='center' mt={2}>
                  <Button variant='outlined' onClick={()=>{push('/dashboard')}}>
                    Ver
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Card>
              asdf
            </Card>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Card>
              asdf
            </Card>
          </Grid>
        </Grid>
      </main>
    </>
  )
}
