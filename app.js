//Desktop controller
var uiController = (function(){
    
})();

//Finance controller
var financeController = (function(){
   
})();

//Main programm controller
var appController = (function(uiController, financeController){
    
    var ctrlAddItem = function(){
        //1. Get values from the display
        //2. And sent it to finance controller
        //3. Received values to display
        //4. Compute values
        //5. Computed value to the display
    }
    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem();

    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    })
})(uiController, financeController);