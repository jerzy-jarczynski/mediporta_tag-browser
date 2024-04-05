import { Typography } from '@mui/material';
import TagsTable from '../../features/TagsTable/TagsTable';
import CountInput from '../../features/CountInput/CountInput';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h3">Mediporta Tag Browser</Typography>
      <CountInput />
      <TagsTable />
    </div>
  );
};

export default HomePage;
