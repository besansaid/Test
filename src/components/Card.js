import React from 'react';
import { Component } from 'react';

class Card extends Component {
  render(){
    return (
        <div class="cards">
        <article class="card">
            <header>
                <h2>A short heading</h2>
            </header>    
            <img src="coffee.jpg" alt="nice coffee time"/>
            <div class="content">
                <p> Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. </p>
            </div>
                
        </article>
        </div>
    );
  }
}

export default Card;