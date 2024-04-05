import { Typography } from '@mui/material';
import TagsTable from '../../features/TagsTable/TagsTable';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h3">Mediporta Tag Browser</Typography>
      <TagsTable />
    </div>
  );
};

export default HomePage;
