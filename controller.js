function controller($scope) {
   $scope.lista = [];

   $scope.add = function (pessoa, id) {
        console.log("add");
        $scope.lista.push($scope.pessoa);
        $scope.pessoa = {};
		$scope.pessoa.id = $scope.lista.length;
    	console.log($scope.pessoa.id);
        $scope.pessoa.select=false;
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
        var but;
        

        for(i=1;i<=$scope.lista.length;i++){
            but = document.querySelectorAll("button");//.className = "pessoas ng-binding";
            but[i].style.backgroundColor = "#FFD700";
            but[i].style.color = "#CD0000";
        }

        var achou = false;

        if($scope.lista.length > 1){
            for(i=0;i<=$scope.lista.length-1;i++){
                if(i == num){
                    //console.log("if");
                    $scope.escolhido = $scope.lista[i].nome;
                    console.log($scope.lista[i]);
                    //showSelect(num);
                    but = document.querySelectorAll("button");//.className = "selecionado ng-binding";
                    but[i+1].style.backgroundColor = "#CD0000";
                    but[i+1].style.color = "#ffffff";
                    //console.log(but[i]);
                    achou = true;
                }
            }
            if(achou == false){
                $scope.aponta();
            }
            return num;
            setTimeout($scope.aponta(),100000);
        }
        else{
            $scope.escolhido = $scope.lista[0].nome;
            console.log($scope.lista[0].nome);
            but = document.querySelectorAll("button");//.className = "selecionado ng-binding";
            but[1].style.backgroundColor = "#CD0000";
            but[1].style.color = "#ffffff";
        }

    }


};