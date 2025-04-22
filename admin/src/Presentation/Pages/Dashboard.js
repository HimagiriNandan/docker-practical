import Sidebar from '../Components/Sidebar';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h2 className="dashboard-heading">Dashboard</h2>
                <div className='dashboard-content-container'>
                    <div className='dashboard-card-container'>
                        <h2>Number of Candidates</h2>
                        <p>100</p>
                    </div>
                    <div className='dashboard-card-container'>
                        <h2>Candidates Registered this Month:</h2>
                        <p>26</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard