import React, { Component } from 'react';
import {StyledNews, Line, Container} from './News.styles';
import {mas} from './mas';

class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }


    render(){
        const {count} = this.state;

        return (
        <StyledNews>
            <Line/>
            <Container>
                {mas[count]}
            </Container>
            <Line/>
            <Container>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
                    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.
                    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper 
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat
                </p>
            </Container>
            <Line/>
        </StyledNews>
        )
    }

    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState(() => ({
                count: Math.floor(Math.floor(Math.random() * (5 - 0) + 0))
                
            }))
        }, 20000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
}

export default News;