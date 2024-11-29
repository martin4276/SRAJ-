import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Chat = React.lazy(() => import('../pages/Chat/Chat'));
const Library = React.lazy(() => import('../pages/Library/Library'));
const Tools = React.lazy(() => import('../pages/Tools/Tools'));
const Resources = React.lazy(() => import('../pages/Resources/Resources'));
const Profile = React.lazy(() => import('../pages/Profile/Profile'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/library" element={<Library />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;