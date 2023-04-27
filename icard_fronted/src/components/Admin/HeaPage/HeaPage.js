import React from 'react'
import "./HeaPage.scss";
import { Button } from "semantic-ui-react";

export function HeaPage(props) {
    const {title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;
    return (
        <div className='header-page-admin'>
            <h1> {title} </h1>
            <div>
                {
                    btnTitle && (
                        <Button positive onClick={btnClick}>
                            {btnTitle}
                        </Button>
                    )
                }
                {
                    btnTitleTwo && (
                        <Button negative onClick={btnClickTwo}>
                            {btnTitleTwo}
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
