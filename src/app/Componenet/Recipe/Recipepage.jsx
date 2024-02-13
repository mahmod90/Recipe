import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Recipepage.css";
import Image from 'next/image';

export default function Recipepage() {

  return <>
    <div className="recipe-page">
        <div className="container styles bg-white mt-5 pb-3   " >
            <div className="recipe-home">
              <div className="img-card text-center">
                <Image src='/image-omelette.jpeg' width={500} height={500}/>
              </div>

             <div className="text-card">
              <h1>Simple Omelette Recipe </h1>
                <p>An easy and quick dish, perfect for any meal. This classic omelette 
                  combines beaten eggs cooked to perfection filled with your choice of cheese,
                  vegetables, or meats
                  </p>
             </div>

             <div className="time size-section">
               <h5 >Preparation Time</h5>
                <ul className="custom-list">
                  <li><span>Total</span>: Approximately 10 minutes </li>
                  <li><span>Preparation</span>: 5 minutes</li>
                  <li><span>Cooking</span> 5 minutes</li>
                </ul>
             </div>

                <div className="recipe size-section mt-3">
                  <h2>Ingredients:</h2>
                  <ul className='Ingredients'>
                    <li>2-3 large eggs</li>
                    <li>Salt, to Taste</li>
                    <li>Pepper, to Taste</li>
                    <li>1 tablespoon Butter or Margarine</li>  
                    <li>Optional filling: cheese, diced vagetables, cooked meats , herbs</li>
                  </ul>
                </div>
                <hr />
                <div className="steps size-section mt-3">
                  <h2>Instructions:</h2>
                    <div className="instruction ">
                      <ol>
                        <span><span className='num'>1.</span> Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                      <ol>
                        <span><span className='num'>2.</span>  Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                      <ol>
                        <span><span className='num'>3.</span>  Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                      <ol>
                        <span><span className='num'>4.</span>  Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                      <ol>
                        <span><span className='num'>5.</span> . Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                      <ol>
                        <span><span className='num'>6.</span>  Beat The eggs:</span> Place the eggs in a bowl and whisk them together with a fork until they
                      </ol>
                    </div>
                </div>
                <hr />
                <div className="nutrition size-section mt-3">
                  <h2>Nutrition</h2>
                  <p> The twble below shows nutritional values per serving without The additional fillings</p>
                  <table class="table">                    
                      <tbody>
                        <tr>
                          <td>Colorie</td>
                          <td className='colortd'>277Kcal</td>
                        </tr>
                        <tr>
                          <td>Carbs</td>
                          <td className='colortd'>0g</td>                    
                        </tr>
                        <tr>

                          <td >Protein</td>
                          <td className='colortd'>20g</td>
                        </tr>
                        <tr> 
                          <td>Fat</td>
                          <td className='colortd'>22g</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
  </>

}
