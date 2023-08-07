import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar_container">
        <nav class="navbar navbar-expand-lg bg-colour fixed-top">
                <div class="container-fluid">
                        <ul class="nav justify-content-center ul_content">
                            <li class="icon ms-5">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="20pt" height="48pt" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#1A5D1A" stroke="none">
                                    <path d="M2205 5106 c-36 -15 -83 -68 -90 -99 -3 -12 -17 -74 -33 -137 l-28
                                    -115 -60 -18 c-230 -69 -383 -131 -537 -219 l-88 -50 -103 61 c-146 87 -176
                                    97 -229 81 -35 -10 -81 -51 -270 -238 -243 -242 -273 -282 -261 -346 3 -20 31
                                    -77 61 -128 95 -160 91 -136 35 -236 -88 -157 -162 -336 -207 -497 -13 -48
                                    -28 -91 -32 -95 -4 -4 -66 -21 -137 -38 -131 -31 -163 -46 -200 -96 -20 -27
                                    -21 -40 -21 -376 0 -338 1 -349 21 -377 36 -48 76 -67 208 -97 105 -24 129
                                    -33 136 -50 4 -12 28 -84 53 -161 47 -146 101 -275 114 -275 4 0 163 159 353
                                    353 l346 352 -14 125 c-52 493 179 979 594 1252 385 253 851 295 1281 117 249
                                    -104 485 -314 628 -559 188 -322 232 -730 119 -1091 -103 -331 -357 -630 -666
                                    -786 -226 -114 -515 -168 -765 -142 l-115 12 -351 -351 -351 -351 69 -32 c57
                                    -26 234 -87 365 -127 22 -7 28 -21 57 -142 34 -138 48 -168 97 -204 27 -20 40
                                    -21 376 -21 336 0 349 1 376 21 50 37 66 70 98 205 l31 134 60 18 c228 68 384
                                    131 538 219 l87 50 123 -71 c67 -38 135 -73 150 -77 62 -15 101 14 344 258
                                    301 303 294 281 162 504 l-61 103 50 88 c88 154 151 310 219 538 l18 60 134
                                    32 c137 32 168 47 205 97 20 27 21 40 21 376 0 336 -1 349 -21 376 -37 50 -68
                                    65 -205 97 l-134 32 -18 60 c-68 228 -131 384 -219 538 l-50 88 61 103 c132
                                    223 139 201 -162 504 -243 244 -282 273 -344 258 -15 -4 -83 -39 -150 -77
                                    l-123 -71 -87 50 c-154 88 -310 151 -538 219 l-60 18 -31 134 c-32 135 -48
                                    168 -98 205 -26 20 -42 21 -364 23 -265 2 -344 0 -367 -11z"/>
                                    <path d="M2435 3603 c-641 -82 -1060 -712 -883 -1327 l20 -69 -749 -751 c-700
                                    -701 -751 -755 -777 -814 -79 -181 -45 -374 88 -508 134 -133 327 -167 508
                                    -88 59 26 113 77 814 777 l752 749 48 -15 c112 -35 162 -42 309 -42 131 1 164
                                    4 260 29 237 60 421 178 558 359 157 205 237 459 223 709 -11 212 -49 304
                                    -136 326 -79 20 -97 8 -320 -213 -113 -111 -218 -209 -235 -217 -83 -43 -196
                                    -43 -278 -2 -150 76 -207 276 -120 418 14 23 112 129 218 236 210 213 223 231
                                    203 310 -14 56 -62 95 -133 110 -133 28 -269 36 -370 23z"/>
                                    </g>
                                </svg>
                            </li>
                            <span className='brand_text fw-bold fs-5 ms-2'>relyNrelax</span>
                        </ul>
                        <div className="tabs_container d-flex justify-content-center">
                            <ul className="nav d-flex justify-content-center">
                                <li className="link_tabs nav-item">
                                    <span className="me-4 fs-5">Services</span>
                                </li>
                                <li className="link_tabs nav-item">
                                    <span className="me-4 fs-5">About Us</span>
                                </li>
                                <li className="link_tabs nav-item me-4">
                                    <span className="me-4 fs-5">Blogs</span>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center">
                            <ul className="nav d-flex justify-content-center">
                                <li className="link_tabs nav-item mt-2">
                                    <span className="fs-5">Login</span>
                                </li>
                                <li className="link_tabs nav-item">
                                    <button type="button" class="btn btn-dark btn-lg">Sign Up Free</button>
                                </li>
                            </ul>
                        </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar