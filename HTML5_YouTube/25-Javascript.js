function getstuff(){
	var list = document.querySelectorAll('#tuna');
	//list[1].onclick=talk;:
	for(var i=0; i<list.length;i++){
		list[i].onclick=talk;
	}
}
function talk(){
	alert('I love it when a plan comes together!');
}
window.onload=getstuff;

/*querySelector can only return one element: 
//querySelectorAll can return more than one element that has the same id:
//querySelectorAll will return a list or an array which you must put somewhere, :
//e.g var list:
//list [1] will show the second element in the array(list[1].onclick=talk;):
//for(var i=0; i<list.length;1++){list[i].onclick=talk;}- this for loop...: 
//will go through the array list of elements of tuna and when they are clicked a...: 
//the alert message will pop up:*/