import React, { Component } from 'react'

import CornerstoneViewport from 'react-cornerstone-viewport';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import './../service/initCornerstone';

class ViewPort extends Component {
  render () {
    const exampleData = {
        stack: {
            currentImageIdIndex: 0,
            imageIds: [
            "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm",
            "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.12.dcm"
            ]
        }
    }
  


    return (
      <CornerstoneViewport
        viewportData={exampleData}
        cornerstone={cornerstone} 
        cornerstoneTools={cornerstoneTools}
       />
    )
  }
}

export default ViewPort