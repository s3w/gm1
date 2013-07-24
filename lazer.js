function Lazer()
{
	this.Shoot = function(_stage, _layer, _posX){
		
		var mLayer_Lazer = new Kinetic.Rect({
			x: _posX,
			y: 460,
			width: 2,
			height: 5,
			fill : "#000"
		});
		
		_layer.add(mLayer_Lazer);
		_stage.drawScene();
		
		var mTween_Move_Lazer = new Kinetic.Tween({
			node: mLayer_Lazer,
			y: -5,
			duration: 2,
			onFinish: function() {
				mLayer_Lazer.destroy();
				mTween_Move_Lazer.destroy();
			}
		});
		
		mTween_Move_Lazer.play();
	}
}
