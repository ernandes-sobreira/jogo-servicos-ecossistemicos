# Paisagem Viva · Serviços ecossistêmicos

**Idealizado por Ernandes Sobreira Oliveira Junior.**

Simulação interativa de manejo da paisagem, com perdas e ganhos na produção, na água, no solo, na biodiversidade e nos benefícios culturais.

Jogo para professores interessados em serviços ecossistêmicos e no diálogo com seus alunos sobre o manejo da paisagem.

## Experiência atual
Nove setores, seis ciclos e três decisões por ciclo. Cada setor abre em uma janela isolada. A pontuação aparece apenas após o último ciclo. A tela indica um próximo passo por vez: escolher uma paisagem enquanto há decisões e recursos, depois avançar o ciclo. O território pode ser revisto quando as decisões terminam.

O visual usa azul-marinho, branco, azul e laranja com texto maior. As combinações principais de texto e fundo têm contraste acima de 7:1. Fotos sintéticas realistas permanecem como imagens do território.

## Agricultura
Onze práticas distribuídas entre Solo e água e Vida e controle:
- Cobertura do solo; plantio direto; rotação de culturas; composto orgânico; adubação mineral; irrigação por gotejamento.
- Faixas floridas e controle biológico; bioinsumo para crescimento; bioinseticida microbiano; manejo integrado de pragas; inseticida de amplo espectro.

Os três componentes do sistema de plantio direto interagem no modelo. Os agentes biológicos têm funções, durações e condicionantes distintos. A incompatibilidade simulada com o inseticida não deve ser generalizada para todos os produtos. A água retirada pela irrigação é compartilhada. Há custos de oportunidade e efeitos ao longo do tempo; nenhuma ação recebe um desconto fixo de pontos por seu nome.

Agricultura, pecuária, produção florestal, pesca e atividades comunitárias permanecem opções de uso. As conversões distinguem madeira aproveitada uma vez de produtos e estoques futuros. O registro fica no navegador e pode ser exportado em JSON. Partidas da versão anterior são migradas preservando seu progresso.

## Arquivos e verificação
`dist/engine.mjs`: regras e indicadores. `dist/practices.mjs`: novas práticas e suas relações. `dist/app.js`: interação e fluxo. Executar `node tests.mjs`.

22 grupos de verificações cobrem orçamento, pontuação oculta, combinações, causalidade, duração, estoques, migração e invariantes de 100 partidas variadas. A validação no navegador percorreu todos os 11 manejos agrícolas durante uma partida completa, verificou bloqueio de aplicação sem decisões e consulta dos planos.

Custos, quantidades, pesos e limiares são convenções didáticas sem calibração ou valor preditivo. Os ciclos não são anos. As referências conceituais da Embrapa, FAO e Avaliação do Milênio estão no caderno docente.

## Executar o jogo

O jogo é estático e não exige instalação de dependências. Inicie um servidor HTTP a partir da raiz deste repositório:

```sh
python3 -m http.server 8000 --directory dist
```

Abra `http://localhost:8000`. É necessário usar HTTP para carregar os módulos JavaScript; abrir o HTML diretamente pelo explorador de arquivos pode impedir o carregamento. O progresso fica no navegador.

Para validar as regras, as respostas visuais e o fluxo, com Node.js 18 ou superior:

```sh
npm test
```

## Hospedagem e privacidade

Este repositório contém o código, as imagens e os testes da versão do jogo. A hospedagem atual em Sites permanece privada: https://ecologia-paisagem-viva-profbio.ernandes-sobreira.chatgpt.site. O GitHub Pages foi ativado na configuração do repositório e já oferece uma cópia pública. Sua página inicial encaminha diretamente para o jogo em `dist/`: https://ernandes-sobreira.github.io/jogo-servicos-ecossistemicos/. A versão em Sites mantém seu acesso privado, independente do GitHub Pages.

## Idealização

**Ernandes Sobreira Oliveira Junior** — idealização do jogo, proposta pedagógica e orientação das decisões de desenvolvimento. O crédito também aparece na interface. Implementação realizada com apoio de ferramentas de inteligência artificial. As fotografias são imagens sintéticas realistas usadas com finalidade didática.

O repositório inclui os arquivos necessários para executar o jogo e suas verificações, sem dados de partidas ou credenciais de hospedagem.

## Resposta visual imediata
Depois de aplicar um manejo, a janela mostra um comparador antes/depois e a direção das respostas dos quatro serviços, sem revelar pontuação. O estado visual combina fotos de referência sintéticas e camadas explicativas de processos. Palhada, rotação, faixas floridas, gotejamento, piquetes, vegetação jovem, trilhas e usos comunitários permanecem visíveis no mapa e após recarregar a partida. A vegetação jovem só muda de estágio com os ciclos.

As setas comparam o cenário antes/depois sob as mesmas condições. Respostas graduais usam até dois avanços sem novos manejos, em cópias da partida. As linhas no território indicam efeitos na vizinhança da polinização ou no recurso hídrico compartilhado, conforme as regras do modelo. São conexões didáticas e não caminhos hidrológicos medidos. Não se representa crescimento instantâneo nem se apresenta uma previsão calibrada.

`dist/visual.mjs` contém a seleção das cenas, as camadas e o relatório de respostas. Executar também `node visual-tests.mjs`: 12 grupos adicionais verificam persistência, combinações, causalidade, tempo de resposta, ausência de pontos no feedback e ausência de efeitos colaterais na partida. A aplicação do inseticida mantém as faixas floridas físicas e reduz a atividade biológica representada durante sua ação.

A validação no navegador incluiu controle do comparador, mudança imediata da fotografia, combinação de palhada/irrigação/faixas floridas, exposição de setores vizinhos, expiração dos resíduos, conclusão da partida e persistência das mudanças após recarregar, sem erros da aplicação.

## Abertura e público-alvo
O popup de boas-vindas abre a cada carregamento do sistema, mesmo quando já existe uma partida salva. Apresenta o público-alvo, três passos para jogar, regras básicas e perguntas para dialogar com os alunos. A abertura não reinicia nem modifica o progresso salvo. O botão Como jogar permite rever as instruções durante a partida.

## Fluxo orientado
A tela principal destaca “Clique em uma paisagem”, com um botão “Escolher” em cada imagem. O botão de avançar aparece em destaque após o esgotamento das decisões ou dos recursos necessários para outro manejo. Encerrar um ciclo com decisões restantes continua disponível nas ferramentas recolhidas.

Depois de aplicar, um único botão principal leva à próxima escolha ou ao avanço do ciclo. As conexões ficam desligadas por padrão. Contexto do ciclo, efeitos nos outros setores, registros e ferramentas são abertos sob demanda. A abertura mantém público-alvo e três instruções curtas, com regras detalhadas recolhidas.

`node flow-tests.mjs` verifica início, última escolha, fim das decisões, falta de recursos, novo ciclo e resultado final. A validação no navegador confirmou o percurso de aplicação, a indicação da última escolha e a passagem ao próximo ciclo, preservando o comparador e os serviços no feedback.
