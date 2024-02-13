import React, { useState } from 'react'

import "./category.css"
import Send from './POPup/Send'

function Catogary() {
    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {

        setPayment(true);

    }



    return (
        <>
            <div className="main">
                <div className="imgc">
                    <img className='imghead' src='https://s3-alpha-sig.figma.com/img/c9d6/33d1/c15e5e78a1c3e43b8d1289ad583a5fd4?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekRU8sGiEglmifzKQ32aotspCsyCZQodEIUn4msFp-CTfsQcB7jdOxYXlPi3kNTTC0BLKlwYgWRKCLHc7gqoghB5~r2vWpWFmSxLjLnC5xk-w3w6IZ9J0eYn24Upkp8mo71e4x1m5WriDO5OnPgNApvnAxN1hU3~TnbLPA6-XbMqrQtDCU-aR0-J1KsM4CIEhb36H~Fr5wCIvxdjJgds5EY5rNTjKeoXI-T0iJPX-CxFtpIYfwgZuh1uC6zKOoVRmXh00F3nssL~UyeeckrdezaQOnN7Gg75S2HQqs1wYd~NgyY2Rf4ZK2FOogbcffcegOT4CeEaRPk9roNjhNezhQ__' alt="Description" />
                </div>
                <div className="bannert">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>

                <div className="onimage">
                    <button type='submit' className='btn01'><p>Location <p className='mm01'>Ex Noida</p></p> </button>
                    <button type='submit' className='btn1'>Services<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn1'>Budget<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn2'><span class="material-symbols-outlined">
                        search
                    </span>Search</button>

                </div>


                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit'  onClick={Mymodel}className='numbtn0'>Send Enquiry</button>
                                    {payment && <Send band={band} />}  
                                </div>




                            </div>

                        </div>




                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>


                </div>


                {/* --------------------------second double------------------------------------------------------------------------ */}

                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit'onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>
                    {/* </div> */}


                </div>


            </div>


        </>
    )
}

export default Catogary