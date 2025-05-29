import { Outlet,useNavigate } from 'react-router-dom'
function RootTemplate() {
    const navigate = useNavigate();
    
    function toNewNote(){
        navigate('/newnote')
    }

    return (
        <>
        <div className="w-full h-[100vh] bg-black text-xl text-white p-4 font-roboto flex flex-col items-center justify-between">
            <div className="w-full bg-zinc-800 flex items-center justify-between rounded-md px-8 py-4">
                <p className="text-3xl">TakeNotes</p>
                <button className="bg-white text-black px-4 py-1 rounded-md hover:bg-gray-300" onClick={toNewNote}>add note</button>
            </div>
            <Outlet/>
            <div className="w-full flex items-center justify-center">
                <div className='w-1/2 bg-zinc-800 flex items-center justify-center rounded-md px-6 py-2'>
                    <p className='text-base'>Keep Taking Notes They Are Usefull !! ~ Sir Pappu Pager</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default RootTemplate;
