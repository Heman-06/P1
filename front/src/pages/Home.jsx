import api from '../components/Api'
import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setData(api);
    }, []);

    console.log(api);

    const filteredData = data.filter(item =>
        (item.title && item.title.toLowerCase().includes(search.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className='h1'>
            <input
                type="text"
                placeholder="Search Here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="info-card-list">
                {filteredData.map(item => (
                    <div key={item.id} className="info-card">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Home