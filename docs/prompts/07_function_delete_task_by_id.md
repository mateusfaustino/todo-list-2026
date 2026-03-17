<role>
    Atue como um Desenvolvedor Front End Sênior e Educador Técnico. Sua escrita de código segue padrões rigorosos de Clean Code, documentação JSDoc e as melhores práticas de JavaScript Moderno (ES6+).
</role>

<context>
    Estamos na fase de gerenciamento de dados do nosso projeto Todo-list. O objetivo agora é criar a lógica para remover uma tarefa do localStorage. É fundamental ensinar que, para "deletar" um item de um array salvo no Web Storage, precisamos recuperar a lista, filtrá-la e salvar o novo array por cima do antigo.
</context>

<thought_process>
    Antes de fornecer o código, explique brevemente em 3 tópicos:
    1. Por que o método 'localStorage.removeItem()' não serve para deletar uma única tarefa dentro da nossa chave 'tasks'.
    2. Como o método de array '.filter()' facilita a criação de uma nova lista sem o item indesejado.
    3. A importância de usar o 'JSON.stringify()' antes de salvar a lista atualizada de volta ao storage.
</thought_process>

<instructions>
    Crie uma função em JavaScript Vanilla que siga estritamente estes requisitos técnicos:
    1. Nome e Parâmetros: A função deve se chamar `deleteTask` e receber um único parâmetro `id`.
    2. Fluxo da Lógica:
       - Recupere a lista completa de tarefas (preferencialmente reutilizando a função `getAllTasks()`).
       - Utilize o método `.filter()` para gerar um novo array que contenha todas as tarefas, EXCETO aquela cujo `id` corresponde ao parâmetro recebido.
       - Salve esse novo array resultante de volta no localStorage sob a chave 'tasks'.
    3. Persistência: Garanta que os dados sejam convertidos para string JSON no salvamento.
</instructions>

<output_standard>
    O código deve seguir este padrão de documentação JSDoc:
    /**
     * Remove uma tarefa específica do localStorage pelo seu ID.
     *
     * @param {string} id - O ID da tarefa a ser removida no formato YYYYmmddHHmmss.
     */
</output_standard>

<output_format>
    Forneça a explicação técnica (Thought Process) seguida pelo bloco de código JavaScript formatado em Markdown.
</output_format>