import { useLoaderData, useNavigate } from 'react-router-dom';
function NoteDetails() {
    const note = useLoaderData();
    const navigate = useNavigate();
    function closeNoteDetails() {
        navigate('..');
    }
    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                <div className='border-2 border-white w-1/2 rounded-xl bg-zinc-900 shadow-lg p-4 flex flex-col gap-4'>
                    <div className='w-full bg-zinc-800 flex items-center justify-between px-6 py-4 rounded-lg'>
                        <p className='text-3xl'>{note.title}</p>
                        <button className='px-4 py-1 bg-red-500 rounded-lg flex items-center justify-center text-2xl' onClick={closeNoteDetails}>x</button>
                    </div>
                    <p className='px-6 text-xl italic'>{note.genre}</p>
                    <div className='px-6 py-4 text-2xl bg-zinc-800 rounded-lg'>
                        <p className='text-zinc-500 italic text-md'>body</p>
                        <p>{note.body}</p>
                    </div>
                    <div className='w-full flex items-center justify-end px-6 py-4'>
                        <p className='pr-4'>{note.date}</p>
                        <p>{note.time}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoteDetails;

export async function loader({ params }) {
    const res = await fetch("http://localhost:8080/notes/" + params.id);
    const noteData = await res.json();
    console.log(noteData);
    return noteData.note;
}