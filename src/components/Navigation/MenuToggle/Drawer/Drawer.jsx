import React, { Component } from 'react'
import './Drawer.css'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../../UI/Backdrop/Backdrop'
const links = [
    { to: '/', label: 'Список', exact: true },
    { to: '/auth', label: 'Авторизация', exact: false },
    { to: '/quiz-creator', label: 'Создать тест', exact: false },
]
export default class Drawer extends Component {

    renderLi() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName='active'
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = ['Drawer']
        if (!this.props.isOpen) {
            cls.push('close')
        }
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLi()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}