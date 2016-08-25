function LineGraph(x,y,w,h) {
    Graph.call(this,x,y,w,h)
}
LineGraph.prototype = Object.create(Graph.prototype)
LineGraph.prototype.plotData = function(ctx) {
    ctx.strokeStyle="yellowgreen"
    var y_max = this.y_data.reduce(function(curr,prev){
        return curr>prev?curr:prev
    })
    var y_data = this.y_data.map(function(value){
        return this.height - (value/y_max)*this.height
    }.bind(this))
    var x_gap = this.width/this.x_label.length
    var x = 0
    console.log(y_data);


    if(y_data.length>0) {
        ctx.beginPath()
        ctx.moveTo(x,y_data[0])
        for(var i=0;i<y_data.length;i++) {
            ctx.lineTo(x,y_data[i])
            x+=x_gap;
        }
        ctx.stroke()

    }
}
