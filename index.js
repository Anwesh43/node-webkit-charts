var barGraph;
window.onload = function(){
    var canvas = document.getElementById('graph_area')
    var ctx = canvas.getContext('2d')
    barGraph = new BarGraph(100,0,200,200);
    barGraph.feedData(['2013','2014','2015','2016'],['200','300','400','250'],[200,300,400,250])
    var xDataTxt = document.getElementById('x_label')
    var yDataTxt = document.getElementById('y_label')

    var changeBtn = document.getElementById('changeGraph')
    changeBtn.onclick = function() {
        if(xDataTxt.value != "" && yDataTxt.value != "") {
            var xLabel = xDataTxt.value.split(",")
            var yLabel = yDataTxt.value.split(",")
            var y_data = []
            if(xLabel.length == yLabel.length) {

                  var allNums = true;
                  for(var i=0;i<yLabel.length;i++) {
                      var y = parseInt(yLabel[i])

                      if(y == NaN || y<0) {
                        allNums = false;
                        break;
                      }
                      else {
                          y_data.push(y)
                      }
                  }
                  if(allNums) {
                      console.log(xLabel,yLabel,y_data)
                      barGraph.feedData(xLabel,yLabel,y_data)
                  }
                  else {
                      y_data=[]
                      alert("enter comma separated numbers greater than 0")
                  }
            }
            else {
                alert("the length of x_label and y_label must be same")
            }
        }
        else {
            alert("plese enter values the required field")
        }
    }
    setInterval(function(){
        ctx.clearRect(0,0,1000,600)
        barGraph.drawGraph(ctx,'black','yellowgreen')
    },1000)
}
