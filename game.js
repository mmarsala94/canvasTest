"use strict";

var World = function() {
    
    this.m_map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ];
    
    this.m_init = false;
    this.m_width = 16;
    this.m_height = 16;
    this.m_res = 32;
    

};

var world = {
    constructor: World,
    //set the size of the canvas to the size of the board
    init : function() {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.c.style.width = this.m_width * this.m_res;
        this.c.style.height = this.m_height * this.m_res;
        this.m_init = true;
    },
        //render the map to the screen
    drawMap : function(context) {

        if (this.m_init) {

            for (var y = 0; y < this.m_height; y++) {
                for (var x = 0; x < this.m_width; x++) {

                    var x1 = (x * this.m_res);
                    var y1 = (y * this.m_res);
                    
                    switch(this.m_map[y][x]) {
                        
                        //Draw an empty tile
                        case 0: 
                            context.fillStyle = "#001122";
                            context.strokeStyle = "#002132"; 
                            context.rect(x1, y1, this.m_res, this.m_res);
                            context.stroke();
                        break;
                        
                        //draw a platform
                        case 1: 
                            context.fillStyle = "#0050aa"; 
                        break;

                        default: 
                        
                        break;
                    }

                    context.fillRect(x1, y1, this.m_res, this.m_res);
                }   
            }   
        }
    },

    draw: function(){
            this.ctx = this.c.getContext("2d");
            this.ctx.clearRect(0,0,512,512);
            this.drawMap(this.ctx);
    }

};

World.prototype = world;
//instance of the world class
var test = new World();
test.init();
//test.draw();
//The only way is to get rid of this lag is too get rid of this loop where every cell is being redrawn at 60fps.
var FPS = 60;
setInterval(function() {
  //update();
  test.draw();
}, 1000/FPS);
	
function update() {
    
}

