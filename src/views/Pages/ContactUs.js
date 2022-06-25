import { useEffect } from 'react';
import Navbar from "components/Navbar/Navbar.js";
import Footer from 'components/Footer/Footer';


function ContactUsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <div className='contactUsMain container'>
                <h1>Our Locations</h1>
                <div className='locationMain d-flex'>
                    <div className='col-md-12 mt-5 col-sm-12 d-flex'>
                        <div className='col-md-6 d-flex'>
                            <div 
                            // style={{ backgroundImage: `url('${require('../../assets/img/dubai.png')}')` }} 
                            className='imageDiv col-sm-4'>
                                <img src={require('../../assets/img/dubai.png')} width="100%" />
                            </div>
                            <div className='textDiv col-sm-7'>
                                <h3>Arda – UAE</h3>
                                <p>
                                    503, AL SHOALA BUILDING, PORT, SAEED, DEIRA, DUBAI, UAE
                                </p>
                                <hr />
                                <p>TEL: +97 14 223 3843</p>
                                <p>Email: <a href='mailto:arda-global@gmail.com'>arda-global@gmail.com</a></p>
                                <p>
                                    <a target="_blank" href="https://wa.me/971529333781">
                                        <img width={30} src={require('../../assets/img/WhatsApp.png')} /> +971 52 933 3781
                                    </a>
                                </p>
                                {/* <p>UAN: +92 336 822 0062</p>
                            <p>FAX: +92 336 822 0062</p> */}
                            </div>
                        </div>
                        <iframe className='col-md-4 iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4217073846035!2d55.329038614876765!3d25.25639568386862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdecdb79351%3A0x8e53af6de080b074!2sAl%20Shoala%20Building!5e0!3m2!1sen!2s!4v1650198789628!5m2!1sen!2s" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-sm-12'>
                        <hr className='hr' />
                    </div>
                    <div className='col-md-12 col-sm-12 d-flex'>
                        <div className='col-md-6 d-flex'>
                            <div 
                            // style={{ backgroundImage: `url('${require('../../assets/img/karachi.png')}')` }} 
                            className='imageDiv col-sm-4'>
                                <img src={require('../../assets/img/karachi.png')} width="100%" />
                            </div>
                            <div className='textDiv col-sm-7'>
                                <h3>Arda – Pakistan</h3>
                                <p>
                                    5th St, D.H.A Phase 6 Ittehad Commercial Area Phase 6 Defence Housing Authority, Karachi, Karachi City, Sindh 75500
                                </p>
                                <hr />
                                <p>TEL: +92 21 358 6133</p>
                                <p>Email: <a href='mailto:arda-global@gmail.com'>arda-global@gmail.com</a></p>
                                <p>
                                    <a target="_blank" href="https://wa.me/923462749449">
                                        <img width={30} src={require('../../assets/img/WhatsApp.png')} /> +923 46 274 9449
                                    </a>
                                </p>
                                {/* <p>UAN: +92 336 822 0062</p>
                            <p>FAX: +92 336 822 0062</p> */}
                            </div>
                        </div>
                        <iframe className='col-md-4 iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.453219539157!2d67.07548582919726!3d24.801860216411697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cdffd0b9dc221f2!2zMjTCsDQ4JzA2LjciTiA2N8KwMDQnMzMuNyJF!5e0!3m2!1sen!2s!4v1650275894878!5m2!1sen!2s" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {/* <div className='contactUsPage'>
                <div className='divOne container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8095169313656!2d67.07419681500168!3d24.80197528408147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79787c1af8a68a40!2zMjTCsDQ4JzA3LjEiTiA2N8KwMDQnMzUuMCJF!5e0!3m2!1sen!2s!4v1648807104172!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='divTwo'>
                    <div className='div'>
                        <div className='iconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.193" height="14.555" viewBox="0 0 18.193 14.555">
                                <path id="Icon_material-email" data-name="Icon material-email" d="M19.374,6H4.819a1.817,1.817,0,0,0-1.81,1.819L3,18.735a1.825,1.825,0,0,0,1.819,1.819H19.374a1.825,1.825,0,0,0,1.819-1.819V7.819A1.825,1.825,0,0,0,19.374,6Zm0,3.639L12.1,14.187,4.819,9.639V7.819L12.1,12.368l7.277-4.548Z" transform="translate(-3 -6)" fill="#feed06" />
                            </svg>
                        </div>
                        <div className='textDiv'>
                            <b>Email</b>
                            <span>omar.ibad@arda-global.com</span>
                        </div>
                    </div>
                    <div className='div'>
                        <div className='iconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.498" height="18.498" viewBox="0 0 18.498 18.498">
                                <path id="Path_278" data-name="Path 278" d="M17.014,12.142a10.5,10.5,0,0,1-3.3-.525,1.508,1.508,0,0,0-1.466.309l-2.08,1.57A11.494,11.494,0,0,1,5,8.329L6.525,6.3a1.5,1.5,0,0,0,.368-1.515,10.518,10.518,0,0,1-.527-3.3A1.486,1.486,0,0,0,4.881,0h-3.4A1.486,1.486,0,0,0,0,1.484,17.033,17.033,0,0,0,17.014,18.5,1.486,1.486,0,0,0,18.5,17.014V13.626A1.486,1.486,0,0,0,17.014,12.142Z" fill="#feed06" />
                            </svg>
                        </div>
                        <div className='textDiv'>
                            <b>Phone</b>
                            <span>+92 336 822 0062</span>
                        </div>
                    </div>
                    <div className='div'>
                        <div className='iconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <g id="Group_29" data-name="Group 29" transform="translate(-0.096 -0.422)">
                                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="9" cy="9" r="9" transform="translate(0.096 0.422)" fill="#feed06" />
                                    <path id="Path_280" data-name="Path 280" d="M12.682,10.538v-4.7a.841.841,0,1,0-1.682,0v5.045a.841.841,0,0,0,.246.594L13.769,14a.841.841,0,1,0,1.189-1.189Z" transform="translate(-2.592 -1.637)" fill="#592d8e" stroke="#592d8e" stroke-width="1" />
                                </g>
                            </svg>
                        </div>
                        <div className='textDiv'>
                            <b>Timings</b>
                            <span>Monday - Sunday 10:00 - 22:00</span>
                        </div>
                    </div>
                    <div className='div'>
                        <div className='iconDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 18 26">
                                <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M16.875,3.375c-4.969,0-9,3.744-9,8.356,0,6.5,9,17.644,9,17.644s9-11.144,9-17.644C25.875,7.119,21.844,3.375,16.875,3.375Zm0,11.931a2.931,2.931,0,1,1,2.931-2.931A2.931,2.931,0,0,1,16.875,15.306Z" transform="translate(-7.875 -3.375)" fill="#feed06" />
                            </svg>
                        </div>
                        <div className='textDiv'>
                            <b>Address</b>
                            <span>5th St, D.H.A Phase 6 Ittehad Commercial Area Phase 6 Defence Housing Authority, Karachi, Karachi City, Sindh 75500</span>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    );
}

export default ContactUsPage;