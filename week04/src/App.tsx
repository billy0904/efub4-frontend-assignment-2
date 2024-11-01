import ChatRoomPage from './pages/ChatRoomPage';
import ChatRoomListPage from './pages/ChatRoomListPage';
import FriendListPage from './pages/FriendListPage';
import { Route, Routes } from 'react-router-dom';
import MyProfilePage from './pages/MyProfilePage';
import NotYetPage from './pages/NotYetPage';
import { UserProvider } from './contexts/UserContext';
import { UnreadProvider } from './contexts/UnreadContext';

function App() {
  return (
    <UserProvider>
      <UnreadProvider>
        <div className='flex items-center justify-center h-screen bg-Gray/2'>
          <div className='w-width h-height'>
            <Routes>
              <Route path='/' element={<FriendListPage />}></Route>
              <Route path='/chat/:chatKey' element={<ChatRoomPage />}></Route>
              <Route path='/chatlist' element={<ChatRoomListPage />}></Route>

              <Route path='/friends' element={<FriendListPage />}></Route>
              <Route path='/my' element={<MyProfilePage />}></Route>
              <Route path='/openedChat' element={<NotYetPage />}></Route>
              <Route path='/shopping' element={<NotYetPage />}></Route>
              <Route path='/more' element={<NotYetPage />}></Route>
            </Routes>
          </div>
        </div>
      </UnreadProvider>
    </UserProvider>
  );
}

export default App;