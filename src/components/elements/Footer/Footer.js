import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="row">
                    <div className="about">
                        <h2 className="title">Обо мне</h2>
                        <p>
                            Меня зовут Сергей, и я очень люблю котиков. Однажды я нашел котика на улице и привел его к себе домой. Он случайно запрыгнул на мой рабочий стол и сверстал эту страничку.
                        </p>
                    </div>
                    <div className="contacts">
                        <h2 className="title">Напишите мне</h2>
                        <ul>
                            <li>
                                Телефон: +123 456 789
                            </li>
                            <li>
                                Email: cute.kitties@email.brbr
                            </li>
                            <li>
                                Адрес: ул. Ленина, город N, Россия
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}


export default Footer;