import React, { Component } from 'react';
import './HeaderSection.css';

export default class HeaderSection extends Component {
    onFilterTime = (key) =>{      
        this.props.onFilterTime(key)
    }
    render() {
        return (
            <header>
                <div id="header-section">
                    <ul className="list-header__section">
                        <li className="item-header__section">
                            <button className="link-header__section active" onClick={() => this.onFilterTime('all')}>Tất cả</button>
                        </li>
                        <li className="item-header__section">
                            <button className="link-header__section" onClick={() => this.onFilterTime('day')}>Tuần</button>
                        </li>
                        <li className="item-header__section">
                            <button className="link-header__section" onClick={() => this.onFilterTime('date')}>Ngày</button>
                        </li>
                        <li className="item-header__section">
                            <button className="link-header__section" onClick={() => this.onFilterTime('month')}>Tháng</button>
                        </li>
                        <li className="item-header__section">
                            <button className="link-header__section" onClick={() => this.onFilterTime('year')}>Năm</button>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
