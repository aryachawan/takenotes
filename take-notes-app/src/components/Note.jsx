import { Link } from 'react-router-dom'
function Note({id,title, genre, body, date, time }) {
    return (
        <Link to={id} >
            <div className="bg-zinc-900 flex flex-col gap-4 w-80 rounded-md border-2 border-white p-4 m-2 shadow-md h-fit">
                <div className="bg-zinc-800 w-full text-center py-2 px-4 rounded text-2xl">
                    <p className="truncate">{title}</p>
                </div>
                <p className="text-md italic text-gray-300">{genre}</p>
                <p className="text-md line-clamp-2 overflow-hidden text-ellipsis">{body}</p>
                <div className="mt-auto text-sm text-right">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    );
}
export default Note;
