TriangleShape.prototype = new Shape({});
TriangleShape.prototype.draw = function(context, width, height){
      this.super.draw(context,width,height);

      var topX = this.scale(this.properties.x, width);
      var topY = this.scale(this.properties.y - this.properties.height / 2, height);
      var secondX = this.scale(this.properties.x + this.properties.width / 2, width);
      var secondY = this.scale(this.properties.y + this.properties.height / 2, height);
      var thirdX = this.scale(this.properties.x - this.properties.width / 2, width);
      var thirdY = secondY;

      context.beginPath();
      context.moveTo(topX, topY);
      context.lineTo(secondX, secondY);
      context.lineTo(thirdX, thirdY);
      context.closePath();

      context.fill();

      if(this.properties.outline !== undefined){
        context.stroke();
      }
    }

function TriangleShape(properties) {
  this.properties = properties;
  this.super = new Shape(properties);
}
