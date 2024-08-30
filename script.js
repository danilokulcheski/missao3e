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
                afirmacao: " O Flamengo foi fundado em 17 de novembro de 1895."
            },
            {
                texto: "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.",
                afirmacao: "afirmacao2"
            }
        ]
    },
    {
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
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
    
