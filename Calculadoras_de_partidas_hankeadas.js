//2️⃣ Calculadora de partidas Rankeadas

function rank (vitorias, derrotas){
    let saldoDeVitoria = vitorias - derrotas
    heroi (saldoDeVitoria)
    }
    let nivel 
    function heroi (saldoDeVitoria){
    
        
    
        if(saldoDeVitoria <= 10){
                nivel = "Ferro"
            informacao (saldoDeVitoria, nivel)
    
        }
                
        
            else if (saldoDeVitoria > 10 && saldoDeVitoria <= 20){
                nivel = "Bronze"
                informacao (saldoDeVitoria, nivel)
    
            }
    
            else if (saldoDeVitoria > 20 && saldoDeVitoria <= 50){
                nivel = "Prata"
                informacao (saldoDeVitoria, nivel)
    
            }
                
                
            else if (saldoDeVitoria > 50 && saldoDeVitoria <= 80){
                nivel = "Ouro"
                informacao (saldoDeVitoria, nivel)
    
            }
                
                
            else if (saldoDeVitoria > 80 && saldoDeVitoria <= 90){
                nivel = "Diamnte"
                informacao (saldoDeVitoria, nivel)
    
            }
                
           
            else if (saldoDeVitoria > 90 && saldoDeVitoria <= 100){
                nivel = "Lendário"
                informacao (saldoDeVitoria, nivel)
    
            }
                
    
            else {
                nivel = "Imortal"
                informacao (saldoDeVitoria, nivel)
    
            }
                
    
            
        }
    
        
    
    function informacao (saldoDeVitoria, nivel){
    
        console.log("O Heroi tem saldo de " + saldoDeVitoria + " esta no nivel " + nivel)
    
    }
    
    rank(320, 217)
    