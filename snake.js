class Snake 
{ 
    constructor() 
    {
      this.body = [];
      this.body[0] = createVector(9, 9);
      this.xVelocity = 0;
      this.yVelocity = 0;
      this.snakeLength = 0;
    }
    
    display() 
    {
        for(let i = 0; i < this.body.length; i++) 
        {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1)
        }
    }

    setVelocity(x, y) 
    {
        this.xVelocity = x;
        this.yVelocity = y;
    }
    
    update() 
    {
        var head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xVelocity;
        head.y += this.yVelocity;
        this.body.push(head);
    }
    
    grow() 
    {
        var head = this.body[this.body.length-1].copy();
        this.snakeLength++;
        this.body.push(head);
    }
    
    eat(pos) 
    {
      if(this.body[this.body.length-1].x === pos.x && this.body[this.body.length-1].y === pos.y) 
      {
        this.grow();
        return true;
      }
      //return false;
    }

    gameOver()
    {
        var xPos = this.body[this.body.length-1].x;
        var yPos = this.body[this.body.length-1].y;

        if(xPos > sWidth - 1 || xPos < 0||yPos > sHeight - 1 || yPos < 0)
        {
            return true; 
        }

        for(var i = 0; i < this.body.length-1; i++)
        {
            var part = this.body[i];
            if(part.x === xPos && part.y === yPos)
            {
                return true;
            }
        }
        //return false;
    }
  
  }