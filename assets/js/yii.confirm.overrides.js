/**
 * Override the default yii confirm dialog. This function is
 * called by yii when a confirmation is requested.
 *
 * @param string message the message to display
 * @param string ok callback triggered when confirmation is true
 * @param string cancelCallback callback triggered when cancelled
 */
window.legacyConfirm = window.confirm; 
window.confirm = function (message, title, type, func_if_yes, func_if_cancel, params) {
	console.log('1');
	var title = (title == null) ? 'Confirmação' : title;
var type = (type == null) ? 'warning' : type;
    Swal.fire({
        title: message,
        type: 'warning',
        showCancelButton: true,
        //buttons: true
    }).then((result) => {
  if (result.value) {
	   console.log('2');
   return result.value;
  } else if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.cancel
  ) {
    console.log('3');
	return false;
  }
})
}

yii.confirm = function (message, okCallback, cancelCallback) {
	console.log('4');
    Swal.fire({
        title: message,
        type: 'warning',
        showCancelButton: true,
        //buttons: true
    }).then((result) => {
        if(result.value){
			console.log('5');
            okCallback()
        }
        else if(result.dismiss === Swal.DismissReason.cancel){
			console.log('6');
            cancelCallback()
        }
	 });
}	
 

window.legacyAlert = window.alert;
window.alert = function(message, title, type, params) {
	var title = (title == null) ? 'Aviso' : title;
	var type = (type == null) ? 'warning' : type;
           Swal.fire(message);
            }