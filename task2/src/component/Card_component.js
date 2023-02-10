import React from "react";

class Card_component extends React.Component {
  render() {
      return (
          <div>
            {/* users.map(({ name }) => name) */}
        {this.props.Book.map((data,index) => (
            <div key={index}>
              {/* {console.log(data,'data')} */}
            <h1>books data</h1>
            <img src={data.bookImage}></img>
            <h1>{data.bookTitle}</h1>
            <h1>{data.author}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card_component;
