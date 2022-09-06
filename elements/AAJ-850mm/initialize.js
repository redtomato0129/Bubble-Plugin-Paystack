
function(instance, context) {
    function triggerEvent(event){
        instance.triggerEvent(event)
    }
    function publishState(key, value){
        instance.publishState(key, value)
    }
    function startTransaction( _properties) {
            console.log(_properties)
    const PUBLIC_KEY= context.keys['Public Key'];
    const paystackInstance = new PaystackPop();
    const onLoad = transaction => instance.triggerEvent('onload');
    
    const onSuccess = (transaction) => {
        publishState('reference', transaction.reference);
        publishState('status', transaction.status);
        publishState('transaction_id', transaction.transaction);
        publishState('amount', _properties.amount);
        publishState('message', transaction.message);
        publishState('email', _properties.email);
        return triggerEvent('onsuccess', function(err){
            console.log('trigger happy');
           console.error(err);
        });
    }
    const onError = error => {
        console.error(error);
        console.log("an error occured")
        triggerEvent('onerror')
    }
    const onCancel = ()=>{
        console.log("checkout closed")
        triggerEvent('onclose')
    }
    let transactionData = {
        key: PUBLIC_KEY,
        email: _properties.email,
        amount: Number(_properties.amount),
        metadata:{
          plugin:"Bubble",
          custom_fields:[
              {
                  variable_name:"plugin",
                  display_name:"Plugin",
                  value:"Bubble"
              }
          ]
        },
        onSuccess,
        onLoad,
        onError,
        onCancel
    };
        if( _properties.label){
            transactionData.label = _properties.label
        }
         if( _properties.channel){
            transactionData.channels = [_properties.channel]
        }
         if( _properties.split_code){
            transactionData.split_code = _properties.split_code
        }
         if( _properties.subaccount){
            transactionData.subaccountCode = _properties.subaccount
        }
         if( _properties.plan_code){
            transactionData.planCode = _properties.plan_code
        }
        if(_properties.currency){
            transactionData.currency = _properties.currency;
        }
        
    	paystackInstance.newTransaction(transactionData);
}
    
    instance.data.startTransaction = startTransaction;
    instance.data.payBtnId = 'btn-'+Date.now()+Math.random(5,1700093)
    var r =$(`<div class="paystack-block hide"  id="`+ instance.data.payBtnId+'-block'+ `">
        <input type="button" class="pay-button" id="`+ instance.data.payBtnId+ `" value="Pay now"/>
        <div style="height:25px;"></div>
        <img class="paystack-badge"  id="`+ instance.data.payBtnId+'-img'+ `" src="//dd7tel2830j4w.cloudfront.net/f1658230418545x742960695586094000/SBP%20Tag%20-%20Payment%20Channels%20-%20NG.png" alt="Paystack Badge">
    </div>`)
    instance.canvas.append(r);
    
}