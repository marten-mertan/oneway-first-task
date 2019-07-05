import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="table">
                <div className="table-cell">
                    <div className="logo">
                        <a href="index.html">Сергей</a>
                    </div>

                    <div className="main-menu">
                        <nav>
                            <ul className="menu-list">
                                <li className="active">
                                    <a href="/">Обо мне</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/">Портфолио</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="/">Котики</a>
                                        </li>
                                        <li>
                                            <a href="/">Пёсы</a>
                                        </li>
                                        <li>
                                            <a href="/">Рыбки</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">Верстка</a>
                                </li>
                                <li>
                                    <a href="/">Дизайн</a>
                                </li>
                                <li>
                                    <a href="/">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="socials">

                        <a className="i-vk" href="/" title="VK">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                        <a className="i-instagram" href="/" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="i-twitter" href="/" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="i-dribble" href="/" title="Dribbble">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </div>

                    <div className="copyright">
                        <p>
                            Сергей @ Тестовое задание
                        </p>
                    </div>

                </div>
            </div>
        </header>
    )
}


export default Header;