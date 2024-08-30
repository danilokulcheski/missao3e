const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Clube de Futebol Flamengo é um dos clubes mais tradicionais do Brasil?",
        alternativas: [
            {
                texto: "O Flamengo tem uma rica história que remonta ao final do século XIX e é conhecido por sua importância no cenário futebolístico brasileiro.",
                afirmacao: "afirmativo1."
            },
            {
                texto: "O Flamengo foi fundado em 17 de novembro de 1895.O Flamengo foi fundado em 17 de novembro de 1895.",
                afirmacao: "afirmacao2"
            }
        ]
    },
    {
        enunciado: "O Flamengo é um dos clubes mais vitoriosos do Campeonato Brasileiro?",
        alternativas: [
            {
                texto: "O clube tem uma trajetória marcante no Campeonato Brasileiro, com várias conquistas ao longo dos anos.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "O Flamengo conquistou 8 títulos do Campeonato Brasileiro até 2024.",
                afirmacao: "afirmacao4"
            }
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao: "afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
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
    
