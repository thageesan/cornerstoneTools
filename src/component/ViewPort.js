import React, { Component } from 'react'

import CornerstoneViewport from 'react-cornerstone-viewport';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import './../service/initCornerstone';

class ViewPort extends Component {

  brushEnabled = false;
  penEnabled = false;
  brushTool = cornerstoneTools.BrushTool;
  penTool = cornerstoneTools.FreehandMouseTool;

  componentDidMount = () => {
    cornerstoneTools.addTool(this.brushTool);
    cornerstoneTools.addTool(this.penTool);
  }

  onProstateSegmenatation = () => {
    this.brushEnabled = !this.brushEnabled;
    if (this.brushEnabled) {
      cornerstoneTools.setToolActive('Brush', { mouseButtonMask: 1 });
    } else {
      cornerstoneTools.setToolDisabled('Brush');
    }
  }

  toggleBrushTool = () => {
    this.onProstateSegmenatation();
  }

  togglePenTool = () => {
    this.onAnnotate();
  }

  onAnnotate = () => {
    this.penEnabled = !this.penEnabled;
    this.penEnabled ? cornerstoneTools.setToolActive('FreehandMouse', { mouseButtonMask: 1 }) : cornerstoneTools.setToolDisabled('FreehandMouse');
  }


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
  
    const style = {
      'height': '512px'
    };

    return (
      <div style={style}>
        <button onClick={this.toggleBrushTool}>Brush Tool</button>
        <button onClick={this.togglePenTool}>Pen Tool</button>
        <CornerstoneViewport
          viewportData={exampleData}
          cornerstone={cornerstone} 
          cornerstoneTools={cornerstoneTools}
        />
      </div>
    )
  }
}

export default ViewPort