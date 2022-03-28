import './index.css';
import Card from '../../components/card/index';
import data from '../../data/data'

function Home() {
    const filterData = data.filter((a) => a.rating === 'g')
    const dataArray = filterData.map((x) => {
        return (
            <Card
                key={x.id}
                title={x.title}
                image={x.url}
            />
        )
    });

    return (
        <div className="App">
            <form action="">
                <div>
                    <input></input>
                    <button className='form-button'>submit</button>
                </div>
                {dataArray}
            </form>
        </div>
    );
}

export default Home;
