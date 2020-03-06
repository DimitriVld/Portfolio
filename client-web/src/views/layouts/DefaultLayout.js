import React from 'react';
import Header from '../atoms/Header';
import Menu from '../atoms/Menu';

const DefaultLayout = (props) => {
    return (
        <div className={"default-layout"}>
            <Header />
            <Menu />
            <main className={"main-content"}>{props.page}</main>
        </div>
    );
}

export default DefaultLayout;