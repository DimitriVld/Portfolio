import React from 'react';
import Header from '../atoms/Header';

const DefaultLayout = (props) => {
    return (
        <div className={"default-layout"}>
            <Header />
            <main className={"main-content"}>{props.page}</main>
        </div>
    );
}

export default DefaultLayout;