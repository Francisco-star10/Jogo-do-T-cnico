
let inventario = []
let vida = 5
let checkpoint1 = true


alert("Seu nome é Arab Sibghatullah, você nasceu no dia 4 de julho de 2001, em Kondaz, no Afeganistão")
alert("Desde os 8 anos de idade, você é apaixonado e treina judô, seu sonho é se tornar um atleta Olimpíco")
alert("Você é um atleta muito talentoso, e esse talento lhe rendeu uma vaga na equipe nacional de judô juvenil do Afeganistão aos 19 anos de idade")
alert("No jogo você terá um inventário, onde nele, incluirá sentimos, tanto positivos, como negativos")
alert("Dependendo dos sentimos que você tiver durante sua trajetória, isso pode te abalar mentalmente, ou lhe dar impulso para realizar seu sonho")
alert("Também você terá uma barra com sua vida, e seu objetivo é ir tomando as melhores decisões durante essa caminhada para realizar seu sonho, ser atleta Olimpíco")

while(checkpoint1 == true){

let escolha1 = Number(prompt("Para qual pais você quer ir? \n1- Alemanha \n2- Russia"))

if (escolha1 == 1) {
    alert("Parabens, você deu o passo o certo na sua carreira, na Alemanha, você recebera uma bolsa atleta e se aproxima de seu sonho")
    vida++

} else {
    alert("Você indo para Rússia fica mais distante do seu sonho e terá que pagar para ser atleta profissional")
    vida--

}
alert("Você foi para um país diferente, uma cultura totalmente diferente de seu país, chegando no treino, você não faz uma exibição muita boa e recebe comentários como, VOCÊ É RUIM, NÃO VAI CONSEGUIR, LUTA MAL")
let escolha2 = Number(prompt("Se fosse fosse o atleta o que faria? \n1- Sairia do treino cabisbaixo e pensaria em voltar para seu país \n2- Absorveria todos esses comentários e voltaria mais forte no proximo treino"))

if (escolha2 == 1) {
    alert("Você ficou triste e pensa em parar de lutar e assim, não realizar seu sonho")
    vida--
    inventario.push("INSUFICIÊNCIA")
    console.log("Você recebeu o item 'INSUFICIÊNCIA' no seu inventário!")

} else {
    alert("Você voltou para casa, refletiu sobre seu desempenho e no próximo treino mandou muito bem, PARÁBENS")
    vida++
    inventario.push("DETERMINAÇÃO")
    console.log("Você recebeu o item 'DETERMINAÇÃO' no seu inventário!")
}
alert("Você chega em casa depois do treino cansado, e a única coisa que você quer fazer é tomar um banho e comer, mas você está com preguiça de fazer a janta e resolve pedir")

let escolha3 = Number(prompt("Você tem 3 decisões que pode tomar, Qual você escolheria \n1- Pedi uma janta saudavel e não saí da sua rotina de dieta \n2- Pedi um fast food e joga por água abaixo o esforço que você fez no dia \n3- Simplismente não janta e apenas toma uma água e dorme"))

if (escolha3 == 1) {
    alert("Parabens, você seguiu sua rotina de dieta e está pronto para superar essa dia de fracasso")
    vida++
    inventario.push("SUPERAÇÃO") 
    console.log("Você recebeu o item 'SUPERAÇÃO' no seu inventário!") 

} else {
    alert("Você não resistiu ao dia dificil e simplismente chutou o balde e jogou todo o esforço do dia fora")
    vida--
    inventario.push("INCAPACIDADE") 
    console.log("Você recebeu o item 'INCAPACIDADE' no seu inventário!")

} if (escolha3 == 3) {
    alert("O dia foi dificil, mas você precisa seguir sua rotina para superar esse dia ruim")
    vida--
    inventario.push("FRACASSO")
    console.log("Você recebeu o item 'FRACASSO' no seu inventário!")
}

alert("PARABENS, depois de muito esforço e suor derramado, chega um dia muito especial na sua vida")
alert("Você vai disputar sua primeira competição como profissional na sua vida, representando seu país, a competição será na Espanha")
alert("Chegando na competição você faz uma boa campanha e fica em 9 lugar na competição")
alert("Para festejar esse dia, seu grupo de amigos lhe chama para ir numa balada no país")
alert("Chegando na festa, você se depara com pessoas usando drogas e bebidas alcólicas para comemorar o seu sucesso na competição")

let escolha4 = Number(prompt("Se você fosse o atleta, o que faria? \n1- Se entregaria ao dia e usaría esses tipos de coisas \n2- Comemoria mas sendo conciente, não usando drogas nem bebidas alcólicas e aproveitando a vibe da festa"))

if (escolha4 == 1) {
    alert("Você foi muito bem na competiçao ficando no top 10, mas atletas não podem usar esse tipo de substância")
    vida--
} else {
    alert("Muito consciente sua atitude, mesmo tendo um dia de sucesso, soube comemorar de maneira conciente")
    vida++
}

alert("Você está um belo dia em casa e abre o computador, onde recebe um email de sua equipe com o titulo de, CONVITE PARA ARAB")
alert("Quando o atleta viu esse email ficou tenso e pensou se tinha feito algo errado") 
alert("Mas na verdade quando ele abriu esse email, ficou emocionado ao saber que esse convite era da EQUIPE DE REFUGIADOS DAS OLIMPÍADAS, onde ele foi chamado para representar esse time")
alert("Ele ficou muito feliz e emocionado com o convite e estava ansioso para participar, mas tinha um porém nessa história")
alert("Para Arab ir para as Olimpíadas de Paris, precisava abandonar seus amigos para ir representar a equipe, mas não era algo simples, pois foram esses amigos que lhe ajudaram desde de que ele pisou na Alemanha")
alert("Arab tinha agora um dilema em sua cabeça, sobre qual decisão tomar")

let escolha5 = Number(prompt("O que o atleta deve fazer? \n1- Ir para as Olimpíadas e realizar o seu sonho que ele pensou desde sempre em realizar, sabendo que seus amigos não poderíam ir \n2- Se contentar com o desempenho que ele teve na Espanha, onde ele ficou em 9 lugar e continuar com seus amigos, e não indo para as Olimpíadas"))

if (escolha5 == 1) { 
    alert("Parabéns, você aceitou o convite e vai representar um grupo seleto, onde na primeira vez nas Olimpíadas terá uma equipe de refugiados, onde você estará")
    vida++ 
    checkpoint1 = false

} else { 
    alert("Sabemos o quão bom é ter amizades verdadeiras, e seu desempenho foi muito bom no campeonato na Espanha, mas você não será um atleta Olimpíco")
    vida--
    
}  
}

