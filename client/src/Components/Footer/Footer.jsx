import React, { Component } from 'react';
import {StyledFooter, Names, Name} from './Footer.styles'


export class Footer extends Component{
  state = {users: []}
  




  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render(){
    return(
      
        <StyledFooter>
            <Names> {this.state.users.map(user =>
            
            <Name key={user.id}>
              <a href={user.vk} target="_blank" rel="noopener noreferrer">{user.username}</a>
              </Name>)}
            
            </Names>
            <inframe data-iframe-width="150" data-iframe-height="270" data-share-badge-id="434ed199-a446-4cee-91ba-3cc8a64bf18c" data-share-badge-host="https://www.youracclaim.com"></inframe>
            <script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
        </StyledFooter>
        
    );
  }
}