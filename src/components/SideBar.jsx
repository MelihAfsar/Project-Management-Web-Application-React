import React, { useEffect, useState } from 'react'
import logo from '../static/TeknolojiF.png';

const sideBarInfo = [
    { link: "/", i_className: "bx bx-grid-alt", categoryName :"Planlama"},
    { link: "/", i_className: "bx bx-briefcase",     categoryName :"Çalışma Günleri"},
    { link: "/", i_className: "bx bx-envelope",     categoryName :"İletişim"},
    { link: "/", i_className: "bx bx-note",categoryName :"Notlarım"},
    { link: "/", i_className: "bx bx-folder",   categoryName :"Derslik Bilgileri"},
    { link: "/", i_className: "bx bx-calendar", categoryName :"Akademik Takvim"},
    { link: "/", i_className: "bx bx-data",    categoryName :"BYS Sistemi"},
    { link: "/", i_className: "bx bx-cog",      categoryName :"Ayarlar"},
];

function SideBar() {
    const [sideBar, setSideBar] = useState(true);
    useEffect(() => {
        console.log("maunt");
    }, [sideBar])

    return (
        <div>
            <div className={sideBar ? "sidebar" : "sidebar open"}>
                <div className="logo-details">
                    {
                        !sideBar &&
                        <img src={logo} className="logo_name" alt='' />
                    }
                    <i onClick={() => {
                        setSideBar(!sideBar);
                    }} className={sideBar ? "bx bx-menu" : "bx bx-menu-alt-right "} id="btn"></i>
                </div>
                <ul className="nav-list">
                    {
                        sideBarInfo.map((info, item) => {
                            return (
                                <div key={item}>
                                    <li >
                                        <a href={info.link}>
                                            <i className={info.i_className}></i>
                                            <span className="links_name">{info.categoryName}</span>
                                        </a>
                                        <span className="tooltip">{info.categoryName}</span>
                                    </li>
                                </div>
                            );
                        })
                    }
                    <li className="profile">
                        <div className="profile-details">
                            <div className="name_job">
                                <div className="name">Melih Afşar</div>
                                <div className="job">Web Developer</div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out"></i>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default SideBar