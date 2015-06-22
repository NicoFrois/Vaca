#pragma strict
var nextScene:int = 1;

function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag == "Player"){
		Application.LoadLevel(nextScene);
	}
}