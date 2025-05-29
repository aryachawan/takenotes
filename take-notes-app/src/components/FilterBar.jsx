import { Link } from 'react-router-dom';

function FilterBar({ genre = [] }) {
    return (
        <>
            {genre.map((item, index) => (
                <Link key={index} to={`/notes/${item}`}>
                    {item}
                </Link>
            ))}
        </>
    );
}

export default FilterBar;