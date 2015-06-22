#pragma strict
var Target:Transform;
var Distancia:float;
var lookAtDistance:float = 25f;
var moveSpeed:float = 5f;
var Damping:float = 6f;
var AttackRange:float = 15f;
var HitRange:float = 3f;

var Controller:CharacterController;
var gravity:float = 20f;
private var moveDirection:Vector3 = Vector3.zero;
private var lock_y:float;
private var lock_rotx:float;
private var lock_rotz:float;
function Start(){
	lock_y = transform.position.y;
	lock_rotx = transform.rotation.x;
	lock_rotz = transform.rotation.z;
}

function FixedUpdate () {
	Distancia = Vector3.Distance(Target.position, transform.position);
	if (Distancia < lookAtDistance && Distancia>1.5){
		lookAt();
	}
	if (Distancia > lookAtDistance && Distancia>1.5){

	}
	if (Distancia < AttackRange && Distancia>1.5){
		Chase();
	}
	Attack();
	transform.position.y = lock_y;
	transform.rotation.x = lock_rotx;
	transform.rotation.z = lock_rotz;
}

function lookAt(){
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime*Damping);
}
function Chase(){
	moveDirection = transform.forward;
	moveDirection *= moveSpeed;

	moveDirection.y -= gravity*Time.deltaTime;
	Controller.Move(moveDirection*Time.deltaTime);
}

function Attack(){
	if (Distancia<= HitRange){
		Target.gameObject.SendMessage("kill" , SendMessageOptions.DontRequireReceiver);
	}
}