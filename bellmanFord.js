//verMat = Aresta
//

var dist = []
function bellmanford(matAdj,dist,s){
	for(verMat in vertices){
		dist[vertices] = 'Infinito';
		if(vertices == s)
			dist[vertices] = 0;

	}
	for(var k=0;k<verMat.length-1;k++){
		for(var i = 0;i<verMat.length;i++){
			for (var j = 0; j< verMat,length; j++) {
				if(dist[i]>dist[j]+verMat[j][i])
					dist[i]= dist[j]+verMat[j][i];
			}
		}
	}
	for(var i=o;i<verMat.length;i++){
		for(var j =0;j< verMat;j++){
			if(dist[i]>dist[j]+verMat[j][i])
				console.log("Grafo contem um ciclo negativo");
		}
	}
}
