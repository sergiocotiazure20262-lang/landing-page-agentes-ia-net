# COTI — Arquiteto de Inteligência Artificial com .NET

Repositório público da landing page do curso.

Site: https://sergiocotiazure20262-lang.github.io/landing-page-agentes-ia-net/

Landing page estática e responsiva sem datas fixas de turma. HTML, CSS e JavaScript puro, sem instalação e sem dependências de execução externas.

## Abrir para teste

1. Extraia o ZIP inteiro, preservando a pasta `assets`.
2. Abra `index.html` no navegador.
3. Para editar no VS Code, abra a pasta do projeto. Se preferir, use a extensão Live Server.

Opcionalmente, com Python instalado, execute na pasta do projeto:

```bash
python -m http.server 8080
```

Acesse http://localhost:8080.

## Arquivos

- `index.html`: textos, datas, condições de pagamento, ementa, benefícios e FAQ.
- `styles.css`: identidade visual, componentes e versões para celular e desktop.
- `script.js`: WhatsApp, menu do celular e expansão da ementa.
- `assets/`: logos oficiais, favicon, fonte local e retrato do professor.

## Personalizar

- Conteúdo e valores: edite `index.html`.
- WhatsApp e mensagem: edite `whatsappMessage` e `whatsappUrl` em `script.js`; atualize também os links de contingência e telefone no HTML caso o número mude.
- Identidade visual: as cores ficam nas variáveis do início de `styles.css`.
- Imagem do professor/curso: substitua `assets/sergio-mendes.png` e atualize o texto alternativo e as dimensões se necessário.

## Publicação

Envie o conteúdo desta pasta para uma hospedagem estática (index.html na raiz). Não existe etapa de build, servidor de aplicação ou banco de dados.

Para prévias de compartilhamento em redes sociais, adicione `og:url` e `og:image` com URLs absolutas depois de definir o endereço público definitivo. A página já contém título, descrição, idioma, favicon e metadados Open Graph básicos.

## Funcionalidades e escopo

- Navegação por seções e menu responsivo com suporte à tecla Escape.
- Nove módulos em elementos `details`, com botão expandir/recolher todos.
- FAQ expansível e botões de WhatsApp com mensagem preenchida.
- Botão de contato fixo no celular.
- Recursos locais, links externos seguros, foco visível e respeito à preferência por movimento reduzido.
- Sem formulário, analytics, cookies próprios, processamento de pagamento ou envio automático de mensagens. A matrícula é tratada no WhatsApp.
- Publicação pelo GitHub Pages a partir da raiz da branch `main`.

## Conteúdo comercial

20h em cinco encontros, às terças e quintas, das 18h às 22h. Consulte as datas com a COTI.
Cartão: 10 × R$ 140,00, total de R$ 1.400,00.
Boleto: entrada de R$ 154,00 + 36 × R$ 60,49, total de R$ 2.331,64.
Benefícios adicionais foram extraídos do cartaz enviado: aulas no Zoom/presenciais, gravações e material didático e possibilidade de refazer por um ano. Confirme as condições comerciais antes da divulgação.

## Identidade e créditos

Referência visual: https://www.cotiinformatica.com.br/livro/
Logos e favicon: arquivos oficiais da página de referência, incluídos localmente para uso neste projeto COTI.
Retrato: foto fornecida pelo cliente, editada para alterar a camisa para preta.
Fontes locais: Manrope e Sora, disponíveis no Google Fonts sob SIL Open Font License.
Diagramas de arquitetura e RAG: construídos em HTML/CSS e SVG para esta landing page; representa uma visão didática dos componentes, sem dados de execução reais.

## Verificações realizadas

- JavaScript validado com `node --check`.
- Recursos locais, IDs e destinos das âncoras conferidos.
- Layout inspecionado em navegador desktop e em quadro de 390px de largura.
- Ementa expandir/recolher, navegação e menu móvel testados.
- Carregamento do logo e retrato verificado.

## Revisão visual 02

- Fontes Manrope e Sora locais, com pesos definidos por arquivo.
- Tipografia ampliada e contraste revisto.
- Retrato do professor com camisa preta em substituição ao anúncio.
- Ícones SVG e conectores redesenhados; novo fluxo didático de RAG.
- Link oficial do curso na área de investimento e no rodapé: https://www.cotiinformatica.com.br/curso/agentes-ia-ccharp

## Revisão 03

Datas de início e fim e calendário removidos, inclusive dos metadados e da mensagem do WhatsApp. Dias da semana, horário e duração mantidos. Arte original de robô amigável adicionada como fundo discreto; arquivo local `assets/robo-ia-fundo.png`.
