<role>
    Atue como um Desenvolvedor Front End Sênior com foco em educação técnica. Você é especialista em HTML5 semântico, CSS3 moderno (Flexbox/Grid), acessibilidade e padrões de codificação limpa (Clean Code). [4, 5]
</role>

<context>
    Estamos em uma aula de Javascript focada em manipulação de DOM e estados. O objetivo é criar a interface de um "Gerenciador de Tarefas" (Todo-list) que demonstre como atributos de dados (data attributes) podem controlar visualmente o estado de um componente. [6]
</context>

<thought_process>
    Antes de gerar o código, explique brevemente (em 3 tópicos):
    1. Por que usar atributos como 'data-status' é uma prática superior ao uso de múltiplas classes CSS para representar estados de negócio (como 'done' ou 'pending'). [6, 7]
    2. Como o seletor de atributo do CSS será utilizado para diferenciar visualmente as tarefas concluídas. [8]
    3. Qual a importância de manter labels ARIA dinâmicas que reflitam o status atual da tarefa para usuários de tecnologias assistivas. [9]
</thought_process>

<instructions>
    1. Estrutura HTML: Crie um documento completo e semântico usando <header>, <main> e <section>. [10]
    2. Cabeçalho: Título principal "Gerenciador de Tarefas".
    3. Container: Um elemento centralizado para a lista de tarefas.
    4. Mockup de Dados: Crie uma lista com 10 tarefas fixas, sendo 7 com status 'pending' e 3 com status 'done'.
    5. Estrutura do Card: Cada tarefa deve estar em um <article> horizontal contendo:
        - Descrição da tarefa.
        - Atributos: "data-id" (formato YYYYmmddHHmmss) e "data-status" ('pending' ou 'done'). [6]
        - Botões de Ação: 
            * "Concluir" (Sucesso): botão com onclick="concludeTask('<id>')".
            * "Editar" (Aviso): link <a> com href="./edit.html?task=<id>".
            * "Excluir" (Perigo): botão com onclick="deleteTask('<id>')".
    6. Navegação Global: Um botão de "Criar Tarefa" (<a> com href="./create.html") posicionado no topo ou rodapé da lista.
    7. Estilização CSS:
        - Implemente um reset moderno e use variáveis CSS para cores. [11]
        - Diferenciação de Estado: Tarefas com data-status='done' devem apresentar aparência de concluídas (ex: texto com tachado/line-through, opacidade reduzida e cores acinzentadas). [6, 8]
        - Layout Responsivo: Utilize Mobile First com ajustes para desktop via Media Queries. [12]
</instructions>

<example_snippet>
    <!-- Exemplo de Card Concluído -->
    <article class="task-card" data-id="20260316080002" data-status="done" aria-label="Tarefa concluída: Estudar Engenharia de Prompt">
        <p class="task-description">Estudar Engenharia de Prompt</p>
        <div class="task-actions">
            <button type="button" class="btn btn-success" disabled>Concluída</button>
            <a href="./edit.html?task=20260316080002" class="btn btn-warning">Editar</a>
            <button type="button" class="btn btn-danger" onclick="deleteTask('20260316080002')">Excluir</button>
        </div>
    </article>
</example_snippet>

<rules>
    1. Apenas HTML e CSS (JavaScript será o próximo passo da aula).
    2. Acessibilidade Rígida: Use roles de lista e atributos ARIA que identifiquem claramente o que cada botão faz em relação à tarefa específica. [9]
    3. Didática: Adicione comentários breves explicando como os seletores `[data-status='done']` funcionam no arquivo CSS. [6]
    4. Design: Estilo moderno (Clean UI), com foco em contraste e espaçamento.
</rules>

<output_format>
    Forneça o código em blocos de Markdown separados:
    1. Explicação técnica (Thought Process).
    2. HTML.
    3. CSS (incluindo as regras de estado).
</output_format>
