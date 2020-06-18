import React, { Component } from 'react';

import {Search, Bg} from "./SearchMsg.styles"

class Modal extends Component {
    render() {
        if (this.props.isOpen === false) return null;
    
        return (
          <div>
            <Search className="modal" >{this.props.children}</Search>
            <Bg className="bg" onClick={e => this.close(e)} />
          </div>
        );
      }
    
    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default Modal;