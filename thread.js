function Thread()  
{	

	this.Initialise = function()
	{
		
		//CREATION STAGE
		var stage = new Kinetic.Stage({
			container: 'container',
			width: 900,
			height: 500
		});
		
		//CREATION MAIN LAYER
		var main_layer = new Kinetic.Layer();
		
		//BACKGROUND
		var mLayer_BG = new Kinetic.Rect({
			width: 900,
			height: 500,
			fill: '#000'
		});
		
		var mLayer_Ship = new Kinetic.Polygon({
			points: [0,0 , 10,20 , -10,20 ],
			fill: '#000',
			x : 10,
			y : 470
		});
		
		main_layer.add(mLayer_Ship);
		
		stage.add(main_layer);
		
		var mTween_Move_Ship = new Kinetic.Tween({
			node: mLayer_Ship,
			x: 890,
			duration: 4,
		});
		
		mTween_Move_Ship.seek(2);
		
		var mTouchL = false;
		var mTouchR = false;
		
		var mTouchShoot = false;
		var isShooting = false;
		var mInterval_Shooter;
		/* ------------------- Listener KEYBOARD ------------------- */
		document.addEventListener( "keydown", doKeyDown, true);
		document.addEventListener( "keyup", doKeyUp, true);
		
		function doKeyDown(e){
			//alert( e.keyCode )
			if( e.keyCode == 37){
				mTouchL = true;
				mTween_Move_Ship.reverse();
			}
			
			if( e.keyCode == 39){
				mTouchR = true;
				mTween_Move_Ship.play();
			}
			
			if( e.keyCode == 32){
				if(!isShooting){
					mTouchShoot = true;
					isShooting = true;
					mInterval_Shooter = setInterval(function(){Shoot()},150);
				}
				
			}
		}
		
		
		
		function doKeyUp(e){
			if( e.keyCode == 37){
				mTouchL = false;
				
				if(!mTouchR){
					mTween_Move_Ship.pause();
				}else{
					mTween_Move_Ship.play();
				}
			}
			if( e.keyCode == 39){
				mTouchR = false;
				
				if(!mTouchL){
					mTween_Move_Ship.pause();
				}else{
					mTween_Move_Ship.reverse();
				}
			}
			if( e.keyCode == 32){
				mTouchShoot = false;
				isShooting = false;
				clearInterval(mInterval_Shooter);
			}
		}
		
		
		
		/*---------SHOOT LAZER--------*/
		function Shoot(){
			var temp_Lazer = new Lazer();
			temp_Lazer.Shoot(stage, main_layer, mLayer_Ship.getX());
		}
		
		
		
		
		
		
		
		
		
		/*-------------END INIT THREAD-----------------*/
	}

}  
