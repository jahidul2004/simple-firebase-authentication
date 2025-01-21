import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div>
            {/* Header */}
            <NavBar></NavBar>
            {/* Header end */}

            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            <Footer></Footer>
            {/*  Footer end */}
        </div>
    );
};

export default Root;