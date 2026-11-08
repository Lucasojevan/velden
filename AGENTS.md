# Velden — Instruções do projeto

Site institucional estático da Velden, empresa em estágio inicial que desenvolve aplicações e soluções digitais. A direção visual obrigatória é o Modelo 04: fundo navy profundo, curvas luminosas em azul/ciano, tipografia editorial nítida e cartões discretos.

## Arquitetura

- `dist/index.html`: página, conteúdo e componentes semânticos.
- `dist/styles.css`: tokens, responsividade, motion e efeitos SVG/CSS.
- `dist/app.js`: navegação, carrossel e formulário local.

O build é deliberadamente sem dependências: `dist/` é publicado diretamente. Ao evoluir o projeto, preserve HTML semântico, foco visível, contraste AA, navegação por teclado, `prefers-reduced-motion` e ausência de métricas ou clientes não comprovados.

## Padrões

- Paleta: `#030817`, `#07122b`, `#075bff`, `#00bfff`, `#f8faff`, `#a7b4ca`.
- Mobile-first; validar 360, 390, 768, 1024, 1440 e 1920px sem overflow horizontal.
- Animações só com `transform` e `opacity` quando possível; desligáveis por preferência do usuário.
- O formulário deve comunicar que ainda não há serviço de envio configurado, jamais sucesso fictício.
- Não introduza dependências, dados externos, credenciais ou integrações sem necessidade confirmada.

## Critérios de aceite

Hero cinematográfica responsiva, navegação desktop/mobile, cards de soluções, portfólio navegável por toque/teclado, processo, manifesto, contato validado, SEO básico e deploy estático funcionando.

## Verificação

- `node --check dist/app.js`
- abrir `dist/index.html` em servidor estático e testar desktop/mobile.
- revisar visual e links antes de publicar.
