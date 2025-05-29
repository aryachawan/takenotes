import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootTemplate from './routes/RootTemplate.jsx';
import Home, { loader as NotesLoader } from './routes/Home.jsx';
import NewNote, { action as NewNoteAction } from './routes/NewNote.jsx';
import NoteDetails, { loader as SpecificNoteLoader } from './routes/NoteDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children:
      [
        {
          path: '/',
          element: <Home />,
          loader: NotesLoader,
          children:
            [
              {
                path: '/newnote',
                element: <NewNote />,
                action: NewNoteAction
              },
              {
                path: '/:id',
                element: <NoteDetails />,
                loader: SpecificNoteLoader
              }
            ]
        }
      ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
