import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaSearchPlus } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa'
import { createContext } from 'react';

const FullHomePage = () => {

    const [data, setdata] = useState([]);
    const [catdata, setcatdata] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                console.log(res.data.products);
                setcatdata(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function search_header(search) {
        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then((res) => {
                console.log(res.data.products);
                setcatdata(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function header_home(submenu) 
    {
        axios.get(`https://dummyjson.com/products/category/${submenu.item}`)
            .then((res) => {
                console.log(res.data);
                setcatdata(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            {/* Header Back - Start */}
            <div className="p-md-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-5 d-flex justify-content-center align-items-center">
                            <Link to='/' className='logo d-flex text-decoration-none text-dark fs-4'>
                                <div className="dummy">dummy</div>
                                <div className="JSON fw-bolder">JSON</div>
                            </Link>
                        </div>
                        <div className="py-1 col-md-6 col-7 d-flex justify-content-center align-items-center">
                            <div className="col-9 d-flex justify-content-end position-relative">
                                <input type="text" name="SearchBar" id="searchbar" placeholder='Search Here...' className='ps-3 pe-5 py-1 w-100 rounded-5 fs-5 text-truncate' autoComplete='off'></input>
                                <div className="searchbtn border border-2 border-dark d-flex align-items-center justify-content-center rounded-start rounded-5 px-3 py-2 text-center fs-5 position-absolute top-0 right-0 h-100" style={{ width: 'fit-content' }} title='Search'>
                                    <FaSearch className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex d-sm-flex-direction-center justify-content-center align-items-center">
                            <div className="mainmenu d-flex justify-content-end flex-sm-row flex-column">
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link to='/' className='ahover position-relative d-block px-4 py-2 text-dark fw-bold'>Home</Link>
                                        <div className="submenu shadow-lg" style={{ backgroundColor: "#F0F0F0" }}>
                                            {
                                                data.map((item, i) => {
                                                    return (
                                                        <ul key={i}>
                                                            <li>
                                                                {/* to={`/Catagory/${item}`} */}
                                                                <Link className='shover position-relative d-block px-5 py-1 text-dark fw-bold text-capitalize text-nowrap'>{item}</Link>
                                                            </li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                </ul>
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link className='ahover position-relative d-block px-4 py-2 text-dark'>Docs</Link>
                                    </li>
                                </ul>
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link className='ahover position-relative d-block px-4 py-2 text-dark'>GitHub</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Back - End */}

            {/* Header Fixed - Start */}
            <div className="fixed-header">
                <div className="p-md-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 col-5 d-flex justify-content-center align-items-center">
                                <Link to='/' className='logo d-flex text-decoration-none text-dark fs-4'>
                                    <div className="dummy">dummy</div>
                                    <div className="JSON fw-bolder">JSON</div>
                                </Link>
                            </div>
                            <div className="py-1 col-md-6 col-7 d-flex justify-content-center align-items-center">
                                <div className="col-9 d-flex justify-content-end position-relative">
                                    <input type="text" name="SearchBar" id="searchbar" placeholder='Search Here...' className='ps-3 pe-5 py-1 w-100 rounded-5 fs-5 text-truncate' autoComplete='off' onKeyUp={(e) => { search_header(e.target.value) }}></input>
                                    <div className="searchbtn border border-2 border-dark d-flex align-items-center justify-content-center rounded-start rounded-5 px-3 py-2 text-center fs-5 position-absolute top-0 right-0 h-100" style={{ width: 'fit-content' }} title='Search'>
                                        <FaSearch className='text-white' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 d-flex d-sm-flex-direction-center justify-content-center align-items-center">
                                <div className="mainmenu d-flex justify-content-end flex-sm-row flex-column">
                                    <ul className=''>
                                        <li className='position-relative'>
                                            <Link to='/' className='ahover position-relative d-block px-4 py-2 text-dark fw-bold'>Home</Link>
                                            <div className="submenu shadow-lg" style={{ backgroundColor: "#F0F0F0" }}>
                                                {
                                                    data.map((item, i) => {
                                                        return (
                                                            <ul key={i}>
                                                                <li>
                                                                    {/* to={`/Catagory/${item}`} */}
                                                                    <Link className='shover position-relative d-block px-5 py-1 text-dark fw-bold text-capitalize text-nowrap' onClick={(e)=>{header_home({item})}}>{item}</Link>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className=''>
                                        <li className='position-relative'>
                                            <Link className='ahover position-relative d-block px-4 py-2 text-dark'>Docs</Link>
                                        </li>
                                    </ul>
                                    <ul className=''>
                                        <li className='position-relative'>
                                            <Link className='ahover position-relative d-block px-4 py-2 text-dark'>GitHub</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Fixed - End */}

            {/* Catagory Part - Start */}
            <div className="text-bg-dark p-md-5 p-sm-4 p-1">
                <div className="container">
                    <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center text-break">
                        {
                            (catdata != '')
                                ? catdata && catdata.map((item, z) => {
                                    const b = [], c = [], h = [];
                                    var fu = 0, ha = 0, no = 0, norepat = 1;
                                    for (var i = 0; i < 6; i++) {

                                        if (item.rating <= i) {
                                            c[no++] = i;
                                        }
                                        else if ((item.rating * 10) % 10 != 0 && norepat == 1 && item.rating <= 6) {
                                            h[ha++] = i;
                                            norepat++;
                                        }
                                        else {
                                            b[fu++] = i;
                                        }
                                    }
                                    return (
                                        <div className="col-xxl-4 col-lg-6 col-md-12" key={z}>
                                            <div className="d-flex m-2 rounded-3 overflow-hidden flex-wrap border border-3 border-warning" style={{ backgroundColor: '#3C3E44' }}>
                                                <div className="col-sm-6 col-12">
                                                    <Link to={`/Product/${item.id}`}>
                                                        <img src={item.images[0]} alt="" className='borderremove border border-top-0 border-start-0 border-5 border-warning' style={{ width: '100%', height: '100%' }} title={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="col-sm-6 col-12 px-3">
                                                    <div className="top py-2">
                                                        <a href="#" className='text-capitalize fw-bolder fs-3 location_hover'>
                                                            <div>{item.category}</div>
                                                        </a>
                                                        <div className="fw-bold text-capitalize">
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    title :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.title}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    brand :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.brand}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    category :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.category}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    stock :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.stock}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder d-flex align-items-center" style={{ color: '#9E9E9E' }}>
                                                                    discountPer :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                                    <div>{item.discountPercentage} <span className="fs-4">%</span></div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="row text-capitalize">
                                                            <div className="col-lg-6 col-md-12 fw-bolder d-flex align-items-center" style={{ color: '#9E9E9E' }}>
                                                                price :
                                                            </div>
                                                            <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                                <div>{item.price} <span className="fs-4">₹</span></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="fw-bolder text-capitalize" style={{ color: '#9E9E9E' }}>description :</div>
                                                        <div className='text-capitalize'>{item.description}</div>
                                                    </div>
                                                    <div className="row text-capitalize py-2">
                                                        <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                            rate :
                                                        </div>
                                                        <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                            <div>
                                                                {
                                                                    b.map((star) => {
                                                                        return (
                                                                            <>
                                                                                <AiFillStar style={{ color: '#FF9816' }} />
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                {
                                                                    h.map((star) => {
                                                                        return (
                                                                            <>
                                                                                <FaStarHalfAlt style={{ color: '#FF9816' }} />
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                                {
                                                                    c.map((star) => {
                                                                        return (
                                                                            <>
                                                                                <AiOutlineStar style={{ color: '#FF9816' }} />
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : <>
                                    <div className="col-12 text-center">
                                        <h1>Sorry ! Data <u className='fw-bolder'></u>  Does Not Founded ...</h1>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            {/* Catagory Part - End */}



        </>
    )
}

export default FullHomePage;