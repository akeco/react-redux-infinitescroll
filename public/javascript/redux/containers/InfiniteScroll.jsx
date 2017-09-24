import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import $ from 'jquery';
import {addList} from '../actions/actions';

class InfiniteScroll extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            progress: false
        };
        this.wrapperHeight = 0;
        this.showItemNumber = this.props.showItemNumber;
        this.showItems = this.showItems.bind(this);
        this.showProgress = this.showProgress.bind(this);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.windowElement = $(window);
    }

    componentWillMount(){
        this.props.addList(this.props.items.slice(0,this.showItemNumber));
    }

    componentDidMount(){
        setTimeout(()=>{
            this.wrapperHeight = $(ReactDOM.findDOMNode(this)).height();
            window.addEventListener('scroll', this.scrollEvent);
        },50);
    }

    scrollEvent(){
        var {items} = this.props;
        if(this.windowElement.scrollTop() + this.windowElement.innerHeight() == this.wrapperHeight && items.length != this.props.showList.length){
            this.setState({
                progress: true
            });
            setTimeout(()=>{
                var counter = this.state.counter + 1;
                this.setState({
                    counter: counter,
                    progress: false
                });
                var appendingArray = (items.slice((counter * this.showItemNumber),(counter * this.showItemNumber + this.showItemNumber)).length) ?
                    items.slice((counter * this.showItemNumber),(counter * this.showItemNumber + this.showItemNumber)) :
                    items.slice((counter * this.showItemNumber),this.props.items.length);
                if(appendingArray.length){
                    this.props.addList(appendingArray);
                    this.wrapperHeight = $(ReactDOM.findDOMNode(this)).height();
                }
            },1000);
        }
    }

    showItems(){
        if(this.props.showList.length){
            return this.props.showList.map((item)=>{
                return(
                <ListItem key={item._id}>
                    <p>{item.title}</p>
                    <img
                        src={item.picture}
                        style={styles.image}
                    />
                </ListItem>
                );
            });
        }
    }

    showProgress(){
        if(this.state.progress) return (
            <CircularProgress
                size={60}
                thickness={7}
                style={styles.progress}
            />
        );
    }

    render(){
        return(
            <div style={styles.divWrapper}>
                <List style={styles.list}>
                    {this.showItems()}
                </List>
                {this.showProgress()}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    items: PropTypes.array.isRequired,
    showItemNumber: PropTypes.number.isRequired
};

const styles = {
    progress: {
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        zIndex: 999
    },
    divWrapper: {
        position: 'relative'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:0
    },
    image: {
        width: 400,
        height: 200,
        border: '1px solid rgba(0,0,0,0.1)'
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addList
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        showList: state.showList
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(InfiniteScroll);