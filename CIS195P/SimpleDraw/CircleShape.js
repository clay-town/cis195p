/*

  insert monkey patch for IE here
if(CanvasRenderingContext2D.prototype.ellipse !== undefined) {
  CanvasRenderingContext2D.prototype.ellipse = function()
}
*/

CircleShape.prototype = new Shape({});
CircleShape.prototype.draw = function(context, width, height){
    this.super.draw(context,width,height);

    var x = this.scale(this.properties.x, width);
    var y = this.scale(this.properties.y, height);
    var xR = this.scale(this.properties.radius, width);
    var yR = this.scale(this.properties.radius, height);

    context.beginPath();
    context.ellipse(x, y, xR, yR, 0, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();

    if(this.properties.outline !== undefined){
      context.stroke();
    }
  }

function CircleShape(properties) {
  this.properties = properties;
  this.super = new Shape(properties);


}
