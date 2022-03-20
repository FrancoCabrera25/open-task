import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';
import { EntryStatus } from '../interface';

const HomePage: NextPage = () => {
  return (
   <Layout title= 'Home - OpenTask'>
   <Grid container spacing={ 2 }>
     <Grid item xs={ 12 } sm={ 4 }>
      <Card sx={{ height: 'calc(100vh - 100px )' }}>
        <CardHeader title='Pendientes' />
          <NewEntry />
          <EntryList status={ EntryStatus.PENDING } />
      </Card>
     </Grid>
     <Grid item xs={ 12 } sm={ 4 }>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title='En Progreso' />
        <EntryList status= { EntryStatus.INPROGRES} />
      </Card>
     </Grid>
     <Grid item xs={ 12 } sm={ 4 }>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title='Completadas' />
        <EntryList status= { EntryStatus.FINISHED} />
      </Card>
     </Grid>
   </Grid>
    </Layout>
  )
}

export default HomePage
