import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layouts } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
   <Layouts title= 'Home - Open task'>
    <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layouts>
  )
}

export default HomePage
