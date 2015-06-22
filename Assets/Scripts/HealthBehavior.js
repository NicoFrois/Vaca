#pragma strict
var Alive:boolean = true;
var Player:GameObject;


function Start () {

}

function Update () {
	if(!Alive){
		Application.LoadLevel(0);
	}
}

function kill(){
	Alive = false;
	Debug.Log("mensaje!");
}