import React, { useState } from 'react'
import './ModalWindow.css'

export default ({data}) => {
  const {
    playlistTitle,
    inputHandler,
    submitForm,
    onClose
  } = data

    return (
        <div className="modal" onClick={onClose}>
          <div className="modal-dialog"  onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Creating new playlist...</h3>
              <span className="modal-Close">
              </span>
            </div>
            <div className="modal-body">
              <input type="text" value={playlistTitle} onChange={inputHandler}/>
              <div className="modal-button">
                <input type="submit" value="Create" onClick={submitForm}/>
                <button className="modal-button-use" onClick={onClose}>Cancel</button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
    )

}