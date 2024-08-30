const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Flamengo tem uma rica história que remonta ao final do século XIX e é conhecido por sua importância no cenário futebolístico brasileiro.",
        alternativas: [
            {
                texto: "O Flamengo foi fundado em 17 de novembro de 1895.",
                afirmacao: "O Flamengo foi fundado em 17 de novembro de 1895 como um clube de regatas, refletindo a popularidade do remo no Brasil da época. Com o tempo, o clube se expandiu para o futebol, tornando-se uma das maiores potências esportivas do país.."
            },
            {
                texto: "O Flamengo foi fundado originalmente como um clube de regatas antes de se tornar um time de futebol.",
                afirmacao: "afirmacao2"
            }
        ]
    },
    {
        enunciado: "O clube tem uma trajetória marcante no Campeonato Brasileiro, com várias conquistas ao longo dos anos.",
        alternativas: [
            {
                texto: "O Flamengo venceu o Campeonato Brasileiro pela primeira vez em 1980",
                afirmacao: "afirmacao3"
            },
            {
                texto: "O Flamengo conquistou 8 títulos do Campeonato Brasileiro até 2024.",
                afirmacao: "afirmacao4"
            }
        ]
    },
    {
        enunciado: "O Flamengo joga suas partidas no estádio mais icônico do Rio de Janeiro.",
        alternativas: [
            {
                texto: "O Flamengo manda seus jogos no Estádio do Maracanã",
                afirmacao: "afirmacao5"
            },
            {
                texto: "O Estádio do Maracanã tem capacidade para mais de 78 mil espectadores.",
                afirmacao: "afirmacao6"
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>
            respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

  }
  mostraPergunta();
    
