import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTagsCount, fetchTags } from '../../../redux/tagsRedux';

const CountInput = () => {
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
  };

  const handleSetCount = () => {
    dispatch(setTagsCount(count));
    dispatch(fetchTags());
  };

  return (
    <div>
      <TextField
        type="number"
        label="Count"
        variant="outlined"
        value={count}
        onChange={handleCountChange}
      />
      <Button
        variant="contained"
        onClick={handleSetCount}
        sx={{ height: '56px', marginLeft: '10px' }}
      >
        {' '}
        Set Count
      </Button>
    </div>
  );
};

export default CountInput;
