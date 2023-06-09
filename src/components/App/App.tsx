import React from "react";
import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function App() {
    return (
        <div className="app">
            <Header />

            <div>
                <Sidebar />
                <AppRoutes />
            </div>

            <Footer />
        </div>
    );
}

export default App;
