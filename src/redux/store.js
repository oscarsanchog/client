import { configureStore } from '@reduxjs/toolkit';
import projects from './slices/projectsSlice';
import technologies from './slices/technologiesSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    projects,
    technologies,
  },
  applyMiddleware: [thunk],
});

export default store;

