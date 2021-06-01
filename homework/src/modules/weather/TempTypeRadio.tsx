import React from 'react'

export const TempTypeRadio = () => {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Kelvin"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <strong>Kelvin</strong>
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    value="Celsius"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <strong>Celsius</strong>
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    value="Fahrenheit"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    <strong>Fahrenheit</strong>
                </label>
            </div>
        </>

    )
}
