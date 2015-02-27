function controller($scope, $timeout) {
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
        //console.log(inteiro);
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
        var achou;
        var timer = $scope.lista.length * 200;
        but = document.querySelectorAll("button");

        for(i=1;i<=$scope.lista.length;i++){
            //.className = "pessoas ng-binding";
            but[i].style.backgroundColor = "#FFD700";
            but[i].style.color = "#CD0000";
        }

        achou = false;

        if($scope.lista.length > 1){
            //$timeout(function (){
                //for(i=1;i<$scope.lista.length*200;i++){    
                    $scope.animation(but); //$timeout aqui?
                //}
            //}, 1000);
            $timeout(function (){
                console.log("rand");
                for(i=0;i<=$scope.lista.length-1;i++){
                
                    if(i == num){
                        $scope.escolhido = $scope.lista[i].nome;
                        console.log($scope.lista[i]);
                    //.className = "selecionado ng-binding";
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
            }, timer);
        }
        else{
            $scope.escolhido = $scope.lista[0].nome;
            console.log($scope.lista[0].nome);
            but[1].style.backgroundColor = "#CD0000";
            but[1].style.color = "#ffffff";
        }
    };

    $scope.animation = function (but){
        var time = 100*$scope.lista.length;
        //var anterior = 1;
            
        for(var i=1;i<=$scope.lista.length;i++){
            console.log("piscou?");
                
            but[i].style.backgroundColor = "#CD0000";
            but[i].style.color = "#ffffff";


            setTimeout(function(){      
                for(var j=1;j<=$scope.lista.length;j++){
                    but[j].style.backgroundColor = "#FFD700";
                    but[j].style.color = "#CD0000";
                }
                //anterior = i + 1;
            }, time);
        }

    };

};