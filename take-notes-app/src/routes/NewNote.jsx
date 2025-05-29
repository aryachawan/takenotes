import { Form, useNavigate, redirect} from 'react-router-dom';

function NewNote() {
    const navigate = useNavigate();
    function closeNoteModal() {
        navigate('..'); 
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                <div className='border-2 border-white w-1/2 rounded-xl bg-zinc-900 shadow-lg'>
                    <Form method="post" className="flex flex-col gap-6 p-6">
                        <p className="text-2xl text-white text-center">Add New Note</p>
                        <input type="text" name="title" placeholder="Enter Title" className="p-2 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" name="genre" placeholder="Enter Genre" className="p-2 rounded-md bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea name="body" placeholder="Enter Note" className="p-2 rounded-md bg-zinc-800 text-white border border-zinc-600 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <div className="w-full flex items-center justify-between">
                            <button type="button" className='p-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors duration-200' onClick={closeNoteModal}>Cancel</button>
                            <button className='p-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200'>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default NewNote;

export async function action({request}){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    await fetch("http://localhost:8080/notes",{
        method:'POST',
        body:JSON.stringify(noteData),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return redirect('/');
}