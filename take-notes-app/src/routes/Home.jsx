import Note from '../components/Note';
import { Outlet, useLoaderData } from 'react-router-dom';

function Home() {
  const notes = useLoaderData();

  return (
    <>
      <Outlet />
      <div className="w-full h-[70vh] flex flex-wrap gap-4 p-4 overflow-y-auto justify-center ring-2 ring-blue-500 rounded-lg">
        {notes.length > 0 && notes.map((note) => (
          <Note key={note.id}  id={note.id} title={note.title} genre={note.genre} body={note.body} date={note.date} time={note.time} />
        ))}
        {notes.length === 0 && (
          <div className='px-6 py-4 text-2xl flex flex-col items-center justify-center bg'>
            <p>There are no notes yet</p>
            <p>start adding some</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

export async function loader() {
  const res = await fetch("http://localhost:8080/notes");
  const notesData = await res.json();
  return notesData.notes;
}
