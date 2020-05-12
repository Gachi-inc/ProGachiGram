import React, { Component } from 'react';

class ThemeSwitch extends Component {  
    constructor(props) {  
        super(props);
        {this.isActive() ? this.css.trim() : this.css};
            this.state = {
            active: 'false'
            };
            this.css = `  
                html { filter: invert(100%); background: #fefefe; }  
                * { background-color: inherit }
                img:not([src*=".svg"]), video { filter: invert(100%) }`;
            this.store = typeof localStorage === 'undefined' ? null : localStorage;
        };

        invertSupported (property, value) {  
            var prop = property + ':',
                el = document.createElement('test'),
                mStyle = el.style;
            el.style.cssText = prop + value;
            return mStyle[property];
        }

        
        componentDidMount() {  
            if (this.store) {
              this.setState({
                supported: this.invertSupported('filter', 'invert(100%)'),
                active: this.store.getItem('ThemeSwitch') || 'false'
              });
            }
        }

        componentDidUpdate() {  
            if (this.store) {
              this.store.setItem('ThemeSwitch', this.state.active);
            }
        }

        isActive = () => this.state.active === 'true';
        toggle = () => {
            this.setState({
            active: this.isActive() ? 'false' : 'true'
            });
        };

  
  render() {
      return(
        <div>
            {
            (this.state.supported)
            ? <div>
                <button aria-pressed={this.isActive() ? 'true' : 'false'} onClick={this.toggle}>
                    dark theme:
                    <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
                </button>
                <style media={this.isActive() ? 'screen' : 'none'}>
                    {this.isActive() ? this.css.trim() : this.css}
                </style>
                </div>
            : ''
            }
        </div>
      );
  }
  
}
export default ThemeSwitch;