import React from 'react';
import {render} from 'react-dom';
import VirtualList from 'react-tiny-virtual-list';
 


function virtualList(){

  let data = [];

  for(let i=1; i<10000; i++){
    data.push(i)
  }

  return(
    <VirtualList
      width='100%'
      height={600}
      itemCount={data.length}
      itemSize={50} // Also supports variable heights (array or function getter)
      renderItem={({index, style}) =>
        <div key={index} style={style}> 
          Letter: {data[index]}, Row: #{index}
        </div>
      }
    />
    // document.getElementById('root')
  );
}
export default virtualList;