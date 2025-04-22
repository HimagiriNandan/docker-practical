import AvailableMocktests from '../Components/AvailableMockTest';
import Sidebar from '../Components/Sidebar';
import '../Styles/Mocktests.css'


const Mocktests = () => {
    return (
        <div className="dashboard">
        <Sidebar/>
        <div className="mocktest-cont">
            <AvailableMocktests/>
        </div>
        </div>
    );
    }

export default Mocktests;