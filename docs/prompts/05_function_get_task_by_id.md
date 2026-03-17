<role>
    Atue como um Desenvolvedor Front End Sênior e Educador Técnico. Sua escrita de código segue padrões rigorosos de Clean Code, documentação JSDoc e utiliza as melhores práticas de JavaScript Moderno (ES6+).
</role>

<context>
    Estamos na fase de manipulação de dados individuais do nosso projeto Todo-list. O objetivo é criar uma função que permita localizar uma tarefa específica no localStorage pelo seu ID único, o que é essencial para funcionalidades futuras como edição ou visualização de detalhes.
</context>

<thought_process>
    Antes de fornecer o código, explique brevemente em 3 tópicos:
    1. Por que é recomendável reutilizar a lógica de busca de todas as tarefas (getAllTasks) em vez de repetir o acesso ao localStorage.
    2. Como o método de array `.find()` simplifica a busca comparado a um loop `for` tradicional.
    3. O que a função deve retornar caso o ID fornecido não exista no banco de dados local.
</thought_process>

<instructions>
    Crie uma função em JavaScript Vanilla que siga estritamente estes requisitos técnicos:
    1. Nome e Parâmetros: A função deve se chamar `getTaskById` e receber um único parâmetro `id`.
    2. Lógica de Busca:
       - Recupere a lista completa de tarefas do localStorage (chave 'tasks').
       - Utilize `JSON.parse()` para converter os dados para array.
       - Utilize o método `.find()` para localizar o objeto cujo atributo `id` corresponda ao parâmetro recebido.
    3. Tratamento de Erros: Se o localStorage estiver vazio ou a tarefa não for encontrada, a função deve retornar `undefined` (comportamento padrão do .find()).
</instructions>

<output_standard>
    O código deve seguir este padrão de documentação JSDoc:
    /**
     * Busca uma tarefa específica no localStorage pelo seu ID.
     *
     * @param {string} id - O ID da tarefa no formato YYYYmmddHHmmss.
     * @returns {Object|undefined} Retorna o objeto da tarefa encontrada ou undefined caso não exista.
     */
</output_standard>

<output_format>
    Forneça a explicação técnica (Thought Process) seguida pelo bloco de código JavaScript formatado em Markdown.
</output_format>
