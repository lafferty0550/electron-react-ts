import React from 'react';

import './about.less';

export const About = (() => (
    <div className="about">
        <div className="section">
            <div className="section__title">Некоторые факты обо мне</div>
            <div className='section__item'>
                1. Зовут Илья, являюсь студентом третьего курса технического университета очного отделения.
            </div>
            <div className='section__item'>
                2. Занимаюсь программированием (выходящим за рамки школьного паскаля) начиная с 10-го класса.
            </div>
            <div className='section__item'>
                3. Подрабатывал фрилансером в школьное время.
            </div>
            <div className='section__item'>
                4. Ответственный, не ищу оправданий.
            </div>
            <div className='section__item'>
                5. За мной не нужно постоянно переделывать. Все переделаю сам.
            </div>
            <div className='section__item'>
                6. Перфекционист, люблю углубляться в детали/внутренности фреймворков, языков и т.д.
            </div>
            <div className='section__item'>
                7. Упорная самоучка - front-end разработку, а также основы computer science освоил сидя в общежитии и
                читая книжки.
                Из того, что читал: алгоритмы - Кормен, архитектура ПК - Танненбаум, основы ОС - Танненбаум.
            </div>
            <div className='section__item'>
                9. Некоторое время программировал на С/С++, Rust. С/С++ - при обучении компьютерным наукам.
                Знания о поинтерах, generic-функциях, сегментах памяти (heap, stack), многопоточности, аллокаторах и
                проч. получил благодаря
                этим языкам.
            </div>
            <div className="section__item">
                10. На Rust писал простой бэк. Ну и с WASM ковырялся чуть-чуть.
            </div>
            <div className="section__item">
                11. О хобби: люблю читать про психологию, развивать soft-skills. Занимаюсь любительским спортом.
            </div>
            <div className="section__item">
                12. Главная ценность - перманентное развитие.
            </div>
        </div>
        <div className="section">
            <div className="section__title">Компетенция</div>
            <div className='section__item'>
                1. HTML, CSS, JS. Адаптивная верстка, flexbox, css-grid, less
            </div>
            <div className='section__item'>
                2. React (+ react hooks), redux, redux-thunk
            </div>
            <div className='section__item'>
                3. TypeScript
            </div>
            <div className='section__item'>
                4. Webpack, gulp, ESLint, JEST
            </div>
            <div className='section__item'>
                5. Nodejs, expressjs, mongoose, mongodb, JWT
            </div>
            <div className='section__item'>
                6. Английский язык на уровне чтения/переписки/прослушивания лекций.
            </div>
            <div className='section__item'>
                7. Linux
            </div>
            <div className='section__item'>
                8. Основы Computer Science (алгоритмы и структуры данных, основные аспекты ОС, архитектура ПК, ...)
            </div>
        </div>
        <div className="section">
            <div className="section__title">Ссылки</div>
            <div className='section__item'>
                1. <b>Резюме на hh.ru:</b> <a href='https://hh.ru/resume/f9d4acaeff081526ac0039ed1f444d65446b67'>Клац</a>
            </div>
            <div className='section__item'>
                2. <b>Github</b>: <a href='https://github.com/lafferty0550?tab=repositories'>Клуц</a>.
                Портфолио такое-себе. Несколько мини-проектов, которые писал для собеседований.
                Например:
                <ul>
                    <li>1. <b>user-list-fwa</b> - фуллстэк-приложение с использованием material-ui фреймворка. Создавать и
                        просматривать список пользователей.
                    </li>
                    <li>2. <b>react-authvk</b> - приложение, в котором реализована OAuth авторизация через ВК.</li>
                    <li>3. <b>frotend-javascript-test</b> - приложение с просмотром, созданием, поиском и сортировкой данных в
                        таблице.
                    </li>
                </ul>
                В данный момент пишу фуллстэк-приложение, в котором можно постить вопросы, получать на них ответы и
                комментарии.
                В будущем буду осваивать веб-сокеты и прикручу туда чатик. Репозиторий - <b>asdkev</b>.
            </div>
            <div className='section__item'>
                3. <b>Рабочий телефон</b>: +79203743727
            </div>
            <div className='section__item'>
                4. <b>Почта</b>: lafferty@gmail.com
            </div>
            <div className='section__item'>
                5. <b>ВК</b>: <a href='https://vk.com/ilyamashinin'>Клоц</a>
            </div>
        </div>
    </div>
)) as React.FC;