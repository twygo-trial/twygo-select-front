import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CourseForm from '../pages/CourseForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-course" element={<CourseForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;