alert("PARABENS, chegou o grande dia, você vai lutar judô nas Olimpíadas, você se dedicou muito para chegar nessa competição e finalmente realizou esse sonho")
alert("Arab está na competição, e depois de ter um desempenho muito bom, e para muitos até surpreendente, você chegou na final da competição de judõ das Olimpíadas")
alert("Você chegou muito confiante para luta, tendo certeza de que você ganharia o ouro, mas infelizmente algo aconteceu")
alert("Você perdeu a final de judô para seu adversário e ficou muito triste, lágrimas escorriam pelos seus olhos e você não ficava com vontade nenhuma de ir ao pódio receber a medalha de prata")
alert("Você foi para a fila para receber a medalha de prata e agora?")

let escolha6 = Number(prompt("Como o atleta tem que lidar com a situação \n1- Recebe a medalha de prata de cabeça erguida, apesar de você não ter ganhado o ouro, só de você ter ganhado uma medalha representando essa equipe já é muito especial \n2- Recebe a melha, mas nem veste ela, saindo de cabeça pra baixo e indo pro vestiário, pois está muito indignado de não ter ganhado o ouro"))

if (escolha6 == 1) { 
    alert("Parabéns, apesar de você não ter ganhado o ouro, é assim que se constroem não só verdadeiros campeões, mas também grande seres humanos")
    vida++  
    inventario.push("COMPETÊNCIA")
    console.log("Você recebeu o item 'COMPETÊNCIA' no seu inventário!")

} else { 
    alert("Na vida, nem sempre nós conseguiremos o primeiro lugar, saber perder e lidar com os momentos difíceis são crucias para chegar no sucesso, precisa melhorar a postura")
    vida--
    inventario.push("INDISCIPLINA")
    console.log("Você recebeu o item 'INDISCIPLINA' no seu inventário!") 
    
} 
