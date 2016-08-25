var barGraph
var x = 100,y = 0,w = 200, h = 200
var feed_data = {x_label:['2013','2014','2015','2016'],y_label:['200','300','400','250'],y_data:[200,225,300,250]}
var GraphFactory = {initGraph:function(graph){
    graph.feedData(feed_data.x_label,feed_data.y_label,feed_data.y_data)

},getBarGraph:function(){
    var barGraph = new BarGraph(x,y,w,h)
    this.initGraph(barGraph)
    return barGraph
},getLineGraph:function(){
    var barGraph = new LineGraph(x,y,w,h)
    this.initGraph(barGraph)
    return barGraph
},getPieGraph:function(){
    var barGraph = new PieGraph(x,y,w,h)
    this.initGraph(barGraph)
    return barGraph
}
}
window.onload = function(){
    var canvas = document.getElementById('graph_area')
    var ctx = canvas.getContext('2d')
    var chartDropDown = document.getElementById('chartDropDown')
    barGraph = GraphFactory.getBarGraph()

    var xDataTxt = document.getElementById('x_label')
    var yDataTxt = document.getElementById('y_label')
    chartDropDown.onchange = function(event) {
        switch(event.target.value) {
            case "barGraph":
              barGraph = GraphFactory.getBarGraph()
              break
            case "pieGraph":
              barGraph = GraphFactory.getPieGraph()
              break
            case "lineGraph":
              barGraph = GraphFactory.getLineGraph()
              break
            default:

              break
        }
    }
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
                      feed_data.x_label = xLabel
                      feed_data.y_label = yLabel
                      feed_data.y_data = y_data
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
