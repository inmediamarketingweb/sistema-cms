import { Helmet } from "react-helmet-async";

import './Dashboard.css';

import Header from '../../Componentes/Header/Header';

import Left from '../../Componentes/Left/Left';
import Content from '../../Contents/Content';

function Dashboard(){
    return(
        <>
            <Helmet>
                <title>Dashboard | CMS</title>
            </Helmet>

            <Header/>

            <main className="dashboard-main">
                <Left/>

                <Content/>
            </main>
        </>
    )
}

export default Dashboard;
