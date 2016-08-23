function BarGraph(x,y,w,h) {
    Graph.call(this,x,y,w,h)
}
BarGraph.prototype = Object.create(Graph.prototype)
BarGraph.prototype.plotData = function(ctx) {
    var x_gap = this.width/(this.x_label.length)
    var x = 0
    var bar_width = x_gap/5
    var y_max = this.y_data.reduce(function(prev,curr){return curr>prev?curr:prev})
    var y_points = this.y_data.map(function(y){
        return this.height-((y/y_max)*this.height)
    }.bind(this))

    for(var i=0;i<this.x_label.length;i++) {

        var y = y_points[i]
        
        ctx.fillRect(x,y,bar_width,this.height-y)
        x = x+x_gap

    }
}
