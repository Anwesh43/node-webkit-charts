function Graph(xpivot,ypivot,width,height) {
    this.xpivot = xpivot
    this.ypivot = ypivot
    this.width = width
    this.height = height
}
Graph.prototype.feedData = function(x_label,y_label,y_data) {
    this.x_label = x_label
    this.y_label = y_label
    this.y_data = y_data
}
Graph.prototype.drawLabels = function(ctx) {
    ctx.fillStyle="black"
    var x_gap = this.width/this.x_label.length;
    var x = 0
    for(var i=0;i<this.x_label.length;i++) {
        ctx.fillText(this.x_label[i],x-x_gap/10,this.height+20)
        x = x+x_gap
    }
}
Graph.prototype.drawAxis = function(ctx) {
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,this.height)
    ctx.lineTo(this.width,this.height)
    ctx.stroke();

}
Graph.prototype.plotData = function(ctx) {

}

Graph.prototype.drawGraph = function(ctx,axisColor,graphColor) {
      ctx.fillStyle = graphColor
      ctx.strokeStyle = axisColor
      ctx.save()
      ctx.translate(this.xpivot,this.ypivot)
      this.drawAxis(ctx)
      this.plotData(ctx)
      this.drawLabels(ctx)
      ctx.restore()
}
