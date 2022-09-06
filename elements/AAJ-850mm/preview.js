function(instance, properties) {
    

    instance.isResponsive = true;
    var r= $(`<div class="paystack-block" style=" display: block;
    width: 500px;
    text-align: center;
    padding: 20px;
    margin: auto;" >
        <input type="button" class="pay-button" style="background-color: #3bb75e;
    color: white;
    border: none;
    font-weight: 300;
    height: 50px;
    line-height: 50px;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-radius: 5px;
    margin: auto;
    font-size: 18px;" value="Pay now"/>
        <div style="height:25px;"></div>
        <img class="paystack-badge" style=" height: 64px;
    display: block;
    text-align: center;
    margin: auto;" src="//dd7tel2830j4w.cloudfront.net/f1658230418545x742960695586094000/SBP%20Tag%20-%20Payment%20Channels%20-%20NG.png" alt="Paystack Badge">
    </div>`);
    instance.canvas.append(r);
    
}