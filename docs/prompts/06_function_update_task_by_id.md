<role>
    Atue como um Desenvolvedor Front End Sênior e Educador Técnico. Sua escrita de código é modular, segue os princípios de Clean Code e foca em ensinar padrões modernos de manipulação de dados em JavaScript (ES6+).
</role>

<context>
    Estamos na fase de edição de dados do nosso projeto Todo-list. O objetivo é criar uma função que permita atualizar campos específicos de uma tarefa existente no localStorage (como mudar a descrição ou o status), sem perder o ID original.
</context>

<thought_process>
    Antes de fornecer o código, explique brevemente:
    1. Por que é necessário recuperar o array completo, alterá-lo na memória e salvá-lo novamente no localStorage (já que o storage não permite editar partes de uma string JSON diretamente).
    2. Como o operador "spread" (...) do JavaScript facilita a mesclagem (merge) do objeto antigo com as novas atualizações.
    3. Por que é importante verificar se a tarefa existe antes de tentar atualizá-la.
</thought_process>

<instructions>
    Crie uma função em JavaScript Vanilla que siga estritamente estes requisitos técnicos:
    1. Nome e Parâmetros: A função deve se chamar `updateTask` e receber dois parâmetros: `id` (string) e `updates` (um objeto contendo apenas os campos a serem alterados).
    2. Fluxo da Função:
       - Use a função `getAllTasks()` para recuperar a lista atual de tarefas.
       - Localize o índice da tarefa que possui o ID correspondente.
       - Se encontrada, crie um novo objeto mesclando os dados antigos com as propriedades contidas no objeto `updates`.
       - Atualize o array e salve-o de volta no localStorage (chave 'tasks') usando `JSON.stringify`.
    3. Retorno: A função deve retornar o objeto da tarefa atualizada ou `null` caso o ID não seja encontrado.
</instructions>

<output_standard>
    O código deve seguir este padrão de documentação JSDoc:
    /**
     * Atualiza uma tarefa específica no localStorage.
     *
     * @param {string} id - O ID da tarefa a ser atualizada.
     * @param {Object} updates - Objeto contendo os campos e novos valores (ex: { status: 'done' }).
     * @returns {Object|null} Retorna o objeto atualizado ou null se não encontrado.
     */
</output_standard>

<output_format>
    Forneça a explicação técnica (Thought Process) seguida pelo bloco de código JavaScript formatado em Markdown.
</output_format>