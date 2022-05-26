import React from "react";



//action="./logFormData.js"
export default function LogForm({ inputhandler }) {
    const eventHandler = (e) => {
        e.preventDefault()
        const Log = {
            imgFile: e.target.imgFile.value,
            logTitle: e.target.logTitle.value,

            logLocation: e.target.logLocation.value,
            logDate: e.target.logDate.value,
            logDescription: e.target.logDescription.value
        }

        inputhandler(Log)
    }
    return (
        <form className="log--form " onSubmit={eventHandler}>

            <div className="logForm--component">
                <label className="logForm--label">Log Image:</label>
                <input name="imgFile" className="logForm--input" type="file" />
            </div>

            <div className="logForm--details">
                <div className="logForm--component">
                    <label className="logForm--label">Log Title:</label>
                    <input name="logTitle" className="logForm--input" type="text" />
                </div>

                <div className="logForm--component">
                    <label className="logForm--label" >Log Location:</label>
                    <input name="logLocation" className="logForm--input" type="text" />
                </div>

                <div className="logForm--component">
                    <label className="logForm--label">Log Date:</label>
                    <input name="logDate" className="logForm--input" type="text" />
                </div>

                <div className="logForm--component">
                    <label className="logForm--label">Log Description:</label>
                    <textarea name="logDescription" className="logForm--input" cols="30" rows="10"></textarea>
                </div>
            </div>

            <div className="logForm--component">
                <button className="addButton" type="submit">+</button>
            </div>

        </form>
    )
}