import React, { useState } from 'react'
import "./accordion.css"
import { accordionData as data  } from './AcordionData';
import image from '../assets/image.png'

export const Accordion =  () => {
    const [expand, setexpand] = useState(false);
    const [bar, setBar] = useState(0);
    return (
      <div>
        <div>
          <img src={image} />
        </div>
        <div >
          {data.map((val) => (
            <div
              className="barhead"
              onClick={(e) => {
                setBar(val.id);
                if (bar === val.id) {
                  setexpand(!expand);
                } else {
                  setexpand(true);
                }
              }}
             key={val.id}>
              {val.title}
              {val.id === bar && expand === true ? (
                <div key={val.id}>{val.content}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
