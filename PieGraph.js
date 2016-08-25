
function PieGraph(x,y,w,h) {
    Graph.call(this,x,y,w,h)
    this.colors = ["#3F51B5","#c62828","#8BC34A","#00838F","#FF5722","#1A237E"]
}
PieGraph.prototype = Object.create(Graph.prototype)
PieGraph.prototype.plotData = function(ctx) {
    var sumofalldata = this.y_data.reduce(function(pre,curr){
        return pre+curr
    })
    var y_theta = this.y_data.map(function(value){
        return (value/sumofalldata)*360
    })

    var deg = 0
    console.log(y_theta)
    y_theta.forEach(function(y,index){
        var r = this.width/4;
        if(index<this.colors.length) {
            ctx.fillStyle = (this.colors[index])
        }
        else {
            ctx.fillStyle = (this.colors[index%this.colors.length])
        }
        ctx.save();
        ctx.translate(this.width/2,this.height/2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(r*Math.cos(deg*Math.PI/180),r*Math.sin(deg*Math.PI/180));
        for(var i=deg;i<=deg+y;i++) {
            ctx.lineTo(r*Math.cos(i*Math.PI/180),r*Math.sin(i*Math.PI/180));
        }
        ctx.lineTo(0,0);
        ctx.fill()
        ctx.restore();
        deg = deg+y
    }.bind(this))
}
