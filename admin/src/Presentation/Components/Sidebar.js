import { useState } from 'react';
import '../Styles/Sidebar.css';

const Sidebar = () => {
    // State to toggle visibility of mock tests sub-links
    const [showMockTests, setShowMockTests] = useState(false);

    // Toggle function to show/hide sub-links for mock tests
    const toggleMockTests = () => {
        setShowMockTests(prevState => !prevState);
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>Khojo College</h1>
            </div>
            <div className="sidebar-links">
                <a href="/dashboard" className="sidebar-link">Dashboard</a>
                <div className="sidebar-link" onClick={toggleMockTests}>
                    <span>Mock Tests</span>
                    <i className={`arrow ${showMockTests ? 'down' : 'right'}`}></i>
                </div>

                {/* Sub-links for Mock Tests */}
                {showMockTests && (
                    <div className="sidebar-sub-links">
                        <a href="/mockTests/viewmocks" className="sidebar-sub-link">View Mocks </a>
                        <a href="/mockTests/addmocks" className="sidebar-sub-link">Add MockTest</a>
                    </div>
                )}

                <a href="/materials" className="sidebar-link">Materials</a>
                <a href="/help" className="sidebar-link">Help</a>
            </div>
        </div>
    );
};

export default Sidebar;
