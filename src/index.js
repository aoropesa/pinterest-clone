import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

let cards = [{
  id: 1,
  title: "AVIATION",
  pins: 641,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 2,
  title: "Exceptional Aviation",
  pins: 209,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 3,
  title: "Aerospace",
  pins: 1545,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
}];

function Images(props){
    const {mainImg, subImg1, subImg2} = props;
    return (
      <div className="images">
        <img src={mainImg} className="main"/>
        <img src={subImg1} className="sub1"/>
        <img src={subImg2} className="sub2"/>
      </div>
    );
  }
Images.propTypes = {
    mainImg: PropTypes.string.isRequired,
    subImg1: PropTypes.string.isRequired,
    subImg2: PropTypes.string.isRequired
};
class Board extends Component{
    state = {
      list: cards
    };
  render(){
    return(
      <div className='board'>
        {cards.map(item => (
            <div key={item.id} className='card'>
              <span className='title'><p>{item.title}</p></span>
              <Images mainImg={item.mainImg} subImg1={item.subImg1} subImg2={item.subImg2} className="card"/>
              <span className='pin-count'><p className='glyphicon glyphicon-pushpin'>Pins: {item.pins}</p></span>
              <button className="follow-btn">Follow</button>
            </div>
        ))}
      </div>
    );
  };
}
Board.propTypes = {
  title: PropTypes.string.isRequired,
  pins: PropTypes.number.isRequired,
}


ReactDOM.render(<Board/>, document.querySelector('#root'));
