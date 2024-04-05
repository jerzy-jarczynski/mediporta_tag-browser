import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTagsCount,
  fetchTags,
  getTagsCount,
} from '../../../redux/tagsRedux';

const CountInput = () => {
  const dispatch = useDispatch();
  const currentCount = useSelector(getTagsCount);
  const [count, setCount] = useState(currentCount);
  const [showVideo, setShowVideo] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [modalWidth, setModalWidth] = useState(window.innerWidth);
  const [modalHeight, setModalHeight] = useState(window.innerHeight);

  useEffect(() => {
    setCount(currentCount);
  }, [currentCount]);

  useEffect(() => {
    const handleResize = () => {
      setModalWidth(window.innerWidth);
      setModalHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount)) {
      setCount(newCount);
      if (newCount > 100) {
        setShowVideo(true);
      }
    }
  };

  const handleSetCount = () => {
    dispatch(setTagsCount(count));
    dispatch(fetchTags());
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="center"
      p={{ xs: '10px 0', sm: '20px 0' }}
      maxWidth={{ xs: '100%', sm: '50%' }}
      margin="auto"
    >
      <TextField
        type="number"
        label="Count"
        variant="outlined"
        value={count}
        onChange={handleCountChange}
        sx={{ mb: { xs: '10px', sm: 0 }, width: '100%', mr: { sm: '10px' } }}
      />
      <Button
        variant="contained"
        onClick={handleSetCount}
        sx={{ height: '56px', width: '100%' }}
      >
        Set Count
      </Button>

      <Dialog
        open={showVideo}
        onClose={handleVideoClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            margin: 0,
            height: `calc(100vh - 50px)`,
            width: `calc(100vw - 50px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle>
          <iframe
            width={modalWidth}
            height={modalHeight}
            src="https://www.youtube.com/embed/22z31vdqnWI?si=9ELuqVXiirfzftRE&amp;controls=0&amp;autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogTitle>
      </Dialog>

      <Dialog open={showAlert} onClose={handleAlertClose}>
        <DialogTitle>
          <div>
            <h2>Oops!</h2>
            <p>
              Wprowadzenie wartości większej niż 100 może uszkodzić aplikację!!!
            </p>
          </div>
        </DialogTitle>
      </Dialog>
    </Box>
  );
};

export default CountInput;
