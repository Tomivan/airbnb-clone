import React from "react";
import Filters from "../components/filters/filters.component";
import Footer from "../components/footer/footer.component";
import Main from "../components/main/main.component";
import Topbar from "../components/topbar/topbar.component";

const Pages = () => {
    return(
        <div>
            <Topbar />
            <Filters />
            <Main />
            <Footer />
        </div>
    )
}

export default Pages;