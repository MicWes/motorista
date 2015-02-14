function controller($scope) {
   $scope.lista = [];

   $scope.add = function (pessoa, id) {
        console.log("add");
      
        $scope.lista.push($scope.pessoa);
        $scope.pessoa = {};
		$scope.pessoa.id = $scope.lista.length;
    	console.log($scope.pessoa.id);
    };
    	

    $scope.reset = function (){
		$scope.pessoa = {};

	};
	 
    
    $scope.remove = function($index) {
    	$scope.lista.splice($index, 1);
    };
 

    function random(){
        var rand = Math.random(10) * Number($scope.lista.length);
        var inteiro = Math.round(rand);
        console.log(inteiro);
        if (inteiro == 0 && $scope.lista.length != 0){
            random();
        }
        return inteiro;
    };

    $scope.aponta = function(){
        var num = random();
        var i;
        var escolhido;
        if($scope.lista.length > 1){
            for(i=0;i<=$scope.lista.length-1;i++){
            
                if(i == num){
                    //console.log("if");
                    escolhido = $scope.lista[i].nome;
                    console.log($scope.lista[i])
                    console.log($scope.lista[i].nome);
                }
            }
            return num;
        }
        else{
            console.log($scope.lista[0].nome);
        }
    }





    



};

