import React  from "react";
import './style.css';

const getComponentHeader = (inner_text) => {
    return (
      <p className="card-header">{inner_text}</p>
    );
  };

  const getComponentText = (inner_text) => {
    return (
      <p className="card-text">{inner_text}</p>
      
    );
  };
  const getComponentList = (elems) => {
    return (
      <div className="inner-list">
        {elems.map((el) => 
        <li className="listItem">{el}</li>
      )}
      </div>
      
    );
  };
  const getComponentList2 = (elems2) => {
    return (
      <div className="inner-list2">
        {elems2.map((el) => 
        <div className="listItem2">{el}</div>
      )}
      </div>
      
    );
  };

  const getComponentSubBlock = (inner_text) => {
    return (
        <div className= "bigblock">
            <div className="grayblock"></div>
            <p className="sub-block" >{inner_text}</p>
        </div>
    );
  };


function Card (props){
    return(
            <div className="card" onClick={props.setSelectedCard} >
                <div onClick={props.setSelectedCard} style={{backgroundImage: `url(${props.image})`}} className="photo1"></div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.content}
                      <span onClick={props.setSelectedCard} >Read more...</span>
                    </p>
                    <p className="date"> {props.date} | 
                    <span 
                    className="travel" 
                    onClick={() => props.setTopic(props.topic)}>
                        {props.topic}</span></p>
                </div>
                <article
                className={props.isArticleVisible ? '' : 'hide'}
                >
                {
                props.fullPage.map(el => {
                    switch (el.type) {
                    case 'header': {
                        return getComponentHeader(el.inner_text);
                    }
                    case 'text': {
                        return getComponentText(el.inner_text);
                    }
                    case 'sub-block': {
                            return getComponentSubBlock(el.inner_text);
                    }
                    case 'list': {
                      return getComponentList(el.elems);
                    }
                    case 'list2': {
                      return getComponentList2(el.elems2);
                    }
                    default: { }
                    }
                })
                }
                
                </article>
                

            </div>
    )
};

export default Card;