
function(instance, properties, context) {
 let payButtonComponent = document.getElementById(instance.data.payBtnId);
 let payButtonBlock = document.getElementById(instance.data.payBtnId+'-block');
 let secureBadge = document.getElementById(instance.data.payBtnId+'-img');
 payButtonComponent.value =  properties.button_text;
 properties.show_badge ? secureBadge.classList.remove('hide') :  secureBadge.classList.add('hide') 
 payButtonBlock.classList.remove('hide');
 properties.button_theme.trim().toLowerCase() == 'light' ? payButtonComponent.classList.add('light') : payButtonComponent.classList.remove('light')
 if(!properties.email || !Number(properties.amount)){
     payButtonComponent.disabled = true;
     payButtonComponent.classList.add('disabled')
 }else{
    payButtonComponent.disabled = false;
     payButtonComponent.classList.remove('disabled')
     payButtonComponent.onclick = function(){instance.data.startTransaction(properties)}
 }   
}